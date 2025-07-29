document.addEventListener('DOMContentLoaded', () => {
  const search = document.getElementById('search');
  if (!search) return;
  search.addEventListener('input', () => {
    const value = search.value.toLowerCase();
    const filtered = allPosts.filter(post => post.title.toLowerCase().includes(value));
    renderPosts(filtered);
  });
});