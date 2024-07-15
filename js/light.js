const body = document.querySelector('body'); // lưu trữ tới body
const initialTheme = 'light'; // giá trị mặc định

const setTheme = (theme) => {
    localStorage.setItem('theme', theme); // lưu
    body.setAttribute('data-theme', theme); // đặt thuộc tính ' ' cho body
    updateButtonText(theme);
};

const toggleTheme = () => {
    const activeTheme = localStorage.getItem('theme');
    if (activeTheme === 'light') { // nếu theme là 1 thì hiển thị 2 
        setTheme('dark');
    } else { // và ngược lại 
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
    if (theme === 'light') {
        button.textContent = 'sáng';
    } else {
        button.textContent = 'be'; // văn bản nút bấm
    }
};

setThemeOnInit(); // 
