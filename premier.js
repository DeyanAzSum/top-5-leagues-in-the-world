let index = 1;
show(index);


function pl(n) {
  show(index += n);
}


function current(n) {
  show(index = n);
}

function show(n) {
  let x;
  let sl = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > sl.length) {index = 1}
  if (n < 1) {index = sl.length}
  for (y = 0; y < sl.length; y++) {
    sl[x].style.display = "none";
  }
  for (x = 0; x < dots.length; x++) {
    dots[x].className = dots[x].className.replace(" active", "");
  }
  sl[index-1].style.display = "block";
  dots[index-1].className += " active";
}