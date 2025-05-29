from django.urls import path
from .views import run_prompt

urlpatterns = [
    path('runPrompt/', run_prompt),
]
