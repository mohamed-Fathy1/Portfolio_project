import { createTextComponent } from './components/text.js';
import { toggleEdite } from './edit.js';

document.addEventListener('DOMContentLoaded', function () {
  window.edit = false;
  createTextComponent('Hello World');
  toggleEdite();
});
