from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from .models import Feature
from .serializers import FeatureSerializer

from sklearn.externals import joblib
import pickle
import pyedflib
import pandas as pd
import scipy as sp
import numpy as np

class ListAllFeatures(generics.ListCreateAPIView):
    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer

class DetailFeature(generics.RetrieveDestroyAPIView):
    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer

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

class CLS(APIView):
    def get(self, request, pk):
        feature = Feature.objects.get(id=pk)
        caminho = feature.dado.path
        df = carregarDataFrame(caminho)
        sinal = frequecia(df, 'ch1')

        # # Load from file
        joblib_file = "rfc.pkl"
        path = '/home/jonnatas/git/mlModels/sistema/backend/api/edf/'+joblib_file
        loaded_model = joblib.load(path)

        pred = loaded_model.predict([sinal])

        entry = Feature.objects.filter(pk=pk).update(result=pred)
        feature = get_object_or_404(Feature, pk=pk)
        data = FeatureSerializer(feature).data
        
        return Response(data)