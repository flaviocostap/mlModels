from django.db import models

# Create your models here.
class Feature(models.Model):
    nome = models.TextField()
    idade = models.IntegerField()
    SEX_CHOICE = (
        ('M', 'M'),
        ('F', 'F')
    )
    sexo = models.CharField(choices=SEX_CHOICE, default='M', max_length=2)

    def __str__(self):
        return self.nome