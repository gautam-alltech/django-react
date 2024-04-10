from django.contrib import admin
from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'slider', SliderViewSet, basename='slider')
router.register(r'brands', BrandsViewSet, basename='brands')

urlpatterns = [
    path('api/', include(router.urls)),
    # path('api/slider/', SliderAPI.as_view(), name='slider_api'),
    # path('api/brands/', BrandsAPI.as_view(), name='brands_api'),
    path('api/boxicon/', BoxIconAPI.as_view(), name='boxicon_api'),
    path('api/company/', CompanyAPI.as_view(), name='company_api'),
    path('api/funfact/', FunFactAPI.as_view(), name='funfact_api'),
    path('api/gallery/', GalleryAPI.as_view(), name='gallery_api'),
    path('api/testimonial/', TestimonialAPI.as_view(), name='testimonial_api'),
    path('api/contactus/', ContactUsAPI.as_view(), name='contactus_api'),
    path('api/advice/', AdviceAPI.as_view(), name='advice_api'),
    path('api/success/', SuccessAPI.as_view(), name='success_api'),
    path('api/jobs/', JobsAPI.as_view(), name='jobs_api'),
    path('api/memberlist/', MemberListAPI.as_view(), name='memberlist_api'),
    path('api/aboutussolution/', AboutUsSolutionAPI.as_view(), name='aboutussolution_api'),
    path('api/progresschart/', ProgressChartAPI.as_view(), name='progresschart_api'),
]

