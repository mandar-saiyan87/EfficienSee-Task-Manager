from django.shortcuts import render
from .models import UserTasks
from .serializers import UserTasksSerializer
from users.models import User
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import AuthenticationFailed, PermissionDenied
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
# Create your views here.


class UserGetCreateTasksView(APIView):

    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    # Get Tasks by user
    def get(self, request):
        response_data = {}
        try:
            tasks = UserTasks.objects.filter(task_owner=request.user)
            serializer = UserTasksSerializer(tasks, many=True)
            response_data["tasks"] = serializer.data
            response_data["message"] = "User tasks fetched successfully."
            return Response(response_data, status=status.HTTP_200_OK)
        except AuthenticationFailed as autherror:
            response_data["message"] = str(autherror)
            return Response(response_data, status=status.HTTP_401_UNAUTHORIZED)
        except PermissionDenied as permerror:
            response_data["message"] = str(permerror)
            return Response(response_data, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            response_data["message"] = str(e)
            return Response(response_data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    # Create New task
    def post(self, request):
        response_data = {}
        try:
            serializer = UserTasksSerializer(data=request.data)

            if serializer.is_valid():
                new_task = serializer.save(task_owner=request.user)
                # response_data["task"] = new_task
                response_data["message"] = "Task created successfully."
                response_data["task"] = UserTasksSerializer(new_task).data
                return Response(response_data, status=status.HTTP_201_CREATED)
            else:
                response_data["errors"] = serializer.errors
                response_data["message"] = "Failed to create new task"
                return Response(response_data, status=status.HTTP_400_BAD_REQUEST)
        except AuthenticationFailed as autherror:
            response_data["message"] = str(autherror)
            return Response(response_data, status=status.HTTP_401_UNAUTHORIZED)
        except PermissionDenied as permerror:
            response_data["message"] = str(permerror)
            return Response(response_data, status=status.HTTP_401_UNAUTHORIZED)
        except Exception as e:
            response_data["message"] = str(e)
            return Response(response_data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# class UserListCreateTaskView(generics.ListCreateAPIView):
#     serializer_class = UserTasks
#     permission_classes = [IsAuthenticated]

#     def get_queryset(self):
#         return UserTasks.objects.filter(task_owner=self.request.user)

#     def perform_create(self, serializer):
#         serializer.save(task_owner=self.request.user)
