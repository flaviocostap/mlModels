from rest_framework import generics

from .models import Feature
from .serializers import FeatureSerializer

class ListAllFeatures(generics.ListCreateAPIView):
    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer

class DetailFeature(generics.RetrieveDestroyAPIView):
    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer