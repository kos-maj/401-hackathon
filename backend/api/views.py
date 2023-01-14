from django.shortcuts import render
from cgitb import lookup
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.renderers import *
from rest_framework.decorators import action
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import Trip_Serializer, Partner_Serializer, Friend_Serializer
from .models import Trip, Partner, Friend

from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import renderers
# Create your views here.

class TripViewSet(viewsets.ModelViewSet):
    queryset = Trip.objects.all()
    serializer_class = Trip_Serializer
    model = Trip
    lookup_field = 'TID'

class PartnerViewSet(viewsets.ModelViewSet):
    queryset = Partner.objects.all()
    serializer_class = Partner_Serializer
    model = Partner
    lookup_field = 'PID'

class FriendViewSet(viewsets.ModelViewSet):
    queryset = Friend.objects.all()
    serializer_class = Friend_Serializer
    model = Friend
    lookup_field = 'FID'
