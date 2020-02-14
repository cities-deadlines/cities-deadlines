from django.contrib import admin

from .models import Property, PropertyTransaction

class PropertyAdmin(admin.ModelAdmin):
    
    list_display = ['id', 'name', 'description', 'owner', 'value', 'building_type', 'tier', 'rating', 'date_created']
    list_filter = ['value', 'building_type', 'tier', 'rating', 'date_created']

    fieldsets = [
        (
            None, 
            {
                'fields': [
                    'name',
                    'description',
                    'owner',
                    'value',
                    'building_type',
                    'tier',
                    'rating'
                ]
            },
        ),
    ]
    
    add_fieldsets = [
        (
            None, 
            {
                'fields': [
                    'name',
                    'description',
                    'owner',
                    'value',
                    'building_type',
                    'tier',
                    'rating'
                ],
            }
        ),
    ]

    search_fields = ['id', 'name', 'owner']
    ordering = ['name']

class PropertyTransactionAdmin(admin.ModelAdmin):
    
    list_display = ['id', 'amount', 'buyer', 'seller', 'target_property', 'date']
    list_filter = ['date']

    fieldsets = [
        (
            None, 
            {
                'fields': [
                    'amount',
                    'buyer',
                    'seller',
                    'target_property'
                ]
            },
        ),
    ]
    
    add_fieldsets = [
        (
            None, 
            {
                'fields': [
                    'amount',
                    'buyer',
                    'seller',
                    'target_property'
                ],
            }
        ),
    ]

    search_fields = ['id', 'buyer', 'seller']
    ordering = ['id']

# register property/transaction
admin.site.register(Property, PropertyAdmin)
admin.site.register(PropertyTransaction, PropertyTransactionAdmin)
