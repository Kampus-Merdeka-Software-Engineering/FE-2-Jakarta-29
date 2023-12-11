const baseUrl = "https://mhealth.adaptable.app";
        const apiRoutes = {
                articleList: `${baseUrl}/news/relationship`,
        };
        const loadArticleList = () => {
            fetch(apiRoutes.articleList)
            .then((res) => res.json())
            .then((res) => {
                console.log({res});
                res.forEach(({ title, image, date, description }) => {
                    document.getElementById("relation-topic").innerHTML += `
                    <div class="news-wrapper">
                        <div class="news-grid-left">
                            <img src="${image}" alt="contoh">
                        </div>
                        <div class="news-grid-right">
                            <p class="date">${date}</p>
                            <h1 class="title">${title}</h1>
                            <p class="desc">${description}</p>
                            <a href="">Read More</a>
                        </div>
                    </div>`;
                });
                console.log({res});
            });
        };
        loadArticleList();