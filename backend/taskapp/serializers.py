from rest_framework import serializers
from .models import UserTasks


class UserTasksSerializer(serializers.ModelSerializer):

    task_username = serializers.CharField(
        source='task_owner.username', read_only=True)

    class Meta:
        model = UserTasks
        fields = "__all__"
        read_only_fields = ['task_owner']
