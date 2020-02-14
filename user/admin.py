from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User

from . import models
from property.models import Property, PropertyTransaction

class UserAdmin(BaseUserAdmin):

    list_display = ['id', 'username', 'email', 'date_joined', 'last_login', 'is_active', 'is_staff', 'is_superuser']
    list_filter = ['date_joined', 'is_active', 'is_staff', 'is_superuser']

    fieldsets = (
        (
            None, 
            {
                'fields': (
                    'username', 
                    'email', 
                    'is_active'
                )
            }
        ),
        (
            'Permissions', 
            {
                'fields': (
                    'is_staff',
                    'is_superuser'
                )
            }
        )
    )
    
    add_fieldsets = (
        (
            None, 
            {
                'fields': (
                    'email', 
                    'username', 
                    'password'
                ),
            }
        ),
    )

    search_fields = ('id', 'username', 'email')
    ordering = ('username', 'email')

# set admin site header
admin.site.site_header = 'Cities Deadlines Administration'

# register admin/user
admin.site.register(models.User, UserAdmin)
admin.site.unregister(Group)