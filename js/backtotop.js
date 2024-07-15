// tạo biến tham chiếu
let mybutton = document.getElementById("backToTopBtn")
window.onscroll = function () {
    scrollFunction()
};
// hiển khi lăn quá 20px
function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// chỉnh vị trí đẩy lên , chuyển động
function topFunction(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
};