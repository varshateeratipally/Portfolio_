from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Contact
from .models import Skill
from .models import Project  
from django.forms.models import model_to_dict
# here

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

# here small letter def and .objects.all  deggara whatever you wrote in models
def skills(request):
    if request.method == 'GET':
        skills=Skill.objects.all()
        response=[]
        for skill in skills:
            response.append(model_to_dict(skill))
        return JsonResponse({"skills":response})
    else:
        print("error occured")

def projects(request):
    if request.method =='GET':
        projects=Project.objects.all()
        response=[]
        for project in projects:
            response.append(model_to_dict(project))
        return JsonResponse({"projects":response})
    else:
        print("error occuredd")
        
