from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

class User(models.Model):
    name = models.CharField(max_length=32)
    mail = models.EmailField()

class Task(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True, null=True)
    limit = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
