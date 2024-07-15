const body = document.querySelector('body'); // lưu trữ tới body
const initialTheme = 'light'; // giá trị mặc định

const setTheme = (theme) => {
    localStorage.setItem('theme', theme); // lưu
    body.setAttribute('data-theme', theme); // đặt thuộc tính ' ' cho body
    updateButtonText(theme);
};

const toggleTheme = () => {
    const activeTheme = localStorage.getItem('theme');
    if (activeTheme === 'light') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
};
// hàm khi refresh
const setThemeOnInit = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        updateButtonText(savedTheme);
    } else {
        setTheme(initialTheme);
    }
};

const updateButtonText = (theme) => {
    const button = document.getElementById('themeButton'); // lấy tham chiếu tới nút
    if (theme === 'light') {q
        button.textContent = 'sáng';
    } else {
        button.textContent = 'be';
    }
};

setThemeOnInit();
