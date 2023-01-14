# Generated by Django 4.0.3 on 2023-01-14 18:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_friend_partner_trip_selected_id_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='partner',
            name='friend_selected_id',
        ),
        migrations.AddField(
            model_name='partner',
            name='friend_selected_id',
            field=models.ManyToManyField(blank=True, null=True, to='api.friend'),
        ),
    ]