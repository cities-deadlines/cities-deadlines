from django.db import models
import json

# Create your models here.
class MapTile(models.Model):
    xCoord = models.IntegerField()
    yCoord = models.IntegerField()
    # store the contents of the maptile in json format; provides easy formatting for limited data size
    mapContentsJson = models.TextField()

    def __str__(self):
        return "MapTile"