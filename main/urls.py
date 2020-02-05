"""
URL Configuration for main project.
"""

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')), # frontend urls (default)
    path('admin/', admin.site.urls), # admin urls
    path('user/', include('user.urls')) # user urls
]
