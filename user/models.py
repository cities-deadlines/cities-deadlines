from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import BaseUserManager
from django.core.exceptions import ValidationError
from django.core.validators import validate_email

class User(AbstractBaseUser):

    # base fields
    id = models.AutoField(primary_key=True)

    # change these to be the right field
    username = models.CharField(max_length=15)
    email = models.CharField(max_length=64)
    password = models.CharField(max_length=64)

    # model metadata
    USERNAME_FIELD = 'username'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'email', 'password']
    
    # model manager
    users = models.Manager()

    def __str__(self):
        return self.username

class UserManager(BaseUserManager):
    
    def create_user(self, username, email, password):
        try:
            validate_email(email)

        except ValidationError as e:
            print(e)