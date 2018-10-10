from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import FileUploadParser
from rest_framework.exceptions import ParseError

from django.shortcuts import get_object_or_404

from .models import Patient
from .models import SemgFile
from .serializers import PatientSerializer
from .serializers import SemgFileSerializer

from sklearn.externals import joblib
import pickle
import pyedflib
import pandas as pd
import scipy as sp
import numpy as np

def carregarDataFrame(caminho):
    edf = pyedflib.EdfReader(caminho)
    n = edf.signals_in_file
    sigbufs = np.zeros((n, edf.getNSamples()[0]))
    for i in np.arange(n):
         sigbufs[i, :] = edf.readSignal(i)
    edf._close()
    del edf
    data = sigbufs.T
    
    return pd.DataFrame(data=data, columns=['ch1', 'ch2', 'ch3', 'ch4'])

def fft(df, canal):
    amostras_validas = df[canal][2000:11000]
    amostras = int(amostras_validas.shape[0]*500/2000)
    sinal = np.abs(np.fft.fft(amostras_validas))[:amostras]
    freq = np.linspace(0,500,amostras)

    return (sinal,freq)

def frequecia(df, canal):
    sinalFFT = fft(df, canal)[0]
    return sinalFFT

class ListAllPatients(generics.ListCreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

class DetailPatient(generics.RetrieveDestroyAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

class InsertFeature(generics.ListCreateAPIView):
    queryset = SemgFile.objects.all()
    serializer_class = SemgFileSerializer

class CLS(APIView):
    def get(self, request, pk):
        patient = Patient.objects.get(id=pk)
        semgFile = SemgFile.objects.get(id=patient.id_semg)
        caminho = semgFile.dado.path
        df = carregarDataFrame(caminho)
        sinal = frequecia(df, 'ch1')

        # # Load from file
        joblib_file = "rfc.pkl"
        path = '/home/jonnatas/git/mlModels/sistema/backend/'+joblib_file
        loaded_model = joblib.load(path)

        pred = loaded_model.predict([sinal])

        entry = Patient.objects.filter(pk=pk).update(result=pred)
        patient = get_object_or_404(Patient, pk=pk)
        data = PatientSerializer(patient).data
        
        return Response(data)