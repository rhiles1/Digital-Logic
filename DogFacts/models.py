from django.db import models


# Create your models here.

class DogFact(models.Model):
    text = models.TextField()
    image_url = models.TextField()
