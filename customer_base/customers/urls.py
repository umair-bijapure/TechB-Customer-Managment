from django.urls import path
from .views import customer_list, create_customer, update_customer, delete_customer, get_customer, get_customer_list

urlpatterns = [
    path('', customer_list, name='customer_list'),
    path('create/', create_customer, name='create_customer'),
    path('update/<int:customer_id>/', update_customer, name='update_customer'),
    path('delete/<int:customer_id>/', delete_customer, name='delete_customer'),
    path('get/<int:customer_id>/', get_customer, name='get_customer'),
    path('get/', get_customer_list, name='get_customer_list'),
]
