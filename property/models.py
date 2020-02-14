from django.db import models
from map.models import MapTile
from user.models import User
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
import uuid

class Property(models.Model):
    
    class Meta:
        verbose_name = _('Property')
        verbose_name_plural = _('Properties')

    class BuildingTypes(models.TextChoices):
        skyscraper1 = 'skyscraper1'
        skyscraper2 = 'skyscraper2'
        tripletowers1 = 'tripletowers1'

    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    date_created = models.DateTimeField(_('Date Created'), default=timezone.now)

    name = models.CharField(_('Name'), max_length=20, default='Property ' + str(uuid.uuid4())[:8])
    description = models.CharField(_('Description'), max_length=150, blank=True, default='')

    value = models.IntegerField(_('Value'), default=10) 
    building_type = models.CharField(
        _('Building Type'), 
        max_length=100, 
        choices=BuildingTypes.choices,
        default='skyscraper1'
    )

    # set these fields on property update
    tier = models.IntegerField(_('Tier'), default=1)
    rating = models.IntegerField(_('Rating'), default=0)

    # relation fields
    owner = models.ForeignKey(
        User, 
        on_delete=models.SET_NULL, # set owning user to NULL when user is deleted
        null=True
    )

    def __str__(self):
        return self.name

class PropertyTransaction(models.Model):
    
    class Meta:
        verbose_name = _('Property Transaction')
        verbose_name_plural = _('Property Transactions')

    date = models.DateTimeField(_('Date'), default=timezone.now)

    amount = models.IntegerField(_('Amount'))

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
