const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const registerForm = document.querySelector('.sign-up form');

// Thêm sự kiện click cho nút đăng ký và đăng nhập
registerBtn.addEventListener('click', () => { container.classList.add("active"); });
loginBtn.addEventListener('click', () => { container.classList.remove("active"); });

// Xử lý sự kiện submit của form đăng ký
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Giả lập quá trình đăng ký thành công
    // Tại đây bạn có thể thêm mã gửi dữ liệu đăng ký tới server và xử lý phản hồi
    console.log('Đăng ký thành công!');
    
    // Chuyển sang form đăng nhập
    container.classList.remove("active");
});
