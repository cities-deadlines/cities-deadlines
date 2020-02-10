from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from django.core.mail import send_mail
import re 

class UserManager(BaseUserManager):
    
    def create_user(self, email, username, password):

        # check for fields
        if not email: raise ValidationError('No email supplied.')
        if not username: raise ValidationError('No username supplied.')
        if not password: raise ValidationError('No email supplied.')

        # validate fields
        try: validate_email(email)
        except Exception: raise ValidationError('Invalid email.')
        if not re.match(r'^[a-zA-Z0-9_-]{3,15}$', username): raise ValidationError('Invalid username (at least 3 characters).')
        if not re.match(r'^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$', password):
            raise ValidationError('Invalid password (at least 8 characters with one number and special character).')

        # validate unique fields
        email_flag = True
        try: self.model.users.get(email=email)
        except: email_flag = False
        if email_flag: raise ValidationError('This email has already been registered.')

        # validate unique username field
        username_flag = True
        try: self.model.users.get(username=username)
        except: username_flag = False
        if username_flag: raise ValidationError('This username is already in use.')

        # create user
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
        if not password: raise ValidationError('No password supplied.')

        # validate fields
        try: validate_email(email)
        except Exception: raise ValidationError('Invalid email.')
        if not re.match(r'^[a-z0-9_-]{3,15}$', username): raise ValidationError('Invalid username (must be 3-15 characters).')
        if not re.match(r'^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,64}$', password):
            raise ValidationError('Invalid password (must be 8-64 characters with one number and special character).')

        # validate unique fields
        email_flag = True
        try: self.model.users.get(email=email)
        except: email_flag = False
        if email_flag: raise ValidationError('This email has already been registered.')

        # validate unique username field
        username_flag = True
        try: self.model.users.get(username=username)
        except: username_flag = False
        if username_flag: raise ValidationError('This username is already in use.')
        
        # create user
        user = self.model(
            username=username,
            email=self.normalize_email(email),
            is_active=True,
            is_staff=True,
            is_superuser=True
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

class User(AbstractBaseUser, PermissionsMixin):

    # model metadata
    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')

    # base user fields
    username = models.CharField(_('username'), max_length=150, unique=True)
    email = models.EmailField(_('email address'), unique=True)
    is_staff = models.BooleanField(_('staff status'), default=False)
    is_active = models.BooleanField(_('active'), default=True)
    date_joined = models.DateTimeField(_('date joined'), default=timezone.now)

    # required fields (for django)
    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    # attach custom model manager
    users = UserManager()