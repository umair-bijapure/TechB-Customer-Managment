# customers/models.py
from django.db import models

class Customer(models.Model):
    # Your fields go here
    name = models.CharField(max_length=255)
    address = models.TextField()
    customer_number = models.CharField(max_length=20)
    meter_serial_number = models.CharField(max_length=20)

    def __str__(self):
        return self.name
