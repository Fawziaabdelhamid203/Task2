const images=document.querySelectorAll('.slider img')
let currentIndex=0
function showNextImage(){
    images[currentIndex].classList.remove('active')
    currentIndex=(currentIndex+1)%images.length
    images[currentIndex].classList.add('active')
}
let interval=setInterval(showNextImage,3000)
document.querySelector('.slider').addEventListener('mouseenter',()=>{
    clearInterval(interval)
})
document.querySelector('.slider').addEventListener('mouseenter',()=>{
   interval=setInterval(showNextImage,3000)
})