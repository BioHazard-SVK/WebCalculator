from django.shortcuts import render
from .logic.basic_logic import BasicOperations, MemoryOperations

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

def memory_operations(request, result):
    current_memory = None
    if request.method == "SUBMIT":
        result_to_memory = float(request.POST.get('result'))
        action = request.POST.get('action')
        
        if action == "m-plus":
            current_memory = MemoryOperations.memory_plus(current_memory, result_to_memory)
    
    return render(request, 'calculator/basic_calculator.html', {'current_memoru': current_memory })