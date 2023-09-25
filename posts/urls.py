from django.urls import path
from posts import views

urlpatterns = [
    path("new/", views.PostCreateView.as_view(), name="new"),
    path("posts/", views.PostListView.as_view(), name="list"),
    path("<int:pk>/", views.PostDetailView.as_view(), name="detail"),   
    path("<int:pk>/update/", views.PostUpdateView.as_view(), name="update"),
    path("<int:pk>/delete/", views.PostDeleteView.as_view(), name="delete"),
    path("draft/", views.DraftPostListView.as_view(), name="draft"),
    path("archived/", views.ArchivedPostListView.as_view(), name="archived"),
]