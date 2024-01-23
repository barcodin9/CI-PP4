async function newsSearch (userSearch) {
    try {
        const response = await fetch(`https://api.worldnewsapi.com/search-news?api-key=903a1fea0c8b4e7c996d81c552b613b5&text=${userSearch}&language=en&number=3`);
        const whosnews = await response.json();
        console.log("API Response:", whosnews);
        displayNews(whosnews);
    }
    catch (err) {
        console.log(err)
    }
}

function displayNews(newsData) {
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = '';

    newsData.news.forEach(article => {
        const card = document.createElement('div')
            card.className = 'card'
            card.innterHTML = `
            <h3>${article.title}</h3>
            <p>${article.text}</p> 
            <a href="${article.url}" target="_blank">Read More!</a>
            `
        newsContainer.appendChild(card)
    })
}

const searchInput = document.getElementById('searchinput')
const button = document.getElementById('searchbutton')

button.addEventListener('click', async() => {
    const response = await newsSearch(searchInput.value)
    console.log(response)
});

