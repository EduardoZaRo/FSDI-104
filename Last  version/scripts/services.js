function isScrolledIntoView(el) {
    let a = el.getBoundingClientRect();
    let nextElement = a.bottom;
    return (nextElement <= window.innerHeight) ;
}
document.addEventListener("scroll", function(){
    let first = document.getElementById("first-service");
    let second = document.getElementById("second-service");
    let third = document.getElementById("third-service");
    let footer = document.querySelectorAll(".service-footer")[0];
    if(isScrolledIntoView(first)){
        // first.classList.add("toLeft")
    }
    if(isScrolledIntoView(second)){
        second.classList.add("toRight")
    }
    if(isScrolledIntoView(third)){
        third.classList.add("toLeft")
        footer.classList.add("toRight")
    }
});