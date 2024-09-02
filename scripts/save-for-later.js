document.addEventListener('DOMContentLoaded', function() {
  // Constant for localStorage key
  const SAVED_ITEMS_KEY = 'savedItems';

  // Get the saved items container element
  const savedItemsContainer = document.getElementById('saved-items');

  // Function to get saved items from localStorage
  function getSavedItems() {
    return JSON.parse(localStorage.getItem('savedItems')) || [];
  }

  // Function to save items back to localStorage
  function saveItems(items) {
    localStorage.setItem('savedItems', JSON.stringify(items));
  }

  // Function to render saved items on the "Save for Later" page
  function renderSavedItems() {
    const savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS_KEY)) || [];
    savedItemsContainer.innerHTML = '';

    savedItems.forEach(imgSrc => {
      const imgContainer = document.createElement('div');
      imgContainer.classList.add('image-container');

      const imgElement = document.createElement('img');
      imgElement.src = imgSrc;

      const deleteButton = document.createElement('span');
      deleteButton.classList.add('delete-button');
      deleteButton.textContent = '×';
      deleteButton.addEventListener('click', function() {
        deleteImage(imgSrc);
      });

      imgContainer.appendChild(imgElement);
      imgContainer.appendChild(deleteButton);
      savedItemsContainer.appendChild(imgContainer);
    });
  }

  // Function to delete an image from the HTML page and localStorage
  function deleteImage(imgSrc) {
    const savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS_KEY)) || [];
    const updatedItems = savedItems.filter(item => item !== imgSrc);
    localStorage.setItem(SAVED_ITEMS_KEY, JSON.stringify(updatedItems));
    renderSavedItems();
  }

  renderSavedItems();
});
