# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-08-12 13:56
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0014_socialaccount'),
    ]

    operations = [
        migrations.AlterField(
            model_name='socialaccount',
            name='link',
            field=models.URLField(blank=True),
        ),
    ]