from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from .models import User,Task

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('name', 'mail')

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'title', 'content', 'limit')