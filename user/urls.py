from django.urls import path

from . import views

urlpatterns = [
    path('register/', views.register),
    path('login/', views.login),
    path('signout/', views.signout),
    path('current/', views.fetchCurrentUser)
]