from rest_framework import serializers
from .models import User
from taskapp.serializers import UserTasksSerializer


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = "__all__"
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def save(self):
        if User.objects.filter(email=self.validated_data["email"]).exists():
            raise serializers.ValidationError(
                "Account already exist with email id.")

        account = User(
            email=self.validated_data["email"], username=self.validated_data["username"])
        account.set_password(self.validated_data["password"])
        account.save()
        return account
