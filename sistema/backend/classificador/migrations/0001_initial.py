# Generated by Django 2.1.1 on 2018-10-08 17:00

import classificador.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nome', models.TextField()),
                ('idade', models.IntegerField()),
                ('sexo', models.CharField(choices=[('M', 'M'), ('F', 'F')], default='M', max_length=2)),
                ('dado', models.TextField()),
                ('result', models.IntegerField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='SemgFile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('id_patient', models.IntegerField(blank=True, null=True)),
                ('dado', models.FileField(blank=True, null=True, upload_to=classificador.models.SemgFile._get_upload_to)),
            ],
        ),
    ]