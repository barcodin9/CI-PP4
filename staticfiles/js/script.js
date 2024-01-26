async function newsSearch (userSearch, numberOfArticles = 12) {
    try {
        const response = await fetch(`https://api.worldnewsapi.com/search-news?api-key=903a1fea0c8b4e7c996d81c552b613b5&text=${userSearch}&language=en&number=${numberOfArticles}`);
        const whosnews = await response.json();
        console.log("API Response:", whosnews);
        // check if any articles can be found via word entered
        if (!whosnews.news || whosnews.news.length === 0 ) {
            throw new Error("No articles were found for the keyword entered, please try again.");
        }
        return(whosnews);
    }
    catch (err) {
        console.log(err);
        return{ error: err.message};
    }
}

function displayNews(newsData) {
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = '';

    newsData.news.forEach(article => {
        const card = document.createElement('div');
            card.className = 'card';

            let snippet = article.text;
            if (snippet.length > 200) {
                snippet = snippet.substring(0, 200) + '...';
            }

            card.innerHTML = `
            <img src="${article.image}" alt="Article Image" style="width:100%; height: auto; border-radius: 5px;">
            <h3>${article.title}</h3>
            <p>${snippet}</p>
            <a href="${article.url}" target="_blank">Read more</a>
            `;
        newsContainer.appendChild(card);
    });
}


const searchInput = document.getElementById('searchinput');
const button = document.getElementById('searchbutton');

if (button) {
button.addEventListener('click', async() => {
    const response = await newsSearch(searchInput.value, 3);
    console.log(response);
    displayNews(response);
});
}


// Categories / News page //

const categories = document.getElementsByClassName('news-cats');

Array.from(categories).forEach(category => {
    category.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
            const articles = await newsSearch(e.target.innerText);
            console.log(articles);
            displayNews(articles);
        } catch (err) {
            console.error(err);
        }
    });
});


