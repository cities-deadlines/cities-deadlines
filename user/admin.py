from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User

from . import models

class UserAdmin(BaseUserAdmin):

    list_display = ('username', 'email')
    list_filter = ('is_superuser',)

    # fieldsets = (
    #     (None, {'fields': ('email', 'password')}),
    #     ('Permissions', {'fields': ('is_admin',)}),
    # )
    
    # add_fieldsets = (
    #     (None, {
    #         'classes': ('wide',),
    #         'fields': ('email', 'date_of_birth', 'password1', 'password2'),
    #     }),
    # )
    
    search_fields = ('username', 'email')
    ordering = ('username', )
    filter_horizontal = ()

# register admin/user
admin.site.register(models.User, UserAdmin)
admin.site.unregister(Group)
            