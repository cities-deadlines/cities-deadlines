from django.db import models
from map.models import MapTile
from user.models import User

# Create your models here.
class Building(models.Model):

    class BuildingTypes(models.TextChoices):
        skyscraper1 = "skyscraper1"
        skyscraper2 = "skyscraper2"
        tripletowers1 = "tripletowers1"

    # current value - we should keep all currency in integer amounts, to stop overflow issues with percentages.
    value = models.IntegerField()

    # allow only the specific building types as defined above
    buildingType = models.CharField(choices=BuildingTypes.choices)
    
    # need some way to store purchase history here; realistically, a purchase history is probably going to
    # be its own data structure?

    # instantiate the many-to-one relationship between users and buildings (a user can own multiple buildings)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)