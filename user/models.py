from django.db import models
from django.contrib.auth.models import AbstractBaseUser

class User(AbstractBaseUser):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=15)
    email = models.CharField(max_length=64)
    password = models.CharField(max_length=64)

    USERNAME_FIELD = 'username'
    EMAIL_FIELD = 'email'

    REQUIRED_FIELDS = ['username', 'email', 'password']

    def __str__(self):
        return self.username

