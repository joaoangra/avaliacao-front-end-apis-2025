async function showPostModal(id) {
  const modal = document.getElementById('postModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  let post = allPosts.find(p => p.id == id);
  if (!post) {
    // Busca caso não esteja carregado
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    post = await res.json();
  }
  modalTitle.textContent = post.title;
  modalBody.textContent = post.body;
  modal.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('postModal');
  const closeModal = document.getElementById('closeModal');
  closeModal.onclick = () => modal.style.display = 'none';
  window.onclick = (e) => {
    if (e.target == modal) modal.style.display = 'none';
  };
});