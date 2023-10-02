from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.EmailField(
        blank=False,
        max_length=250,
        verbose_name="email address"
    )

    USERNAME_FIELD = "username"
    EMAIL_FIELD = "email"
