from django.shortcuts import render

def basic_calculator(request):
   
    return render(request, 'calculator/basic_calculator.html')