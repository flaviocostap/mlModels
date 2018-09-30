from rest_framework import serializers
from .models import Feature

class FeatureSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        fields = ('id', 'nome', 'idade', 'sexo', 'dado', )
        model = Feature