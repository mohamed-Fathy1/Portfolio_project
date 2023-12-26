// import { createTextComponent } from './components/text.js';
import { toggleEdite } from './edit.js';
import { startCreateSections } from './createSection.js';

document.addEventListener('DOMContentLoaded', function () {
  console.log(window.portfolio);
  startCreateSections();
  // document.querySelectorAll('.text-container').forEach((item) => {
  //   createTextComponent('h1', 'Hello World', item);
  // });
  toggleEdite();
});
