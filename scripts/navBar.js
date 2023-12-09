
let navBarOpen = false;

function toggleNavBar () {
  const navBar = document.querySelector('header nav');
  console.log(navBarOpen);
  if (navBarOpen) {
    navBar.classList.remove('visible');
    navBarOpen = false;
  } else {
    navBar.classList.add('visible');
    navBarOpen = true;
  }
}
document.querySelector('header button.hamburger').addEventListener('click', toggleNavBar);

export { toggleNavBar };
