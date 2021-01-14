function mobileExpand() {
  const links = document.getElementsByClassName("mobile-links");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}
