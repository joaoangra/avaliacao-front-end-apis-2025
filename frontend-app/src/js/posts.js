let allPosts = [];

async function loadPosts() {
  const postList = document.getElementById('postList');
  postList.innerHTML = 'Carregando...';
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    allPosts = await res.json();
    renderPosts(allPosts);
  } catch {
    postList.innerHTML = 'Erro ao carregar posts.';
  }
}

function renderPosts(posts) {
  const postList = document.getElementById('postList');
  if (!posts.length) {
    postList.innerHTML = '<p>Nenhum post encontrado.</p>';
    return;
  }
  postList.innerHTML = posts.map(post => `
    <div class="post-card" data-id="${post.id}">
      <h3>${post.title}</h3>
    </div>
  `).join('');
  document.querySelectorAll('.post-card').forEach(card => {
    card.onclick = () => showPostModal(card.dataset.id);
  });
}