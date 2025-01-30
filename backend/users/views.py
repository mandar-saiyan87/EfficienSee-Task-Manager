from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.contrib.auth import authenticate

# Create your views here.


class UserRegister(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        response_data = {}
        try:
            if serializer.is_valid():
                account = serializer.save()

                response_data["response"] = "User created successfully"
                response_data["status"] = status.HTTP_201_CREATED
                response_data["username"] = account.username
                response_data["email"] = account.email

                # Instead of get_or_create get can be used
                token, create = Token.objects.get_or_create(user=account)
                response_data["token"] = token.key
            else:
                response_data["errors"] = serializer.errors
                response_data["status"] = status.HTTP_400_BAD_REQUEST

            return Response(response_data)
        except Exception as e:
            response_data["message"] = str(e)
            return Response(response_data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class UserLogin(APIView):
    def post(self, request):
        username_or_email = request.data.get('username_or_email')
        password = request.data.get('password')

        response_data = {}
        if not username_or_email or not password:
            response_data["message"] = "Username/Email and password are required"
            return Response(response_data, status=status.HTTP_400_BAD_REQUEST)

        # authenticate using email or username
        user = authenticate(
            request, username=username_or_email, password=password)

        if not user:
            response_data["message"] = "User not found"
            return Response(response_data, status=status.HTTP_404_NOT_FOUND)

        if user and user.is_active:
            response_data["message"] = "Login Successful"
            response_data["username"] = user.username
            response_data["email"] = user.email

            token, create = Token.objects.get_or_create(user=user)
            response_data["token"] = token.key
            return Response(response_data, status=status.HTTP_200_OK)
        else:
            response_data["message"] = "The account is inactive. Please contact Administrator."
            return Response(response_data, status=status.HTTP_400_BAD_REQUEST)


class UserLogout(APIView):
    def post(self, request):
        response_data = {}
        try:
            request.user.auth_token.delete()
            return Response({"message": "User logged out"}, status=status.HTTP_200_OK)
        except Exception as e:
            response_data["message"] = str(e)
            return Response(response_data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
