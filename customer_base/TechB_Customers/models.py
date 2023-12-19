from django.db import models

# Create your models here.
class Customer_Base(models.Model):
    name = models.CharField(max_length=100)
    address = models.TextField()
    customer_number = models.CharField(max_length=20, unique=True)
    meter_serial_number = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.name
