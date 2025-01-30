from django.db import models
from users.models import User

# Create your models here.


class UserTasks(models.Model):
    STATUS_CHOICES = {
        "New": "New",
        "Pending": "Pending",
        "In Progress": "In Progress",
        "Complete": "Complete"
    }

    title = models.CharField(max_length=150, null=False, blank=True)
    description = models.TextField(blank=True, null=True)
    status = models.CharField(
        max_length=20,  choices=STATUS_CHOICES, default="New")
    created_at = models.DateTimeField(auto_now_add=True)
    due_date = models.DateTimeField(blank=True, null=True)
    task_owner = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="tasks")

    def __str__(self):
        return self.title
