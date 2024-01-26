from django.shortcuts import render, redirect
from .forms import CustomUserCreationForm


# Create your views here.
def home(request): 
    return render(request, 'index.html')

def news(request): 
    return render(request, 'news.html')

def login(request): 
    return render(request, 'login.html')

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
    return render(request, 'contact.html')


