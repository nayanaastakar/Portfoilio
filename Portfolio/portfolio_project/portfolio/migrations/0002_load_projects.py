from django.db import migrations


def load_projects(apps, schema_editor):
    Project = apps.get_model('portfolio', 'Project')
    
    projects = [
        {
            'title': 'Graph-Based Network Anomaly & Fraud Detection System',
            'description': 'Detects suspicious financial activity using SCC algorithms, BFS traversal, and graph-based risk scoring.',
            'github_url': 'https://github.com/nayanaastakar/Graph-Based-Network-Anomaly-and-Fraud-Detection-System',
            'technologies': 'Python,Graph Algorithms,Cybersecurity',
            'featured': True,
            'order': 1,
        },
        {
            'title': 'Production-Ready Containerization for Fraud Detection System',
            'description': 'Enterprise-grade Docker and Kubernetes deployment setup for scalable fraud detection pipelines.',
            'github_url': 'https://github.com/nayanaastakar/Production-Ready-Containerization-for-Fraud-Detection-System',
            'technologies': 'Docker,Kubernetes,DevOps',
            'featured': True,
            'order': 2,
        },
        {
            'title': 'HeartBridge NGO Donation Platform',
            'description': 'Full-stack platform connecting donors with real needs through transparent wish fulfillment and impact tracking.',
            'github_url': 'https://github.com/nayanaastakar/HeartBridge-NGO-platform',
            'technologies': 'JavaScript,Django,Full Stack',
            'featured': True,
            'order': 3,
        },
        {
            'title': 'PhotoLab Image Processing Application',
            'description': 'AI-powered photo enhancement system with filters and automated image transformation features.',
            'github_url': 'https://github.com/nayanaastakar/Photo-Lab',
            'technologies': 'Python,OpenCV,Image Processing',
            'order': 4,
        },
        {
            'title': 'Heart Disease Prediction using Machine Learning',
            'description': 'Predicts heart disease risk using trained ML models on Kaggle healthcare datasets.',
            'github_url': 'https://github.com/nayanaastakar/Heart-Disease-Prediction',
            'technologies': 'Python,Machine Learning,Healthcare AI',
            'order': 5,
        },
        {
            'title': 'Intelligent Traffic Safety System',
            'description': 'Analyzes traffic violations and predicts unsafe driving patterns using data mining techniques.',
            'github_url': 'https://github.com/nayanaastakar/Intelligent-Traffic-Safety-system-Major-project-',
            'technologies': 'Python,Data Mining,Smart Transport',
            'order': 6,
        },
        {
            'title': 'License Plate Detection System',
            'description': 'Automatic vehicle license plate detection using computer vision image-processing techniques.',
            'github_url': 'https://github.com/nayanaastakar/License-plate-detection-system-mini-project-',
            'technologies': 'Python,OpenCV,Computer Vision',
            'order': 7,
        },
    ]
    
    for project in projects:
        Project.objects.create(**project)


def reverse_projects(apps, schema_editor):
    Project = apps.get_model('portfolio', 'Project')
    Project.objects.all().delete()


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(load_projects, reverse_projects),
    ]
