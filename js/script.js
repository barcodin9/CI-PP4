async function newsSearch (userSearch) {
    try {
        const whosnews = await fetch (`https://api.worldnewsapi.com/search-news?api-key=903a1fea0c8b4e7c996d81c552b613b5&text=${userSearch}&language=en&number=5`).then(res => res.json())
        console.log(whosnews)
    }
    catch (err) {
        console.log(err)
    }
}

const searchInput = document.getElementById('searchinput')
const button = document.getElementById('searchbutton')

button.addEventListener('click', async() => {
    const response = await newsSearch(searchInput.value)
    console.log(response)
});
