from rest_framework import serializers
from .models import Patient
from .models import SemgFile

class PatientSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    result = serializers.ReadOnlyField()
    class Meta:
        fields = ('id', 'nome', 'idade', 'sexo', 'dado', 'result')
        model = Patient

class SemgFileSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        fields = ('id', 'id_patient', 'dado')
        model = SemgFile