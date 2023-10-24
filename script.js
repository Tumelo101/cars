function toggleMenu() {
    const menu = document.querySelector('.menu')
    const nav = document.querySelector('.nav')
    menu.classList.toggle('active');
    nav.classList.toggle('active')
}
function changevideo(name){
    const bgvideoList = document.querySelectorAll('.bg-video');
    const trailers = document.querySelectorAll('.trailer');
    const models = document.querySelectorAll('.model');

bgvideoList.forEach(video => {
    video.classList.remove('active');
    if(video.classList.contains(name)){
        video.classList.add('active');
    }
})
}
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}
const stats = document.querySelector('.stats');
const counters = document.querySelectorAll(".counter");
let bol = false;
const sectionOffset = stats.offsetTop + stats.offsetHeight;
window.addEventListener("scroll", () => {
    const pageOffset = window.innerHeight + pageOffset;
    if(pageOffset > sectionOffset && bol === false) {
        counters.forEach(counter) => {
            function updatecount(){
                const target = +counter.getAttibute('data-target');
                const target = +counter.getAttibute('data-speed');
                const count = +counter.innerText;
                if(count < target){
                    counter.innerText = count + 1;
                    setTimeout(updatecount, speed);
                } else {
                    counter.innerText = target;
                }
            }
            updatecount();
            bol = true;
        };

    }
});
