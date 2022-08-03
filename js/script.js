const el = document.querySelector("a")

function toggleWAI(){
    el.classList.toggle("wai_onclick");
}
el.onclick = toggleWAI;
