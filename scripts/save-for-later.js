document.addEventListener('DOMContentLoaded', function() {
  // Get the saved items container element
  const savedItemsContainer = document.getElementById('saved-items');

  // Function to render saved items on the "Save for Later" page
  function renderSavedItems() {
    // Get the saved items from localStorage or initialize an empty array
    const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

    // Clear the existing content of the saved items container
    savedItemsContainer.innerHTML = '';

    // Iterate over each saved item
    savedItems.forEach(imgSrc => {
      // Create a new div element for the image container
      const imgContainer = document.createElement('div');
      // Add the 'image-container' class to the image container element
      imgContainer.classList.add('image-container');

      // Create a new img element for the saved image
      const imgElement = document.createElement('img');
      // Set the source URL of the image element
      imgElement.src = imgSrc;

      // Create a new span element for the delete button
      const deleteButton = document.createElement('span');
      // Add the 'delete-button' class to the delete button element
      deleteButton.classList.add('delete-button');
      // Set the text content of the delete button to '×'
      deleteButton.textContent = '×';
      // Attach click event listener to the delete button
      deleteButton.addEventListener('click', function() {
        // Call the deleteImage function with the image source URL when clicked
        deleteImage(imgSrc);
      });

      // Append the image element and delete button to the image container
      imgContainer.appendChild(imgElement);
      imgContainer.appendChild(deleteButton);
      // Append the image container to the saved items container
      savedItemsContainer.appendChild(imgContainer);
    });
  }

  // Function to delete an image from the HTML page and localStorage
  function deleteImage(imgSrc) {
    // Get the saved items from localStorage or initialize an empty array
    const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    // Filter out the image to be deleted from the savedItems array
    const updatedItems = savedItems.filter(item => item !== imgSrc);
    // Store the updated savedItems array back in localStorage
    localStorage.setItem('savedItems', JSON.stringify(updatedItems));
    // Re-render the saved items on the page
    renderSavedItems();
  }

  // Call the renderSavedItems function to display the saved items on page load
  renderSavedItems();
});