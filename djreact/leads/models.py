from django.db import models
from model_utils.models import TimeStampedModel


class Lead(TimeStampedModel):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=15, null=True, blank=True)
    message = models.CharField(max_length=300)

    def full_name(self, reverse=False):
        if reverse:
            return ', '.join([self.last_name, self.first_name])

        return ' '.join([self.first_name, self.last_name])
