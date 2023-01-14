const btnTop = document.getElementById("btnTop")

function scrollFunction() {
  if (document.documentElement.scrollTop > 200) {
      btnTop.style.display = "block";
  } 
  else {
      btnTop.style.display = "none";
  }
}

window.onscroll = scrollFunction;
 
function topFunction() {
  document.documentElement.scrollTop = 0;
}

btnTop.onclick = topFunction;