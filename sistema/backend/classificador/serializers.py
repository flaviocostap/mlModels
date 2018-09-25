from rest_framework import serializers
from .models import Feature

class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('nome', 'idade', 'SEX_CHOICE', 'sexo', )
        model = Feature