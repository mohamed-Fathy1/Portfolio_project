window.edit = false;
window.portfolio = localStorage.getItem('portfolio') ? JSON.parse(localStorage.getItem('portfolio')) : {};
window.isSaved = true;
window.timeToSave = 2000;
