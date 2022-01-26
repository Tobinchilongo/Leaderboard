import './style.css';

const name = document.getElementById('username');
const score = document.getElementById('user-score');
const box = document.getElementById('scores');
const form = document.getElementById('form');
const refresh = document.getElementById('refresh-btn');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IlpefkswvxlUmvlqvnsw/scores/';

const postData = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: name.value,
        score: score.value,
      }),
    });
    form.reset();
  });
};

postData();

const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  box.innerHTML = '';
  data.result.forEach((e) => {
    box.innerHTML += `<li>${e.user}: ${e.score}</li>`;
  });
};

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  fetchData();
});

window.addEventListener('load', (e) => {
  e.preventDefault();
  fetchData();
});
