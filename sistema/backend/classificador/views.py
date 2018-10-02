from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from .models import Feature
from .serializers import FeatureSerializer

class ListAllFeatures(generics.ListCreateAPIView):
    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer

class DetailFeature(generics.RetrieveDestroyAPIView):
    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer

class CLS(APIView):
    def get(self, request, pk):
        print(pk)
        feature = get_object_or_404(Feature, pk=pk)
        data = FeatureSerializer(feature).data
        caminho = data['dado']

        entry = Feature.objects.filter(pk=pk).update(result='10')
        
        feature = get_object_or_404(Feature, pk=pk)
        data = FeatureSerializer(feature).data
        
        return Response(data)