# Generated by Django 2.1.4 on 2018-12-13 17:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='lead',
            name='name',
        ),
        migrations.AddField(
            model_name='lead',
            name='first_name',
            field=models.CharField(default='hal', max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='lead',
            name='last_name',
            field=models.CharField(default='jordan', max_length=50),
            preserve_default=False,
        ),
    ]
