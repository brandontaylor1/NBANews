console.log("Connected")

const URL = 'https://nba-latest-news.p.rapidapi.com/articles';
const API_KEY = "ba5bba66e7msh4d67f7a5909ce85p1001bdjsnefb21fbd6220"

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "nba-latest-news.p.rapidapi.com"
    }
}

async function getArticles() {
    try {
        const response = await fetch(URL, options)
        const data = await response.json();
        displayArticles(data)
    } catch(error) {
        console.log(error);
        console.error({error: error.message})
    }
}

getArticles();



function displayArticles(articles) {
    const cardContainer = document.getElementById('cardContainer')

    for(let article of articles) {
        const articleCard = document.createElement('div')
        articleCard.setAttribute('id', 'articleCard')
        
        const headline = document.createElement('h1')
        headline.textContent = article.title
        articleCard.appendChild(headline);
        console.log(headline);
        
        const link = document.createElement('a')
        link.textContent = "Read More"
        link.href = article.url
        link.setAttribute('target', 'blank')
        articleCard.appendChild(link)


        cardContainer.appendChild(articleCard);    
    }
}