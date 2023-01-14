from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'Trip', views.TripViewSet)
router.register(r'Trip/<int:TID>', views.TripViewSet, basename="trip")
router.register(r'Partner', views.PartnerViewSet)
router.register(r'Partner/<int:PID>', views.PartnerViewSet, basename="partner")
router.register(r'Friend', views.FriendViewSet)
router.register(r'Friend/<int:FID>', views.FriendViewSet, basename="friend")


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
