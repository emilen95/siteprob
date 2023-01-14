 const openFrame = document.querySelector('.contact_us')
 const closeFrame = document.querySelector('#btnFrame')
 const Frame = document.querySelector('.contact_frame')


openFrame.addEventListener("click",()=>{
    Frame.classList.add('contact_frame_open');
 })

closeFrame.addEventListener('click',()=>{
    Frame.classList.remove('contact_frame_open');
 })

