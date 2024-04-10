from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *
from rest_framework.viewsets import ViewSet, ModelViewSet


# Create your views here.

# class SliderAPI(APIView):
#     def get(self, request, format=None):
#         page = request.query_params.get('page', None)
#         if page:
#             slider = Slider.objects.filter(page=page)
#         else:
#             slider = Slider.objects.all()
#         slider_serializer = SliderSerializer(slider, many=True)
#         return Response(slider_serializer.data)

class SliderViewSet(ViewSet):
    def list(self, request):
        page = request.query_params.get('page')
        if page:
            slider = Slider.objects.filter(page=page)
        else:
            slider = Slider.objects.all()
        slider_serializer = SliderSerializer(slider, many=True)
        return Response(slider_serializer.data)

# class SliderViewSet(ModelViewSet):
#     serializer_class = SliderSerializer

#     def get_queryset(self):
#         page = self.request.query_params.get('page')
#         queryset = Slider.objects.all()
#         if page:
#             queryset = queryset.filter(page=page)
#         return queryset

# class BrandsAPI(APIView):
#     def get(self, request, format=None):
#         brands = Brands.objects.all()
#         brands_serializer = BrandsSerializer(brands, many=True)
#         return Response(brands_serializer.data)

class BrandsViewSet(ViewSet):
    def list(self, request):
        brands = Brands.objects.all()
        brands_serializer = BrandsSerializer(brands, many=True)
        return Response(brands_serializer.data)

class BoxIconAPI(APIView):
    def get(self, request, format=None):
        page = request.query_params.get('page', None)
        if page:
            box = BoxIcon.objects.filter(page=page)
        else:
            box = BoxIcon.objects.all()
        box_serializer = BoxIconSerializer(box, many=True)
        return Response(box_serializer.data)

class CompanyAPI(APIView):
    def get(self, request, format=None):
        company = Company.objects.all()
        company_serializer = CompanySerializer(company, many=True)
        return Response(company_serializer.data)

class FunFactAPI(APIView):
    def get(self, request, format=None):
        funfact = FunFact.objects.all()
        funfact_serializer = FunFactSerializer(funfact, many=True)
        return Response(funfact_serializer.data)

class GalleryAPI(APIView):
    def get(self, request, format=None):
        page = request.query_params.get('page', None)
        if page:
            projects = Gallery.objects.filter(page=page)
        else:
            projects = Gallery.objects.all()
        projects_serializer = GallerySerializer(projects, many=True)
        return Response(projects_serializer.data)

class TestimonialAPI(APIView):
    def get(self, request, format=None):
        testimonial = Testimonial.objects.all()
        testimonial_serializer = TestimonialSerializer(testimonial, many=True)
        return Response(testimonial_serializer.data)

class ContactUsAPI(APIView):
    def get(self, request, format=None):
        contactus = ContactUs.objects.all()
        contactus_serializer = ContactUsSerializer(contactus, many=True)
        return Response(contactus_serializer.data)
    
class AdviceAPI(APIView):
    def get(self, request, format=None):
        advice = Advice.objects.first()
        advice_serializer = AdviceSerializer(advice)
        return Response(advice_serializer.data)
    
class SuccessAPI(APIView):
    def get(self, request, format=None):
        page = request.query_params.get('page', None)
        if page:
            success = Success.objects.filter(page=page)
        else:
            success = Success.objects.all()
        success_serializer = SuccessSerializer(success, many=True)
        return Response(success_serializer.data)

class JobsAPI(APIView):
    def get(self, request, format=None):
        jobs = Jobs.objects.all()
        jobs_serializer = JobsSerializer(jobs, many=True)        
        return Response(jobs_serializer.data)
    
class MemberListAPI(APIView):
    def get(self, request, format=None):
        memberlist = MemberList.objects.all()
        memberlist_serializer = MemberListSerializer(memberlist, many=True)
        return Response(memberlist_serializer.data)
    
class AboutUsSolutionAPI(APIView):
    def get(self, request, format=None):
        aboutussolution = AboutUsSolution.objects.all()
        aboutussolution_serializer = AboutUsSolutionSerializer(aboutussolution, many=True)
        return Response(aboutussolution_serializer.data)
    
class ProgressChartAPI(APIView):
    def get(self, request, format=None):
        progresschart = ProgressChart.objects.all()
        progresschart_serializer = ProgressChartSerializer(progresschart, many=True)
        return Response(progresschart_serializer.data)