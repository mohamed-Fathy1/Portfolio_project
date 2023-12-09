import { createTextComponent } from './components/text.js';
import { toggleEdite } from './edit.js';
import { toggleNavBar } from './navBar.js';

document.addEventListener('DOMContentLoaded', function () {
  window.edit = false;
  document.querySelectorAll('.text-container').forEach((item) => {
    createTextComponent('Hello World', item);
  });
  toggleEdite();
});
