from django.db import models


# Create your models here.

class CatFact(models.model):
    text = models.TextField()
    image_url = models.TextField()
