from django.db import models

# Create your models here.
class MapTile(models.Model):

    xCoord = models.IntegerField()
    yCoord = models.IntegerField()

    def __str__(self):
        return "MapTile"