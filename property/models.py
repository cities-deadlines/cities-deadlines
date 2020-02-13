from django.db import models
from map.models import MapTile
from user.models import User
from django.utils.translation import gettext_lazy as _
from django.utils import timezone

class Property(models.Model):
    
    class Meta:
        verbose_name = _('property')
        verbose_name_plural = _('properties')

    class BuildingTypes(models.TextChoices):
        skyscraper1 = 'skyscraper1'
        skyscraper2 = 'skyscraper2'
        tripletowers1 = 'tripletowers1'

    # current value - we should keep all currency in integer amounts, to stop overflow issues with percentages
    # default is the initial price to purchase property lot
    value = models.IntegerField(_('property value'), default=10) 

    # set these fields on property update
    # defaults are the initial property tier of 1 and initial rating of 0
    tier = models.IntegerField(_('property tier'), default=1)
    rating = models.IntegerField(_('property rating'), default=0)

    # allow only the specific building types as defined above
    buildingType = models.CharField(_('building type'), max_length=100, choices=BuildingTypes.choices)
    
    # need some way to store purchase history here; realistically, a purchase history is probably going to
    # be its own data structure?

    # instantiate the many-to-one relationship between users and buildings (a user can own multiple buildings)
    owner = models.ForeignKey(
        User, 
        on_delete=models.SET_NULL, # set owning user to NULL when user is deleted
        null=True
    )

class PropertyTransaction(models.Model):
    
    class Meta:
        verbose_name = _('property transaction')
        verbose_name_plural = _('property transactions')

    date = models.DateTimeField(_('date'), default=timezone.now)

    amount = models.IntegerField(_('transaction amount'))

    buyer = models.ForeignKey(
        User, 
        on_delete=models.SET_NULL, # set buying user to NULL when user is deleted
        related_name='buyer',
        null=True
    )

    seller = models.ForeignKey(
        User, 
        on_delete=models.SET_NULL, # set selling user to NULL when user is deleted
        related_name='seller',
        null=True
    )

    target_property = models.ForeignKey(
        Property,
        on_delete=models.CASCADE # delete property transaction when property is deleted

    ) 