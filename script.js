const loginForm = document.querySelector('#login-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Validasi input kosong
  if (usernameInput.value.trim() === '') {
    alert('Username harus diisi!');
    usernameInput.focus();
    return;
  }

  if (passwordInput.value.trim() === '') {
    alert('Password harus diisi!');
    passwordInput.focus();
    return;
  }

  // Validasi panjang password minimal 8 karakter
  if (passwordInput.value.length < 8) {
    alert('Password harus memiliki panjang minimal 8 karakter!');
    passwordInput.focus();
    return;
  }

  // Jika input username dan password valid, submit form
  alert('Login berhasil!');
  loginForm.submit();
});
