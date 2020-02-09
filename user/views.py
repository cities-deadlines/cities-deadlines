from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib import auth

from . import models
from . import serializers

@api_view(['GET'])
def register(request):
    try:

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
            return Response({
                'username': user.username,
                'email': user.email,
                'id': user.id
            })
        else: return Response(False)

    except: 
        return Response(False)

@api_view(['GET'])
def login(request):
    try:

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
            return Response({
                'username': user.username,
                'email': user.email,
                'id': user.id
            })
        else: return Response(False)

    except:
        return Response(False)

@api_view(['GET'])
def signout(request):
    try:

        # check if user is authenticated
        if not request.user.is_authenticated:
            return Response(False, status=401)

        # logout user
        auth.logout(request)
        return Response(True)

    except:
        return Response(False, status=401)

@api_view(['GET'])
def fetchCurrentUser(request):

    try:

        # check if user is authenticated
        if not request.user.is_authenticated:
            return Response(False, status=401)

        # return authenticated user 
        user = request.user 
        return Response({
            'username': user.username,
            'email': user.email,
            'id': user.id
        })

    except:
        return Response(False, status=401)