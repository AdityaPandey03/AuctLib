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
    image = models.ImageField(upload_to='book_images', default='default_image.jpg')

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

class Order(models.Model):
    user = models.ForeignKey('books.CustomUser', on_delete=models.CASCADE)
    books = models.ManyToManyField(Book)
    order_date = models.DateTimeField(auto_now_add=True)
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)

    def __str__(self):
        return f'Order by {self.user.username} on {self.order_date}'
