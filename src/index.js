const generateIdea = () => {
fetch("https://apis.scrimba.com/bored/api/activity")
.then(response => response.json())
.then(data => {
    document.querySelector('.ideas').textContent = data.activity;
    document.querySelector('.title').textContent = "HappyBot";
    document.body.classList.add('fun')
})
}

const button = document.querySelector('.button')
button.addEventListener('click', () => generateIdea())