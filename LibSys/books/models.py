# books/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models

class Book(models.Model):
    CATEGORY_CHOICES = [
        ('Sci-Fi', 'Sci-Fi'),
        ('Fiction', 'Fiction'),
        ('Comedy', 'Comedy'),
    ]
    
    title = models.CharField(max_length=100)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)

    def __str__(self):
        return self.title

class CustomUser(AbstractUser):
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=15)
    email = models.EmailField(unique=True)
    address = models.TextField()
    college = models.CharField(max_length=255)

    def __str__(self):
        return self.username
