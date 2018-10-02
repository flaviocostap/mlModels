from rest_framework import serializers
from .models import Feature

class FeatureSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    result = serializers.ReadOnlyField()
    class Meta:
        fields = ('id', 'nome', 'idade', 'sexo', 'dado', 'result')
        model = Feature