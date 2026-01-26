from django.shortcuts import render
from .logic.basic_logic import BasicOperations 

def basic_calculator(request):
    result = None
    if request.method == "POST":
        num1 = float(request.POST.get('num1', 0))
        num2 = float(request.POST.get('num2', 0))
        operation = request.POST.get('operation')

        if operation == '+':
            result = BasicOperations.add(num1, num2)
        elif operation == '-':
            result = BasicOperations.subtraction(num1, num2)
        elif operation == '*':
            result = BasicOperations.multiplication(num1, num2)
        elif operation == '/':
            result = BasicOperations.division(num1, num2)
    return render(request, 'calculator/basic_calculator.html', {'result': result})