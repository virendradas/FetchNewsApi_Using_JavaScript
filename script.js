let newSection = document.getElementById('newsSection');
let search = document.getElementById('search');
let searchData = document.getElementById('searchData');
// console.log(search);




const getNews = async (news) => {

    newSection.innerHTML = '';

    const apiKey = `eed3ef43074948f9bd604a78d15eac81`;
    const url = `https://newsapi.org/v2/everything?q=${news}&from=2026-03-01&to=2026-03-01&sortBy=popularity&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        const { articles } = await response.json();
        console.log(articles);


        articles.forEach(n => {
            newSection.innerHTML += `
                <div class="card dflex">
                    <img width="100" src="${n.urlToImage}" alt="img">
                <div class="contant dflexC">
                    <h2>${n.title}</h2>
                    <p>${n.description}</p>
                </div>
                </div>
            `
        })

    } catch (error) {
        console.log('error is:', error.message);
    }
}

getNews('bollywood');

searchData.addEventListener('click', ()=>getNews(search.value));