from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import get_user_model

from . import models
from . import serializers

@api_view(['GET'])
def register(request):
    email = request.headers['email']
    username = request.headers['username']
    password = request.headers['password']

    print(email, username, password)

    return Response(False)

@api_view(['GET'])
def login(request):
    username = request.headers['username']
    password = request.headers['password']

    print(username, password)

    # print(request.user.is_authenticated)
    # user = get_user_model().objects.all()[0]
    # serialized = serializers.UserSerializer(user)
    # return Response(serialized.data)
    
    return Response(False)

@api_view(['GET'])
def signout(request):
    raise NotImplementedError