document.addEventListener('DOMContentLoaded', function () {
    // Get the heart icon element
    const heartIcon = document.querySelector('.heart');

    // Attach click event listener to the heart icon
    heartIcon.addEventListener('click', () => {
        // Redirect to the 'save-for-later.html' page when the heart icon is clicked
        window.location.href = 'save-for-later.html';
    });

    // LIKE FEATURE

    // Get the like form element
    const likeForm = document.getElementById('like-form');

    // Attach submit event listener to the like form
    likeForm.addEventListener('submit', function (e) {
        // Prevent the default form submission behavior
        e.preventDefault();

        // Show an alert when the like form is submitted
        alert('Article liked!');
    });
});