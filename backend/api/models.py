from django.db import models

# Create your models here.
class Trip(models.Model):
    TID = models.IntegerField(primary_key=True)
    trip_name = models.CharField(max_length = 180)
    duration = models.IntegerField()
    start_date_time = models.DateTimeField()
    activities = models.CharField(max_length=180)
    def __str__(self):
        return self.trip_name

class Partner(models.Model):
    PID = models.IntegerField(primary_key=True)
    partner_name = models.CharField(max_length = 180)
    email = models.EmailField(max_length = 180)
    age = models.IntegerField()
    trip_selected_id = models.ForeignKey('Trip', on_delete=models.SET_NULL, blank=True, null=True)
    friend_selected_id = models.ManyToManyField('Friend',blank=True, null=True)


    def __str__(self):
        return self.partner_name


class Friend(models.Model):
    FID = models.IntegerField(primary_key=True)
    friend_name = models.CharField(max_length=180)
    friend_email = models.EmailField(max_length=180)
    friend_age = models.IntegerField()

    def __str__(self):
        return self.friend_name
