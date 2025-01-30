from django.urls import path
from .views import UserGetCreateTasksView

urlpatterns = [
    path('usertasks/', UserGetCreateTasksView.as_view(), name="usertasks")
]
