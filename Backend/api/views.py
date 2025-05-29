from django.shortcuts import render

# Create your views here.

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def run_prompt(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        prompt = body.get('prompt')
        return JsonResponse({"message": "Prompt received", "prompt": prompt})
