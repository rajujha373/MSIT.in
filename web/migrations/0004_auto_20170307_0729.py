# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-03-07 07:29
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0003_faculty_qualifications'),
    ]

    operations = [
        migrations.RenameField(
            model_name='faculty',
            old_name='email',
            new_name='emil',
        ),
    ]
