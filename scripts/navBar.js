let navBarOpen = false;

/**
    * Closes the nav bar
    * @return {void}
    * @example
    * closeNavBar();
* */
function closeNavBar () {
  const navBar = document.querySelector('header nav');
  navBar.classList.remove('visible');
  navBarOpen = false;
}

/**
    * Toggles the nav bar
    * @return {void}
    * @example
    * toggleNavBar();
* */
function toggleNavBar () {
  console.log(navBarOpen);
  if (navBarOpen) {
    closeNavBar();
  } else {
    const navBar = document.querySelector('header nav');
    navBar.classList.add('visible');
    navBarOpen = true;
  }
}

document.querySelector('header button.hamburger').addEventListener('click', toggleNavBar);
document.body.addEventListener('click', (event) => {
  if (navBarOpen && !event.target.closest('header button.hamburger')) {
    closeNavBar();
  }
});

export { toggleNavBar };
