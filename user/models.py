from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import BaseUserManager
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
import re 

class UserManager(BaseUserManager):
    
    def create_user(self, email, username, password):
        try:

            # check for fields
            if not email: raise ValidationError('No email supplied')
            if not username: raise ValidationError('No username supplied')
            if not password: raise ValidationError('No email supplied')

            # validate fields
            try: validate_email(email)
            except Exception: raise ValidationError('Invalid email supplied')
            if not re.match(r'^[a-z0-9_-]{3,15}$', username): raise ValidationError('Invalid username supplied')
            if not re.match(r'^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$', password):
                raise ValidationError('Invalid password supplied')

            user = self.model(
                username=username,
                email=self.normalize_email(email)
            )
            user.set_password(password)
            user.save(using=self._db)
            return user

        except ValidationError as e:
            print('Failed to create user: ' + str(e))
            return None
    
    def create_superuser(self, email, username, password):
        try:

            # check for fields
            if not username: raise ValidationError('No username supplied')
            if not email: raise ValidationError('No email supplied')
            if not password: raise ValidationError('No email supplied')

            # validate fields
            try: validate_email(email)
            except Exception: raise ValidationError('Invalid email supplied')
            if not re.match(r'^[a-z0-9_-]{3,15}$', username): raise ValidationError('Invalid username supplied')
            if not re.match(r'^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$', password):
                raise ValidationError('Invalid password supplied')

            user = self.model(
                username=username,
                email=self.normalize_email(email)
            )
            user.set_password(password)
            user.is_superuser = True
            user.save(using=self._db)
            return user

        except ValidationError as e:
            print('Failed to create user: ' + str(e))
            return None

class User(AbstractBaseUser):

    # base data fields (required)
    email = models.EmailField(_('email'), unique=True, max_length=32)
    username = models.CharField(_('username'), max_length=15, unique=True)
    password = models.CharField(_('password'), max_length=64)

    # user metadata fields (automated)
    id = models.AutoField(primary_key=True, unique=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    isActive = models.BooleanField(default=True)

    # model metadata
    USERNAME_FIELD = 'username'
    EMAIL_FIELD = 'email'
    PASSWORD_FIELD = 'password'
    REQUIRED_FIELDS = ['email', 'username', 'password']
    
    # model manager
    objects = UserManager()
            