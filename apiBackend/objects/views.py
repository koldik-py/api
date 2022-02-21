from django.shortcuts import render
from django.http import JsonResponse, HttpResponseRedirect


from .models import City

def index(request):
	HTML = 'index.html'

	obj = City.objects.get(id=3)
	context = {
		'title': 'API',
		'obj': obj,
	} 

	return render(request, HTML, context)

