const baseUrl2 = "http://localhost:4000";
const apiRoutes2 = {
    articleList: `${baseUrl2}/news/relationship`,
};
const loadArticleListRelation = () => {
    fetch(apiRoutes2.articleList)
    .then((res) => res.json())
    .then((res) => {
        console.log({res});
        for (let i = 0; i < 3; i++) {
            const { title, description, image, date } = res[i];
            document.getElementById("relation-card").innerHTML += `
            <div class="card-grid">
                <img src="${image}" alt="contoh">
                <div class="content">
                    <h3>${title}</h3>
                    <p class="date">${date}</p>
                    <p class="desc">${description}</p>
                </div>
            </div>
            `;
        }
        console.log({res});
    });
};
loadArticleListRelation();



