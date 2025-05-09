function openLoginPopup() {
    document.getElementById('login-overlay').style.display = 'flex';
  }

  function closePopup() {
    document.getElementById('login-overlay').style.display = 'none';
  }


  document.getElementById('loginBtn').addEventListener('click', function (e) {
    e.preventDefault();
    openLoginPopup();
  });


  document.getElementById('login-overlay').addEventListener('click', function (e) {
    if (e.target.classList.contains('overlay')) {
      closePopup();
    }
  });


  document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Login successful!');
    closePopup();
  });
  function switchToRegister() {
    document.getElementById('login-overlay').style.display = 'none';
    document.getElementById('register-overlay').style.display = 'flex';
}

function switchToLogin() {
    document.getElementById('register-overlay').style.display = 'none';
    document.getElementById('login-overlay').style.display = 'flex';
}

function closePopup() {
    document.getElementById('login-overlay').style.display = 'none';
    document.getElementById('register-overlay').style.display = 'none';
}
  // Optional: scroll behavior for other buttons (keep if still needed)
  const trendingBtn = document.getElementById('trendingBtn');
  if (trendingBtn) {
    trendingBtn.addEventListener('click', function () {
      document.getElementById('trendingProperties').scrollIntoView({
        behavior: 'smooth'
      });
    });
  }

