
var s = document.querySelector("#bar1");
var btn = document.querySelector("#menu");


btn.addEventListener("click", () => {
    s.classList.toggle("change1");
    
    document.querySelector("#bar3").classList.toggle("change2")
    document.querySelector("#bar2").classList.toggle("change3")
    document.querySelector("#drop-down").classList.toggle("active-menu")

console.log( document.querySelector("#drop-down").classList)
});