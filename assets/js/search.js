let posts = [];

fetch('/search.json')
  .then(res => res.json())
  .then(data => {
    posts = data;
  });

const input = document.getElementById('search-box');
const results = document.getElementById('results');

input.addEventListener('input', () => {
  const query = input.value.toLowerCase();

  results.innerHTML = '';

  if (!query) return;

  const filtered = posts.filter(post =>
    post.title.toLowerCase().includes(query) ||
    post.content.toLowerCase().includes(query) ||
    (post.tags && post.tags.join(' ').toLowerCase().includes(query))
  );

  filtered.forEach(post => {
    const li = document.createElement('li');
    li.innerHTML = `
      <a href="${post.url}">${post.title}</a>
      <small>${post.date}</small>
    `;
    results.appendChild(li);
  });
});