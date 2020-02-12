from django.db import models

# Create your models here.
class Building(models.Model):
    owner = models.ForeignKey()
    value = models.IntegerField()