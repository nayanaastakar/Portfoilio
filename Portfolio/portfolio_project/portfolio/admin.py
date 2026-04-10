from django.contrib import admin
from .models import Project

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'featured', 'order', 'created_at')
    list_filter = ('featured', 'created_at')
    search_fields = ('title', 'description')
    list_editable = ('featured', 'order')
    fieldsets = (
        ('Project Details', {
            'fields': ('title', 'description', 'image')
        }),
        ('Links', {
            'fields': ('github_url', 'live_demo_url')
        }),
        ('Content', {
            'fields': ('technologies', 'featured', 'order')
        }),
    )
