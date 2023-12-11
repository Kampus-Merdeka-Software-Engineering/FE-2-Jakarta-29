const baseUrl = "https://mhealth.cyclic.app";
const apiRoutes = {
    articleList: `${baseUrl}/news/self`,
};
const loadArticleListSelf = () => {
    fetch(apiRoutes.articleList)
    .then((res) => res.json())
    .then((res) => {
        console.log({res});
        for (let i = 0; i < 3; i++) {
            const { title, description, image, date } = res[i];
            document.getElementById("self-love-card").innerHTML += `
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
loadArticleListSelf();



