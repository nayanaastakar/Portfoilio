# Portfolio Website

A Django-based portfolio website.

## Local Development

1. Clone the repository
2. Create a virtual environment: `python -m venv env`
3. Activate the environment: `env\Scripts\activate` (Windows) or `source env/bin/activate` (Linux/Mac)
4. Install dependencies: `pip install -r requirements.txt`
5. Run migrations: `python manage.py migrate`
6. Collect static files: `python manage.py collectstatic`
7. Run the server: `python manage.py runserver`

## Deployment

### Option 1: Render (Recommended)

1. Create a free account at [render.com](https://render.com)
2. Connect your GitHub repository
3. Create a new Web Service
4. Configure the following settings:
   - **Runtime**: Python 3
   - **Build Command**: `pip install -r requirements.txt && python manage.py collectstatic --noinput`
   - **Start Command**: `gunicorn portfolio_project.wsgi`
5. Add environment variables:
   - `DEBUG=False`
   - `ALLOWED_HOSTS=*` (or your specific domain)
   - `SECRET_KEY` (generate a new secret key for production)

### Option 2: Railway

1. Create a free account at [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Railway will automatically detect it's a Python app
4. Add environment variables in Railway dashboard:
   - `DEBUG=False`
   - `ALLOWED_HOSTS=*`

### Option 3: PythonAnywhere

1. Create a free account at [pythonanywhere.com](https://pythonanywhere.com)
2. Upload your code or connect via Git
3. Set up a web app with manual configuration
4. Configure the WSGI file to point to `portfolio_project.wsgi`
5. Set environment variables in the web app settings

### Option 4: Heroku

1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Set environment variables:
   ```
   heroku config:set DEBUG=False
   heroku config:set ALLOWED_HOSTS=*
   heroku config:set SECRET_KEY=your-secret-key
   ```
5. Deploy: `git push heroku main`

## Environment Variables

For production deployment, set these environment variables:

- `DEBUG=False`
- `ALLOWED_HOSTS=*` (or comma-separated list of allowed domains)
- `SECRET_KEY` (generate a secure random key)

## Static Files

Static files are automatically collected during deployment. The `STATIC_ROOT` is set to `staticfiles/` directory.