# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2018-02-01 09:40
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('newsletters', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='NewsletterUsers',
            new_name='NewsletterUser',
        ),
    ]
