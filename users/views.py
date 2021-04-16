from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_profile(request):
    message = f'{request.user.first_name}, {request.user.last_name}, {request.user.id}'
    return Response(data=message, status=status.HTTP_200_OK)
