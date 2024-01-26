# WHOS NEWS! 

Whos news is an article generator that uses a public api to retrieve news articles from around the internet based on a choice of either keywords, or category selection.

I built this website in order to become more aware of the world around me and hopefully help others do the same. I believe it is paramount to keep up to date with the world around us.

# Features

## The Head Bar

The head bar is in a contrasting brown and orange that jumps out at the viewer - it features a heading for the website, a logo, then further along the nav-bar there are anchors to navigate to the other available pages.

<img width="1470" alt="Screenshot 2024-01-26 at 09 17 25" src="https://github.com/barcodin9/CI-PP4/assets/109236559/8b52acef-572e-4991-99fb-0ba9960f1b40">

When you downsize the screen below 900px - the anchors collapse into a drop down list done using BootStrap.

<img width="497" alt="Screenshot 2024-01-26 at 09 20 28" src="https://github.com/barcodin9/CI-PP4/assets/109236559/456410de-bc7d-411f-b166-3e1d06b7cacf">

All pages feature the same header & footer. The footer features the same navigable pages and logo - along with the copyright declaration.

<img width="1470" alt="Screenshot 2024-01-26 at 09 22 49" src="https://github.com/barcodin9/CI-PP4/assets/109236559/2cc6e195-9b93-4ae8-bf80-f26bd386d7ac">

The home page features a carousel which cycles between 2 images, one is a blown up logo, and the other is an AI generated piece of art that doubles as a navigation to the category page. Below that is a search bar which, when a keyword is entered and the button to search is pressed, will generate three relevant news article cards below.

<img width="1470" alt="Screenshot 2024-01-26 at 09 23 35" src="https://github.com/barcodin9/CI-PP4/assets/109236559/5ac3c314-6bf0-4c06-b19d-0a8ebc396d8c">


<img width="1470" alt="Screenshot 2024-01-26 at 09 25 41" src="https://github.com/barcodin9/CI-PP4/assets/109236559/73376216-8c29-472c-a44f-817dd9420182">


## The Categories Page

The Categories page features a number of categories to select from, similar in function to the keyword, it will pull relevant articles and display them in bite sized card formats, you can click the read more link at the bottom of the card to redirect to the original page where the full article was posted.

If you have not logged in and attempt to access categories, you will be automatically redirected to the log in page.


<img width="1470" alt="Screenshot 2024-01-26 at 09 27 52" src="https://github.com/barcodin9/CI-PP4/assets/109236559/d1fa76f8-cdf7-48eb-9690-816d89c255e1">


## The Log In Page 

The log in page is kept simple with basic inputs for username and password, this is fully functional.


<img width="691" alt="Screenshot 2024-01-26 at 09 29 25" src="https://github.com/barcodin9/CI-PP4/assets/109236559/fd3db823-3d5e-4e64-a078-0058fe5a7216">

If you have not created an account there is a prompt you can follow on the login input container to go to the account creation page.

## The Account Creation Page

Largely similar to the log in page, the sign up page features a number of inputs for the user to fill out, all of which are logged in the database and stored until edited or deleted by the user.

<img width="696" alt="Screenshot 2024-01-26 at 09 31 24" src="https://github.com/barcodin9/CI-PP4/assets/109236559/616764e4-2bcf-4a7d-a26c-a915cb4b3eca">

## The Contact Us Page

The Contact Page features again, a number of inputs for the user to fill out, these will be translated into an email and forwarded to a customer service account, fully functional.

<img width="571" alt="Screenshot 2024-01-26 at 09 32 50" src="https://github.com/barcodin9/CI-PP4/assets/109236559/bb4b9914-7cfa-4f02-b52a-c99c6f044ffc">

## Account Edit Page

Once the user is logged in, they can navigate to the account edit page and change their details or delete their account, they are warned prior to deleting the account that it is a permenant deletion and cannot be reversed.

<img width="496" alt="Screenshot 2024-01-26 at 09 35 16" src="https://github.com/barcodin9/CI-PP4/assets/109236559/128bc1f5-53d7-496d-abd2-6fe1c7c4e09c">

<img width="576" alt="Screenshot 2024-01-26 at 09 36 30" src="https://github.com/barcodin9/CI-PP4/assets/109236559/16e46fe1-957c-45ce-b2e2-141e09668852">



# Testing


## Vaildator Testing

### HTML
    - I received errors correlating to the static tags on the HTML pages which I have not rectified, all other HTML related code passes       validator.

![Screenshot 2024-01-26 at 04 50 07](https://github.com/barcodin9/CI-PP4/assets/109236559/c318e60d-3327-4835-b861-ad27f836e1d3)


### CSS
  No Errors when stylesheet passed through CSS validator.
  <img width="1014" alt="Screenshot 2024-01-26 at 09 42 03" src="https://github.com/barcodin9/CI-PP4/assets/109236559/ca623dc4-b66d-46f8-a539-b31d1f9a0b2c">


### JavaScript
   No errors when passing script.js through JShint.
  
<img width="956" alt="Screenshot 2024-01-26 at 09 43 11" src="https://github.com/barcodin9/CI-PP4/assets/109236559/2c14290b-c68d-4083-b8e8-ae7e6cddd1ab">

### Python

  Python code for the relevant pages ran through the python linter.
  
  <img width="1329" alt="Screenshot 2024-01-26 at 09 07 18" src="https://github.com/barcodin9/CI-PP4/assets/109236559/e2111388-89b9-4485-872b-dd0bb368d713">


<img width="1331" alt="Screenshot 2024-01-26 at 09 06 36" src="https://github.com/barcodin9/CI-PP4/assets/109236559/f07f7db3-ddbc-4a2f-9d14-d1993a50bde3">



<img width="1380" alt="Screenshot 2024-01-26 at 09 06 17" src="https://github.com/barcodin9/CI-PP4/assets/109236559/79214f7e-570d-477f-ab0d-b00c74f7a5c5">

## Performance Test

Performance testing for each page individually.

<img width="463" alt="Screenshot 2024-01-26 at 09 05 38" src="https://github.com/barcodin9/CI-PP4/assets/109236559/bdd06417-6328-45fc-8bb2-17afc6e70ebf">
<img width="463" alt="Screenshot 2024-01-26 at 09 05 16" src="https://github.com/barcodin9/CI-PP4/assets/109236559/d1514df5-c3fa-44db-bce2-9aecbfc5964a">
<img width="463" alt="Screenshot 2024-01-26 at 08 16 31" src="https://github.com/barcodin9/CI-PP4/assets/109236559/a7ce7f49-7fac-42f5-a021-3947f73ee7a0">
<img width="465" alt="Screenshot 2024-01-26 at 08 16 15" src="https://github.com/barcodin9/CI-PP4/assets/109236559/85255875-7ba6-45fa-b2ca-bf3a13ef566c">
<img width="463" alt="Screenshot 2024-01-26 at 08 15 53" src="https://github.com/barcodin9/CI-PP4/assets/109236559/e5fee688-3ab6-4a16-b86b-9ddb7a0c2d46">
<img width="462" alt="Screenshot 2024-01-26 at 08 15 36" src="https://github.com/barcodin9/CI-PP4/assets/109236559/7e5eff1b-336f-4fe8-ac4d-f7889ea5c113">

## Manual Testing

- Ensure functionality with every button, particularly that anchor buttons navigated to the correct pages.
- Forms accept the required formatting only eg. email only accepting a valid email address layout (test@test.test works)
- Ensure API calls successfully for every category button and a list of keywords - ensuring that the correct number of articles generate each time.
- Repeatedly click the same and different categories, repeatedly click the search button and try a range of different keywords in quick succession to ensure the API still calls correctly every time.
- Ensure adequate functionality and aesthetics at screen sizes ranging from 2k monitor to phone (Iphone SE used as reference)
- Ensure correct display on mac which has been an issue in the past.
- Check a number of articles' "Read More" nav to ensure they direct to the articles correctly and concisely.
NOTE: The API can pull some NSFW articles with certain keywords.
- Ensure the email inputs actually generate and send as an email to the labeled account.
- Grammar check to ensure no misspellings and no incorrect punctuation.

## Agile Methodology

### User Stories and public backlogs used to streamline the development process whilst working on a shortened deadline.

- My User Stories and planned implementations
<img width="880" alt="Screenshot 2024-01-26 at 10 05 47" src="https://github.com/barcodin9/CI-PP4/assets/109236559/1cbc0c44-45be-4a97-9ffa-98a5e494b79d">

- My User Story Template
<img width="725" alt="Screenshot 2024-01-26 at 10 06 16" src="https://github.com/barcodin9/CI-PP4/assets/109236559/c02b1fff-e0f7-4bc0-993f-15ae74046d46">


## Unfixed Bugs 
There are no unfixed bugs that I could locate with manual testing.

### Programs Used

- [Github](https://github.com/) - Used for creating application repository, version control, organising workflow utilising agile functionality of GitHub project, issues and milestones.
- [Gitpod](https://www.gitpod.io/) - Used as a coding environment.
- [Heroku](https://www.heroku.com/) - Used as the cloud-based platform to deploy the site.
- [Adobe Illustrator](https://www.adobe.com/products/illustrator.html) used to finalise the logo.
- [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) used to alter images with generative fill.
- [favicon.io](https://favicon.io/) - Used to convert images into icons.
- [JSHint](https://jshint.com/) - Used to validate JavaScript
- [W3C Markup Validation Service](https://validator.w3.org/) - Used to validate HTML
- [CSS Validation Service](https://jigsaw.w3.org/css-validator/) - Used to validate CSS
- [CI Python Linter](https://pep8ci.herokuapp.com/#) - Used to validate Python

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

The App and Database were deployed using Heroku, the steps are as follows:
### Heroku Deployment

* Log into [Heroku](https://www.heroku.com/) account or create an account.
- Click the "New" button at the top right corner and select "Create New App".
- Enter a unique application name
- Select your region
- Click "Create App"


* In your workspace (GitPod) create an **env.py** file and add it to **.gitignore**
- Add the **DATABASE_URL** value and your chosen **SECRET_KEY** value to the **env.py file along with EMAIL_HOST_USER & EMAIL_HOST_PASSWORD** using placeholders for the settings.py file that call to the env.py file.
- Ensure your STATIC_URL = '/static/' so that your stylesheet and images etc will function on deployment.
- I used Whitenoise to serve my staticfiles on heroku, this can be downloaded from the terminal using the following command: pip OR pip3 install whitenoise, this is followed by ensuring it is added to your requirements.txt
- Add whitenoise to your middleware settings as shown =>
  
  MIDDLEWARE = [
    # other middleware classes
    'whitenoise.middleware.WhiteNoiseMiddleware',

]

- Verify your filepaths and then check to ensure it integrated correctly before proceeding.
- Set STATIC_ROOT in your settings.py
- STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

- Then you can run - python manage.py collectstatic, this will collect all the static files and copy them into a folder on the root directory.
- Add Heroku to the ALLOWED_HOSTS in settings.py

- Heroku requires an addition Procfile to be created on the root directory with the following inside it.
- web: gunicorn codestar.wsgi

- Ensure the space after web: is present.

### Deploy

1. Before deployment change DEBUG = False in the settings.py.
2. Connect to GitHub on the Heroku app, and search your project repository.
3. Not required but good idea to enable automatic deployment on Heroku to save you manually deploying the branch every time.
4. Click 'Open App' to view the deployed live site.

The live link can be found here - https://whos-news-131e53e640e5.herokuapp.com/

## Credits

### API
https://worldnewsapi.com/

### Content
https://www.youtube.com/c/techwithtim - Tech with Tim is a beacon of knowledge for all things backend.

### Docs

- [jQuery](https://api.jquery.com/)
- [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Django docs](https://docs.djangoproject.com/en/5.0/)
- [Stack Overflow](https://stackoverflow.com/)
- [GitHub Markdown Cheet Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### Media 
Dall-E for image and Logo Creation along with Photoshop Generative Fill.
https://favicon.io/ - PNG to Favicon Converter

# Thank you for reading, I hope you enjoyed my project.
