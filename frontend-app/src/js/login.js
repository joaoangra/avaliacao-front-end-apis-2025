document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const loginSection = document.getElementById('loginSection');
  const postsSection = document.getElementById('postsSection');
  const navLogin = document.getElementById('navLogin');
  const navPosts = document.getElementById('navPosts');
  const logoutBtn = document.getElementById('logoutBtn');
  const loginError = document.getElementById('loginError');

  if (localStorage.getItem('token')) {
    showPosts();
  }

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    loginError.textContent = '';
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem('token', data.token);
        showPosts();
      } else {
        loginError.textContent = 'Usuário ou senha inválidos.';
      }
    } catch {
      loginError.textContent = 'Erro ao conectar.';
    }
  });

  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('token');
    showLogin();
  });

  navLogin.addEventListener('click', showLogin);
  navPosts.addEventListener('click', showPosts);

  function showLogin() {
    loginSection.style.display = '';
    postsSection.style.display = 'none';
    navLogin.style.display = 'none';
    navPosts.style.display = '';
    logoutBtn.style.display = 'none';
  }

  function showPosts() {
    loginSection.style.display = 'none';
    postsSection.style.display = '';
    navLogin.style.display = '';
    navPosts.style.display = 'none';
    logoutBtn.style.display = '';
    if (typeof loadPosts === 'function') loadPosts();
  }
});