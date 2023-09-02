from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserRegistrationView, UserLoginView, BookViewSet, OrderCreateView, OrderListView

router = DefaultRouter()

router.register(r'books', BookViewSet)

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='user-registration'),
    path('login/', UserLoginView.as_view(), name='user-login'),
    path('api/', include(router.urls)),
    path('create_order/', OrderCreateView.as_view(), name='create-order'),
    path('orders/', OrderListView.as_view(), name='order-list'),
]
