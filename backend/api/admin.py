from django.contrib import admin
from .models import Trip
from .models import Partner
from .models import Friend

# Register your models here.
admin.site.register(Trip)
admin.site.register(Partner)
admin.site.register(Friend)
