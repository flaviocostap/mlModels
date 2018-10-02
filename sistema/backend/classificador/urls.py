from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListAllFeatures.as_view()),
    path('<int:pk>/', views.DetailFeature.as_view()),
    path('cls/<int:pk>/', views.CLS.as_view()),
]