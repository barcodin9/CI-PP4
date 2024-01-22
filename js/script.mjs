// import fetch from "node-fetch"
// async function test () {
//     try {
//         const whosnews = await fetch ('https://api.worldnewsapi.com/search-news?api-key=903a1fea0c8b4e7c996d81c552b613b5&text=apple&language=en&number=10').then(res => res.json())
//         console.log(whosnews)
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

const searchInput = document.getElementById('searchinput')
const button = document.getElementById('searchbutton')

button.addEventListener('click', (e) => {
    console.log(searchInput.value)
})

// test()