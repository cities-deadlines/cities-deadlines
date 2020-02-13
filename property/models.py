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

    value = models.IntegerField(_('property value'), default=10) 
    buildingType = models.CharField(_('building type'), max_length=100, choices=BuildingTypes.choices)

    # set these fields on property update
    tier = models.IntegerField(_('property tier'), default=1)
    rating = models.IntegerField(_('property rating'), default=0)

    # relation fields
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

    # relation fields
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