from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
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
            email=self.normalize_email(email),
            is_active=True
        )
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, username, password):

        # check for fields
        if not username: raise ValidationError('No username supplied.')
        if not email: raise ValidationError('No email supplied.')
        if not password: raise ValidationError('No email supplied.')

        # validate fields
        try: validate_email(email)
        except Exception: raise ValidationError('Invalid email.')
        if not re.match(r'^[a-z0-9_-]{3,15}$', username): raise ValidationError('Invalid username (must be 3-15 characters).')
        if not re.match(r'^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,64}$', password):
            raise ValidationError('Invalid password (must be 8-64 characters with one number and special character).')

        user = self.model(
            username=username,
            email=self.normalize_email(email),
            is_superuser=True,
            is_staff=True,
            is_active=True
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

class User(AbstractUser):
    
    # model manager
    users = UserManager()