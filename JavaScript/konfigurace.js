const elements = document.querySelectorAll('.offer__header');

elements.forEach(function(element) {
  element.addEventListener('click', function() {
    const parentElement = this.parentElement;
    if (parentElement.classList.contains('showdetails')) {
      parentElement.classList.remove('showdetails');
    } else {
      parentElement.classList.add('showdetails');
    }
  });
});