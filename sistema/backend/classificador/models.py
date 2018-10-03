from django.db import models
import time
from sklearn.externals import joblib
import pickle
import pyedflib
import pandas as pd
import scipy as sp
import numpy as np

class Feature(models.Model):
    def _get_upload_to(self, filename):
        return 'edf/%f.edf' % time.time()

    id = models.AutoField(primary_key=True)
    nome = models.TextField(blank=False, null=False,)
    idade = models.IntegerField(blank=False, null=False,)
    SEX_CHOICE = (
        ('M', 'M'),
        ('F', 'F')
    )
    sexo = models.CharField(choices=SEX_CHOICE, default='M', max_length=2)
    dado = models.FileField(blank=True, null=True, upload_to=_get_upload_to) 
    result = models.IntegerField(blank=True, null=True,)

    def __str__(self):
        return self.nome

