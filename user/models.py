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

        # check for fields
        if not email: raise ValidationError('No email supplied')
        if not username: raise ValidationError('No username supplied')
        if not password: raise ValidationError('No email supplied')

        # validate fields
        try: validate_email(email)
        except Exception: raise ValidationError('Invalid email')
        if not re.match(r'^[a-z0-9_-]{3,15}$', username): raise ValidationError('Invalid username (at least 3 characters)')
        if not re.match(r'^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$', password):
            raise ValidationError('Invalid password (at least 8 characters with one number and special character)')

        user = self.model(
            username=username,
            email=self.normalize_email(email)
        )
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, username, password):

        # check for fields
        if not username: raise ValidationError('No username supplied')
        if not email: raise ValidationError('No email supplied')
        if not password: raise ValidationError('No email supplied')

        # validate fields
        try: validate_email(email)
        except Exception: raise ValidationError('Invalid email')
        if not re.match(r'^[a-z0-9_-]{3,15}$', username): raise ValidationError('Invalid username (at least 3 characters)')
        if not re.match(r'^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$', password):
            raise ValidationError('Invalid password (at least 8 characters with one number and special character)')

        user = self.model(
            username=username,
            email=self.normalize_email(email)
        )
        user.set_password(password)
        user.is_superuser = True
        user.save(using=self._db)
        return user

class MyUser(AbstractBaseUser):

    # base data fields (required)
    email = models.EmailField(max_length=32, unique=True, verbose_name='email')
    username = models.CharField(max_length=15, unique=True, verbose_name='username')
    password = models.CharField(max_length=64, verbose_name='password')

    coolio = models.CharField(max_length=64, verbose_name='coolio')

    # user metadata fields (automated)
    id = models.AutoField(primary_key=True, unique=True, verbose_name='id')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='created_at')
    is_active = models.BooleanField(default=True, verbose_name='is_active')

    # model metadata
    USERNAME_FIELD = 'username'
    EMAIL_FIELD = 'email'
    PASSWORD_FIELD = 'password'
    REQUIRED_FIELDS = ['email', 'password']
    
    # model manager
    users = UserManager()
            