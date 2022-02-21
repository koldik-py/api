from django.contrib import admin

from .models import City

class CityAdmin(admin.ModelAdmin):
	list_display = ('name', 'content', 'url')
	list_display_links = ('name', 'content', )

admin.site.register(City, CityAdmin)