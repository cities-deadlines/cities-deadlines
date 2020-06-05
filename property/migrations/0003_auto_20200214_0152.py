# Generated by Django 3.0.3 on 2020-02-14 01:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('property', '0002_auto_20200214_0150'),
    ]

    operations = [
        migrations.AlterField(
            model_name='property',
            name='description',
            field=models.CharField(default='', max_length=150, null=True, verbose_name='Property Description'),
        ),
        migrations.AlterField(
            model_name='property',
            name='name',
            field=models.CharField(default='Property f3898111', max_length=20, unique=True, verbose_name='Property Name'),
        ),
    ]