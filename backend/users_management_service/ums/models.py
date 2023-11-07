from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    auth_id = models.BigAutoField(
        auto_created=True,
        primary_key=True,
        verbose_name='ID'
    )
    email = models.EmailField(
        blank=False,
        max_length=250,
        verbose_name="email address"
    )

    USERNAME_FIELD = "username"
    EMAIL_FIELD = "email"

    def save(self, *args, **kwargs):
        if not self.auth_id:
            # Find the maximum ID in the table and increment it by 1
            max_id = User.objects.aggregate(models.Max('auth_id'))['auth_id__max'] or 0
            self.auth_id = max_id + 1
        super(User, self).save(*args, **kwargs)

