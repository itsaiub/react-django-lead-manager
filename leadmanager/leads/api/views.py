from rest_framework import viewsets, permissions
from leads.models import Lead
from .serializers import LeadSerializer

# Lead ViewSets


class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = LeadSerializer
