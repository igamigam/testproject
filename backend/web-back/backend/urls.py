from django.urls import path, include
from .views import ListTest, DetailTest

urlpatterns = [
    path('<int:pk>/', DetailTest.as_view()),
    path('', ListTest.as_view())
]