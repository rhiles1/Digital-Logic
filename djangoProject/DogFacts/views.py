from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render

# Create your views here.
from django.urls import reverse

from DogFacts.models import DogFact


def index(request):
    facts = DogFact.objects.filter()
    context = {
        'facts': facts,
    }
    return render(request, 'demo/index.html', context=context)


def add(request):
    fact_text = request.POST['fact']
    image_url = request.POST['image_url']
    fact = DogFact(text=fact_text, image_url=image_url)
    fact.save()
    return HttpResponseRedirect(reverse('index'))
