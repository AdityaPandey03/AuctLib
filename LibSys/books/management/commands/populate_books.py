from django.core.management.base import BaseCommand
from books.models import Book
from django.core.files import File
import os

class Command(BaseCommand):
    help = 'Populate the database with dummy books'

    def handle(self, *args, **options):
        # Define your dummy books with image paths
        dummy_books = [
            {'title': 'The Lost World', 'category': 'Sci-Fi', 'image': 'book_images/lostWorld.jpg'},
            {'title': 'Dune', 'category': 'Sci-Fi', 'image': 'book_images/dune.jpg'},
            {'title': 'Alchemist', 'category': 'Fiction', 'image': 'book_images/alchemist.jpg'},
            {'title': 'Brave New World', 'category': 'Fiction', 'image': 'book_images/brave.jpg'},
            {'title': 'Champak', 'category': 'Comedy', 'image': 'book_images/champak.jpg'},
            {'title': 'Tenaliraman', 'category': 'Comedy', 'image': 'book_images/tenaliram.jpg'},
        ]

        for book_data in dummy_books:
            # Create a new Book instance
            book = Book(**book_data)

            # Build the full image path
            image_path = os.path.join('media', book_data['image'])

            # Open the image file and assign it to the book's image field
            with open(image_path, 'rb') as image_file:
                book.image.save(os.path.basename(image_path), File(image_file))

            # Save the book to the database
            book.save()

        self.stdout.write(self.style.SUCCESS('Dummy books added to the database'))
