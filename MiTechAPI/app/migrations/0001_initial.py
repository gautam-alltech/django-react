# Generated by Django 4.1.10 on 2024-04-01 05:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AboutUsSolution',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('desc', models.TextField()),
            ],
            options={
                'verbose_name': 'AboutUsSolution',
                'verbose_name_plural': 'AboutUsSolutions',
            },
        ),
        migrations.CreateModel(
            name='Advice',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.FileField(blank=True, null=True, upload_to='advices/gallery')),
                ('rating', models.DecimalField(decimal_places=1, default=1.0, max_digits=5)),
                ('text', models.CharField(max_length=100)),
                ('phone_heading', models.CharField(max_length=100)),
                ('phone', models.CharField(default='+91 0000000000', max_length=15)),
                ('email_heading', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
            ],
            options={
                'verbose_name': 'Advice',
                'verbose_name_plural': 'Advices',
            },
        ),
        migrations.CreateModel(
            name='BoxIcon',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.FileField(blank=True, null=True, upload_to='boxes/gallery')),
                ('heading', models.CharField(max_length=200)),
                ('text', models.TextField(blank=True, null=True)),
                ('page', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name': 'Box Icon',
                'verbose_name_plural': 'Box Icons',
            },
        ),
        migrations.CreateModel(
            name='Brands',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('logo', models.FileField(blank=True, null=True, upload_to='brands/gallery')),
                ('logo_hover', models.FileField(blank=True, null=True, upload_to='brands/gallery')),
            ],
            options={
                'verbose_name': 'Brand',
                'verbose_name_plural': 'Brands',
            },
        ),
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question_no', models.IntegerField(default=1)),
                ('question', models.CharField(max_length=255)),
            ],
            options={
                'verbose_name': 'Company',
                'verbose_name_plural': 'Companies',
            },
        ),
        migrations.CreateModel(
            name='ContactUs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.CharField(max_length=100)),
                ('address', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(default='+91 0000000000', max_length=15)),
            ],
            options={
                'verbose_name': 'Contact Us',
                'verbose_name_plural': 'Contact Us-s',
            },
        ),
        migrations.CreateModel(
            name='FunFact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('funfact_title', models.CharField(max_length=200)),
                ('funfact_count', models.IntegerField(default=0)),
                ('funfact_text', models.TextField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'Fun Fact',
                'verbose_name_plural': 'Fun Facts',
                'ordering': ['funfact_count'],
            },
        ),
        migrations.CreateModel(
            name='Gallery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.FileField(blank=True, null=True, upload_to='gallery/gallery')),
                ('page', models.CharField(blank=True, max_length=100)),
            ],
            options={
                'verbose_name': 'Gallery',
                'verbose_name_plural': 'Galleries',
            },
        ),
        migrations.CreateModel(
            name='Jobs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('job_name', models.CharField(max_length=100)),
                ('job_time', models.CharField(max_length=100)),
                ('job_desc', models.TextField()),
            ],
            options={
                'verbose_name': 'Job',
                'verbose_name_plural': 'Jobs',
            },
        ),
        migrations.CreateModel(
            name='MemberList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('member1', models.CharField(max_length=100)),
                ('member2', models.CharField(max_length=100)),
                ('member3', models.CharField(max_length=100)),
                ('member4', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name': 'MemberList',
                'verbose_name_plural': 'MemberLists',
            },
        ),
        migrations.CreateModel(
            name='ProgressChart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('heading', models.CharField(max_length=50)),
                ('progress', models.CharField(max_length=5)),
            ],
            options={
                'verbose_name': 'ProgressChart',
                'verbose_name_plural': 'ProgressCharts',
            },
        ),
        migrations.CreateModel(
            name='Slider',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img1', models.FileField(blank=True, null=True, upload_to='slider/gallery')),
                ('img2', models.FileField(blank=True, null=True, upload_to='slider/gallery')),
                ('title', models.CharField(max_length=255)),
                ('heading', models.CharField(max_length=255)),
                ('text', models.CharField(max_length=255)),
                ('page', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name': 'Slider',
                'verbose_name_plural': 'Sliders',
            },
        ),
        migrations.CreateModel(
            name='Success',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('story', models.CharField(max_length=100)),
                ('text', models.TextField()),
                ('page', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name': 'Success',
                'verbose_name_plural': 'Success-s',
            },
        ),
        migrations.CreateModel(
            name='Testimonial',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subject', models.CharField(max_length=200)),
                ('text', models.TextField(blank=True, null=True)),
                ('img', models.FileField(blank=True, null=True, upload_to='testimonials/gallery')),
                ('name', models.CharField(max_length=200)),
                ('post', models.CharField(max_length=200)),
            ],
            options={
                'verbose_name': 'Testimonial',
                'verbose_name_plural': 'Testimonials',
            },
        ),
    ]
