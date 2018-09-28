from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListAllFeatures.as_view()),
    path('<int:pk>/', views.DetailFeature.as_view()),
]