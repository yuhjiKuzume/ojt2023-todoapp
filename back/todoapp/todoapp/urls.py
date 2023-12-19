from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from todoapp_api.views import UserViewSet,TaskViewSet

defaultRouter = routers.DefaultRouter()
defaultRouter.register('tasks',TaskViewSet)
defaultRouter.register('users',UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/", include(defaultRouter.urls))
]
