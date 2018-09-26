from django.db import models

# Create your models here.
class Feature(models.Model):
    nome = models.TextField(blank=False, null=False,)
    idade = models.IntegerField(blank=False, null=False,)
    SEX_CHOICE = (
        ('M', 'M'),
        ('F', 'F')
    )
    sexo = models.CharField(choices=SEX_CHOICE, default='M', max_length=2)
    dado = models.FileField(default=None, blank=False, null=False, upload_to='edf') 
    def __str__(self):
        return self.nome