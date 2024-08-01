from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Contact


@csrf_exempt
def contact(request):
    if request.method == 'POST':
        print("vfdjv",request.POST)
        first_name = request.POST.get('first_name')
        last_name=request.POST.get('last_name')
        email=request.POST.get('email')
        phone_number=request.POST.get('phone_number')
        message=request.POST.get('message')
        contact= Contact.objects.create(first_name = first_name,last_name=last_name,email=email,phone_number=phone_number,message=message)
        print(contact)
        return JsonResponse({'stauts':'ok'})
    else:
        print('this is a get request')
def skill(response):
    if response.method == 'GET':
        skill=Skill.objects.get(name=name,value=value,layout=layout)
        return JsonResponse({"skills":"sent"})
    else:
        print("error occured")