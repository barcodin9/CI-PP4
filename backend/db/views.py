from django.shortcuts import render, redirect
from .forms import CustomUserCreationForm
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import AuthenticationForm
from .forms import ContactForm
from django.conf import settings
from django.core.mail import send_mail



# Create your views here.
def home(request): 
    return render(request, 'index.html')

def news(request): 
    return render(request, 'news.html')


def login_view(request): 
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home')
            else:
                form.add_error(None, "Invalid username or password")
    else:
        form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})


def signup(request): 
    print(request.POST)
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            print('valid')
            form.save()
            return redirect('home')
        else:
            print(form.errors)
    else:
        print('test')
        form = CustomUserCreationForm()
    return render(request, 'signup.html', {'form': form})



def contact(request): 
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']

            send_mail(
                subject,
                f"Message from {name} ({email}): \n\n{message}",
                email,
                [settings.EMAIL_HOST_USER],
                fail_silently=False,
            )
            return redirect('home')
    else:
            form = ContactForm()
    return render(request, 'contact.html', {'form': form})


