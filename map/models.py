from django.db import models

# Create your models here.
class MapTile(models.Model):
    xCoord = models.IntegerField()
    yCoord = models.IntegerField()
    # store the contents of the maptile in json format; provides easy formatting for limited data size
    
    # so, we need some way to encapsulate buildings at given locations on the map, roading/filler tile
    # networks.  On the constructor, needs to construct 100 buildings under properties, give ownership
    # to some fake account, etc.

    def __str__(self):
        return "MapTile"