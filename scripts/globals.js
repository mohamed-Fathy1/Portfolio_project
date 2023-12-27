window.edit = false;
window.portfolio = localStorage.getItem('portfolio') ? JSON.parse(localStorage.getItem('portfolio')) : {};
window.isSaved = true;
const maxTimeToSave = 5000;
window.timeToSave = maxTimeToSave;
