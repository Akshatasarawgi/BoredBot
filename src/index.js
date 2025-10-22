
const generateIdea = () => {
fetch('https://apis.scrimba.com/bored/api/activity')
    .then(response => response.json())
    .then(data => {
    document.querySelector('.ideas').textContent = data.activity;
})
}

const button = document.querySelector('.button');
button.addEventListener('click', () => generateIdea())