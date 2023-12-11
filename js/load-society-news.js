const baseUrl1 = "https://mhealth.cyclic.app";
const apiRoutes1 = {
    articleList: `${baseUrl1}/news/society`,
};
const loadArticleListSociety = () => {
    fetch(apiRoutes1.articleList)
    .then((res) => res.json())
    .then((res) => {
        console.log({res});
        for (let i = 0; i < 3; i++) {
            const { title, description, image, date } = res[i];
            document.getElementById("society-card").innerHTML += `
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
loadArticleListSociety();



