# Generated by Django 4.2.4 on 2023-09-01 14:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='image',
            field=models.ImageField(default='default_image.jpg', upload_to='book_images'),
        ),
    ]
