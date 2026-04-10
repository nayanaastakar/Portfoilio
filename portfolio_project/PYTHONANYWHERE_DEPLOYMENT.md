# PythonAnywhere Deployment Guide

This Django app is ready for PythonAnywhere deployment.

## 1. Repository structure
The app root is:

- `portfolio_project/`

The Django project path is:

- `portfolio_project/portfolio_project/`

Static files are under:

- `portfolio_project/static/`

## 2. Recommended PythonAnywhere setup

1. Create a PythonAnywhere account and log in.
2. Open a Bash console on PythonAnywhere.
3. Clone the repo:

```bash
cd ~/
git clone https://github.com/nayanaastakar/Portfoilio.git
```

4. Move into the app folder:

```bash
cd ~/Portfoilio/Portfolio/portfolio_project
```

5. Create and activate a virtual environment:

```bash
python3.12 -m venv venv
source venv/bin/activate
```

6. Install requirements:

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

7. Run database migrations:

```bash
python manage.py migrate
```

8. (Optional) Create a Django superuser:

```bash
python manage.py createsuperuser
```

## 3. Configure the PythonAnywhere web app

1. Go to the **Web** tab.
2. Click **Add a new web app**.
3. Choose **Manual configuration**.
4. Choose **Python 3.12**.
5. Set the **Source code** folder to:

```text
/home/<your-username>/Portfoilio/Portfolio/portfolio_project
```

6. Set the **Working directory** to the same path.

7. Configure the WSGI file:

- Open the WSGI configuration file in the Web tab.
- Ensure the path points to your Django app.
- The relevant section should use:

```python
import os
import sys

path = '/home/<your-username>/Portfoilio/Portfolio/portfolio_project'
if path not in sys.path:
    sys.path.insert(0, path)

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_project.settings')

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
```

8. Add static files mapping:

- URL: `/static/`
- Directory: `/home/<your-username>/Portfoilio/Portfolio/portfolio_project/static`

9. Reload the web app.

## 4. Notes

- The runtime is set to Python 3.12 in `runtime.txt`.
- `DEBUG` is disabled in `portfolio_project/portfolio_project/settings.py`.
- The app uses SQLite, which works on PythonAnywhere.
- Use the URL provided by PythonAnywhere after reload.
