// dapatkan elemen form
const form = document.querySelector('form');

// tambahkan event listener pada saat form disubmit
form.addEventListener('submit', (event) => {
    // hentikan aksi default dari form (mengirim data ke server)
    event.preventDefault();

    // dapatkan nilai input dari field nama, email, password, dan konfirmasi password
    const nama = document.querySelector('input[name=nama]').value;
    const email = document.querySelector('input[name=email]').value;
    const password = document.querySelector('input[name=password]').value;
    const confirmPassword = document.querySelector('input[name=confirmPassword]').value;

    // validasi setiap field
    if (nama === '') {
        alert('Silahkan isi nama lengkap Anda.');
        return false;
    }

    if (email === '') {
        alert('Silahkan isi alamat email Anda.');
        return false;
    }

    if (password === '') {
        alert('Silahkan isi password Anda.');
        return false;
    }

    if (confirmPassword === '') {
        alert('Silahkan konfirmasi password Anda.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Password dan konfirmasi password tidak cocok.');
        return false;
    }

    // jika semua field telah valid, kirimkan data ke server
    alert('Terima kasih telah mendaftar!');
    form.submit();
});
