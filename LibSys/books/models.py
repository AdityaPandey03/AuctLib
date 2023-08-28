# books/models.py

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
