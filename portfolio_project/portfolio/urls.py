from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='port_index'),
    path('about/', views.about, name='port_about'),
    path('contact/', views.contact, name='port_cont'),
    path('skills/', views.skills, name='port_skills'),
    path('projects/', views.projects, name='port_projects'),
    path('education/', views.education, name='port_edu'),
]
