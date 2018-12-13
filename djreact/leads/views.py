from rest_framework import generics
from . import models
from . import serializers


class LeadListCreate(generics.ListCreateAPIView):
    queryset = models.Lead.objects.all()
    serializer_class = serializers.LeadSerializer
