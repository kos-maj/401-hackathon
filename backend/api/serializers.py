from rest_framework import serializers
from .models import Trip
from .models import Partner
from .models import Friend

# Doctor Table
class Trip_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = ["TID", "trip_name", "duration", "start_date_time", "activities"]

class Partner_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = ["PID", "partner_name", "email", "age", "trip_selected_id", "friend_selected_id"]

class Friend_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Friend
        fields = ["FID", "friend_name", "friend_email", "friend_age"]
