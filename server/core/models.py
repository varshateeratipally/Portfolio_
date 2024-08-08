from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class Contact(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50, null=True)
    email = models.CharField(max_length=30)
    phone_number = models.IntegerField(null=True)
    message = models.TextField()
    
class Skill(models.Model):
        layout_choices={
        ("circle","circular"),
        ("bar","bar"),
        }
        name=models.CharField(max_length=40)
        value=models.IntegerField(validators=[MinValueValidator(1),MaxValueValidator(100)])
        layout = models.CharField(max_length=6,choices=layout_choices)


class Project(models.Model):
      project_name=models.CharField(max_length=30)
      description = models.CharField(max_length=125)
   
      
