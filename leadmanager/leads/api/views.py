from rest_framework import viewsets, permissions
from leads.models import Lead
from .serializers import LeadSerializer

# Lead ViewSets


class LeadViewSet(viewsets.ModelViewSet):
    permissions_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = LeadSerializer

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
