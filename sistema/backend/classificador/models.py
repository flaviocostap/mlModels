from django.db import models
import time
from sklearn.externals import joblib
import pickle
import pyedflib
import pandas as pd
import scipy as sp
import numpy as np

SEX_CHOICE = (
    ('M', 'M'),
    ('F', 'F')
)

class Patient(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.TextField(blank=False, null=False,)
    idade = models.IntegerField(blank=False, null=False,)
    sexo = models.CharField(choices=SEX_CHOICE, default='M', max_length=2)
    dado = models.TextField(blank=True, null=True,)
    result = models.IntegerField(blank=True, null=True,)

    def __str__(self):
        return self.nome

class SemgFile(models.Model):
    def _get_upload_to(self, filename):
        return 'edf/%f.edf' % time.time()
    dado = models.FileField(blank=False, null=False, upload_to=_get_upload_to) 
