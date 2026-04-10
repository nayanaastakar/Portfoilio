from django.shortcuts import render
from .models import Project

def home(request):
    featured_projects = Project.objects.filter(featured=True)[:3]
    context = {'featured_projects': featured_projects}
    return render(request, 'port_index.html', context)

def about(request):
    return render(request, 'port_about.html')

def contact(request):
    return render(request, 'port_cont.html')

def skills(request):
    return render(request, 'port_skills.html')

def projects(request):
    all_projects = Project.objects.all()
    context = {'projects': all_projects}
    return render(request, 'port_projects.html', context)

def education(request):
    return render(request, 'port_edu.html')
