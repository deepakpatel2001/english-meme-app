const btn = document.querySelector('.button-div');
const title = document.querySelector('.title');
const img = document.querySelector('img');
const author = document.querySelector('.author');

btn.addEventListener('click', () => {
    async function getMeme() {
        let url = 'https://meme-api.com/gimme/wholesomememes';
        let fetchData = await fetch(url);
        let mainData = await fetchData.json();
        console.log(mainData);
        title.innerHTML = mainData.title;
        img.setAttribute('src', mainData.url);
        author.innerHTML = mainData.author
    }
    getMeme();
});
