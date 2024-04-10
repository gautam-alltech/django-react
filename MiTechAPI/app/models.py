from django.db import models


class Slider(models.Model):
    img1 = models.FileField(upload_to='slider/gallery', blank=True, null=True)
    img2 = models.FileField(upload_to='slider/gallery', blank=True, null=True)
    title = models.CharField(max_length=255, null=False, blank=False)
    heading = models.CharField(max_length=255, null=False, blank=False)
    text = models.CharField(max_length=255, null=False, blank=False)
    page = models.CharField(max_length=100, null=False, blank=False) #for all pages
    
    def __str__(self):
        return self.page

    class Meta:
        verbose_name = "Slider"
        verbose_name_plural = "Sliders"


# Models representation for brand section
class Brands(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    logo = models.FileField(upload_to='brands/gallery', blank=True, null=True)
    logo_hover = models.FileField(upload_to='brands/gallery', blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Brand"
        verbose_name_plural = "Brands"


# Models representation for our service section
class BoxIcon(models.Model):
    image = models.FileField(upload_to='boxes/gallery', blank=True, null=True)
    heading = models.CharField(max_length=200, null=False, blank=False)
    text = models.TextField(null=True, blank=True)
    page = models.CharField(max_length=100, null=False, blank=False) #for box, largebox, service, aboutusstory and features

    def __str__(self):
        return self.heading

    class Meta:
        verbose_name = "Box Icon"
        verbose_name_plural = "Box Icons"


# Models representation for our company section
class Company(models.Model):
    question_no = models.IntegerField(default=1)
    question = models.CharField(max_length=255, null=False, blank=False)

    def __str__(self):
        return str(self.question_no)

    class Meta:
        verbose_name = "Company"
        verbose_name_plural = "Companies"

 

# Models representation for our work section
class FunFact(models.Model):
    funfact_title = models.CharField(max_length=200, null=False, blank=False)
    funfact_count = models.IntegerField(default=0)
    funfact_text = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.funfact_title

    class Meta:
        verbose_name = "Fun Fact"
        verbose_name_plural = "Fun Facts"
        ordering = ['funfact_count']

 


# Models representation for testimonial section
class Testimonial(models.Model):
    subject = models.CharField(max_length=200, null=False, blank=False)
    text = models.TextField(null=True, blank=True)
    img = models.FileField(upload_to='testimonials/gallery', blank=True, null=True)
    name = models.CharField(max_length=200, null=False, blank=False)
    post = models.CharField(max_length=200, null=False, blank=False)

    def __str__(self):
        return self.subject

    class Meta:
        verbose_name = "Testimonial"
        verbose_name_plural = "Testimonials"


# Models representation for contactus page
class ContactUs(models.Model):
    location = models.CharField(max_length=100, null=False, blank=False)
    address = models.CharField(max_length=200, null=False, blank=False)
    email = models.EmailField(null=False, blank=False)
    phone = models.CharField(max_length=15, null=False, blank=False, default="+91 0000000000")

    def __str__(self):
        return f"{self.location}-{self.address}-{self.email}-{self.phone}"

    class Meta:
        verbose_name = "Contact Us"
        verbose_name_plural = "Contact Us-s"
 

# Models representation for advice section
class Advice(models.Model):
    img = models.FileField(upload_to='advices/gallery', blank=True, null=True)
    rating = models.DecimalField(max_digits=5, decimal_places=1, default=1.0)
    text = models.CharField(max_length=100, null=False, blank=False)
    phone_heading = models.CharField(max_length=100, null=False, blank=False)
    phone = models.CharField(max_length=15, null=False, blank=False, default="+91 0000000000")
    email_heading = models.CharField(max_length=100, null=False, blank=False)
    email = models.EmailField(null=False, blank=False)

    def __str__(self):
        return self.text

    class Meta:
        verbose_name = "Advice"
        verbose_name_plural = "Advices"
 

# Models representation for success story section
class Success(models.Model):
    story = models.CharField(max_length=100, null=False, blank=False)
    text = models.TextField(null=False, blank=False)
    page = models.CharField(max_length=100, null=False, blank=False) #for success and security

    def __str__(self):
        return self.story

    class Meta:
        verbose_name = 'Success'
        verbose_name_plural = 'Success-s'

 


# Models representation for jobs section
class Jobs(models.Model):
    job_name = models.CharField(max_length=100, null=False, blank=False)
    job_time = models.CharField(max_length=100, null=False, blank=False)
    job_desc = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.job_name

    class Meta:
        verbose_name = 'Job'
        verbose_name_plural = 'Jobs'


# Models representation for gallery section
class Gallery(models.Model):
    image = models.FileField(upload_to='gallery/gallery', null=True, blank=True)
    page = models.CharField(max_length=100, null=False, blank=True) #for gallery and projects
    
    def __str__(self):
        return '%s' % (self.id)

    class Meta:
        verbose_name = 'Gallery'
        verbose_name_plural = 'Galleries'


# Models representation for member list section
class MemberList(models.Model):
    title = models.CharField(max_length=100, null=False, blank=False)
    member1 = models.CharField(max_length=100, null=False, blank=False)
    member2 = models.CharField(max_length=100, null=False, blank=False)
    member3 = models.CharField(max_length=100, null=False, blank=False)
    member4 = models.CharField(max_length=100, null=False, blank=False)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'MemberList'
        verbose_name_plural = 'MemberLists'


  


# Models representation for Delivering Optimal Solutions section
class AboutUsSolution(models.Model):
    title = models.CharField(max_length=100, null=False, blank=False)
    desc = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'AboutUsSolution'
        verbose_name_plural = 'AboutUsSolutions'

class ProgressChart(models.Model):
    heading = models.CharField(max_length=50, null=False, blank=False)
    progress = models.CharField(max_length=5, null=False, blank=False)

    def __str__(self):
        return f"ProgressChart {self.heading}"

    class Meta:
        verbose_name = 'ProgressChart'
        verbose_name_plural = 'ProgressCharts'
 