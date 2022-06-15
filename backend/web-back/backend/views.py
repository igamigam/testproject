from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import generics
from .models import Test
from .serializers import TestSerializer


class ListTest(generics.ListAPIView):
    queryset = Test.objects.all()
    serializer_class = TestSerializer


class DetailTest(generics.RetrieveAPIView):
    queryset = Test.objects.all()
    serializer_class = TestSerializer