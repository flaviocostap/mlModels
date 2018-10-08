from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListAllPatients.as_view()),
    path('semgfile/', views.InsertFeature.as_view()),
    path('<int:pk>/', views.DetailPatient.as_view()),
    path('cls/<int:pk>/', views.CLS.as_view()),
]