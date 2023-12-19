from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, get_object_or_404, redirect
from .models import Customer
from .forms import CustomerForm
from django.http import JsonResponse

def customer_list(request):
    customers = Customer.objects.all()
    return render(request, 'customers/customer_list.html', {'customers': customers})

def create_customer(request):
    if request.method == 'POST':
        form = CustomerForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('customer_list')
    else:
        form = CustomerForm()
    return render(request, 'customers/create_customer.html', {'form': form})

def update_customer(request, customer_id):
    customer = get_object_or_404(Customer, id=customer_id)
    if request.method == 'POST':
        form = CustomerForm(request.POST, instance=customer)
        if form.is_valid():
            form.save()
            return redirect('customer_list')
    else:
        form = CustomerForm(instance=customer)
    return render(request, 'customers/update_customer.html', {'form': form, 'customer': customer})

def delete_customer(request, customer_id):
    customer = get_object_or_404(Customer, id=customer_id)
    if request.method == 'POST':
        customer.delete()
        return redirect('customer_list')
    return render(request, 'customers/delete_customer.html', {'customer': customer})

def get_customer(request, customer_id):
    customer = get_object_or_404(Customer, id=customer_id)
    data = {'id': customer.id, 'name': customer.name, 'address': customer.address, 'customer_number': customer.customer_number, 'meter_serial_number': customer.meter_serial_number}
    return JsonResponse(data)

def get_customer_list(request):
    customers = Customer.objects.all()
    data = [{'id': customer.id, 'name': customer.name, 'address': customer.address, 'customer_number': customer.customer_number, 'meter_serial_number': customer.meter_serial_number} for customer in customers]
    return JsonResponse(data, safe=False)

