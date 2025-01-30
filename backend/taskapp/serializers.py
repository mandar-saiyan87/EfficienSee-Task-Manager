from rest_framework import serializers
from .models import UserTasks


class UserTasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserTasks
        fields = "__all__"
        read_only_fields = ['task_owner']
