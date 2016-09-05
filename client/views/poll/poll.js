var concerts = document.getElementById('parent');


var concertsShowing = false;

concerts.onclick = function() {
	if (concertsShowing){
    document.getElementById('popup').style.display = 'none';
    document.body.style.backgroundColor = "blue";
    concertsShowing = false;
  } else {
      document.getElementById('popup').style.display = 'block';
      document.body.style.backgroundColor = "red";
      concertsShowing = true;
  }
}
