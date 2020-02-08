from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib import auth

from . import models
from . import serializers

@api_view(['GET'])
def register(request):

    # fetch user data
    email = request.headers['email']
    username = request.headers['username']
    password = request.headers['password']

    # create user in manager
    user = auth.get_user_model().objects.create_user(
        email=email, 
        username=username,
        password=password
    )

    # login user
    if user is not None:
        auth.login(request, user)
        return Response(True)
    else: return Response(False)

@api_view(['GET'])
def login(request):

    print(request.user.is_authenticated)

    # fetch user data
    username = request.headers['username']
    password = request.headers['password']

    # authenticate user
    user = auth.authenticate(
        username=username, 
        password=password
    )

    # login user
    if user is not None:
        auth.login(request, user)
        return Response(True)
    else: return Response(False)

@api_view(['GET'])
def signout(request):
    auth.logout(request)