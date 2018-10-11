from rest_framework import serializers
from .models import Patient
from .models import SemgFile

class PatientSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    result = serializers.ReadOnlyField()
    class Meta:
        fields = ('id', 'nome', 'idade', 'sexo', 'id_semg', 'fileSelected', 'result')
        model = Patient

class SemgFileSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = SemgFile