# Generated by Django 2.2.3 on 2019-07-29 06:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Leads',
            new_name='Lead',
        ),
    ]