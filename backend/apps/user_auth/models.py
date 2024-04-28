from django.db import models
from apps.main.models import BaseModel
from django.contrib.auth.models import User


class OTP(BaseModel):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='auth_process'
    )
    otp_code = models.CharField(
        max_length=6,
    )

    def is_otp_valid(self, otp):
        return self.otp == otp

    def __str__(self):
        return f"{self.otp_code} / {self.user}"


class MorshedStudent(BaseModel):
    morshed_user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='morshed_student'
    )
    student_id = models.CharField(
        max_length=20,
        null=True,
        blank=True
    )
    student_phone_number = models.CharField(
        max_length=20,
        null=True,
        blank=True
    )
    student_name = models.CharField(
        max_length=100,
        null=True,
        blank=True
    )
    student_email = models.EmailField(
        max_length=100,
        null=True,
        blank=True
    )
    student_address = models.TextField(
        null=True,
        blank=True
    )
    student_age = models.IntegerField(
        null=True,
        blank=True
    )

    USERNAME_FIELD = 'student_id'

    def get_username(self):
        return self.student_id

    def __str__(self):
        return f"{self.student_id} / {self.student_name}"
