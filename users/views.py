from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime


@api_view(['GET'])
def user_profile(request, id):
    date = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    message = 'server is live current time is'
    return Response(data=message+date, status=status.HTTP_200_OK)
