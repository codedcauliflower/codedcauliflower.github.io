document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the class 'lord-icon'
    const saveButtons = document.querySelectorAll('.lord-icon');

    // Attach click event listener to each save button
    saveButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Get the closest ancestor element with the class 'card'
            const cardElement = btn.closest('.card');
            if (cardElement) {
                // Find the image element with the class 'card__img' within the card element
                const imgElement = cardElement.querySelector('img.card__img');
                if (imgElement) {
                    // Get the source URL of the image
                    const imgSrc = imgElement.src;
                    // Save the image source to localStorage
                    saveItem(imgSrc);
                    // Show an alert with the count of saved items
                    showAlert(`You have ${getSavedItemsCount()} item(s) saved for later.`);
                }
            }
        });
    });

    // Function to show an alert with a message
    function showAlert(message) {
        alert(message);
    }

    // Function to save an item to localStorage
    function saveItem(item) {
        // Get the existing saved items from localStorage or initialize an empty array
        let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
        // Add the new item to the savedItems array
        savedItems.push(item);
        // Store the updated savedItems array back in localStorage
        localStorage.setItem('savedItems', JSON.stringify(savedItems));
    }

    // Function to get the count of saved items
    function getSavedItemsCount() {
        // Get the saved items from localStorage or initialize an empty array
        const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
        // Return the length of the savedItems array
        return savedItems.length;
    }

    // COMMENT FEATURE

    // Get the comment form element
    const commentForm = document.getElementById('comment-form');
    // Get the comments section element
    const commentsSection = document.querySelector('.comments');

    // Attach submit event listener to the comment form
    commentForm.addEventListener('submit', function (e) {
        // Prevent the default form submission behavior
        e.preventDefault();

        // Get the values of the name and comment input fields
        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;

        // Create a new div element for the comment card
        const commentCard = document.createElement('div');
        // Add the 'comment-card' class to the comment card element
        commentCard.classList.add('comment-card');

        // Create the HTML content for the comment card
        const cardContent = `
        <div class="comment-card__header">
          <h3 class="comment-card__name">${name}</h3>
        </div>
        <div class="comment-card__body">
          <p class="comment-card__text">${comment}</p>
        </div>
      `;

        // Set the HTML content of the comment card element
        commentCard.innerHTML = cardContent;

        // Append the comment card element to the comments section
        commentsSection.appendChild(commentCard);

        // Reset the comment form fields
        commentForm.reset();
    });
});