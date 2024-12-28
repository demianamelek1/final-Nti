let slides = document.querySelectorAll(".slide")
let dots = document.querySelectorAll(".dot")
let current = 0
dots.forEach((dot, i)=>{
    dot.addEventListener("click", function(){
        slides.forEach(s=> s.classList.remove("active"))
        dots.forEach(s=> s.classList.remove("active"))
        dot.classList.add("active")
        slides[i].classList.add("active")
        current = i
    })
})