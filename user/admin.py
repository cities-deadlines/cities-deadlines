from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User

from . import models

class UserAdmin(BaseUserAdmin):

    list_display = ('username', 'email', 'date_joined', 'last_login', 'is_active', 'is_superuser')
    list_filter = ('is_superuser', 'is_active', 'date_joined')

    fieldsets = (
        (
            None, 
            {
                'fields': (
                    'username', 
                    'email', 
                    'is_active',
                    'date_joined',
                    'last_login'
                )
            }
        ),
        (
            'Permissions', 
            {
                'fields': (
                    'is_superuser',
                    'is_staff'
                )
            }
        )
    )
    
    add_fieldsets = (
        (
            None, 
            {
                'classes': (
                    'wide',
                ),
                'fields': (
                    'email', 
                    'username', 
                    'password'
                ),
            }
        ),
    )

    search_fields = ('username', 'email')
    ordering = ('username', 'email')
    filter_horizontal = ()

# register admin/user
admin.site.register(models.User, UserAdmin)
admin.site.unregister(Group)
            
# set admin site header
admin.site.site_header = 'Cities Deadlines Administration'