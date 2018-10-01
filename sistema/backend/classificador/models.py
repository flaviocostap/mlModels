from django.db import models
import time
from sklearn.externals import joblib
import pyedflib

def fft(df, canal):
    amostras_validas = df[canal][2000:11000]
    amostras = int(amostras_validas.shape[0]*500/2000)
    sinal = np.abs(np.fft.fft(amostras_validas))[:amostras]
    freq = np.linspace(0,500,amostras)

    return (sinal,freq)

def frequecia(df, canal):
    sinalFFT = fft(df, canal)[0]
    return sinalFFT

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

def returnCLF(filename, caminho):
    loaded_model = joblib.load(filename)
    edf = carregarDataFrame(caminho)
    sinal = frequecia(edf, 'ch1')

    result = loaded_model.fit(sinal)
    return result

# Create your models here.
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
    dado = models.FileField(default=None, blank=False, null=False, upload_to=_get_upload_to) 
    resultSVM = returnCLF('svm.sav', dado)
    resultRFC = returnCLF('rfc.sav', dado)

    def __str__(self):
        return self.nome
