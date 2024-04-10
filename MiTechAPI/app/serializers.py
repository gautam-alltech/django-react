from rest_framework import serializers
from .models import *

class SliderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slider
        fields = '__all__'

class BrandsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brands
        fields = '__all__'

class BoxIconSerializer(serializers.ModelSerializer):
    class Meta:
        model = BoxIcon
        fields = '__all__'

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

class FunFactSerializer(serializers.ModelSerializer):
    class Meta:
        model = FunFact
        fields = '__all__'

class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = '__all__'

class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = '__all__'

class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = '__all__'
        
class AdviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advice
        fields = '__all__'
        
class SuccessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Success
        fields = '__all__'
        
class JobsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jobs
        fields = '__all__'
        
class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = '__all__'
        
class MemberListSerializer(serializers.ModelSerializer):
    class Meta:
        model = MemberList
        fields = '__all__'
        
class AboutUsSolutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUsSolution
        fields = '__all__'
        
class ProgressChartSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgressChart
        fields = '__all__'