# PythonAnywhere Deployment Guide

## Quick Setup (5 minutes)

1. **Sign Up**
   - Go to https://www.pythonanywhere.com
   - Create free account

2. **Create Web App**
   - Dashboard > Web > Add new web app
   - Choose "Manual Configuration"
   - Select Python 3.11

3. **Configure Files**
   - Working directory: `/home/yourusername/portfolio_project`
   - Virtualenv: `/home/yourusername/.virtualenvs/portfolio`
   - WSGI file: `/home/yourusername/portfolio_project/portfolio_project/wsgi.py`

4. **Install Dependencies**
   ```bash
   pip install Django==5.0.6 gunicorn==21.2.0 whitenoise==6.5.0 Pillow==10.0.0 asgiref==3.11.0 sqlparse==0.5.5 tzdata==2025.3 dj-database-url==2.1.0
   ```

5. **Import Your Code**
   - Go to Files > Upload a file
   - Upload your portfolio_project folder
   - Or use Git: `git clone https://github.com/nayanaastakar/Portfoilio.git`

6. **Collect Static Files**
   ```bash
   python manage.py collectstatic --noinput
   ```

7. **Migrate Database**
   ```bash
   python manage.py migrate
   ```

8. **Reload Web App**
   - Go to Web > Your app > Reload

Your portfolio will be live at: `https://yourusername.pythonanywhere.com`
