@echo off
echo Preparing Django project for deployment...

REM Collect static files
echo Collecting static files...
python manage.py collectstatic --noinput

REM Run migrations (optional, for database setup)
echo Running migrations...
python manage.py migrate

echo Deployment preparation complete!
echo You can now deploy to your chosen platform.