document.addEventListener('DOMContentLoaded', function () {
    // Get the contact form element
    const contactForm = document.querySelector('.form');

    // Attach submit event listener to the contact form
    contactForm.addEventListener('submit', function (e) {
        // Prevent the default form submission behavior
        e.preventDefault();

        // Get the values of the form fields
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const gender = document.getElementById('gender').value;
        const age = document.getElementById('age').value;
        // Get the selected value of the affected body part radio buttons
        const affectedPart = document.querySelector('input[name="affected-part"]:checked');
        const ailment = document.getElementById('ailment').value;

        // Create an object to store the form data
        const formData = {
            name: name,
            surname: surname,
            gender: gender,
            age: age,
            // Set the affectedPart property based on the selected radio button value, or an empty string if no radio button is selected
            affectedPart: affectedPart ? affectedPart.value : '',
            ailment: ailment
        };

        // Log the form data object to the console for debugging or further processing
        console.log('Form submitted:', formData);

        // Reset the contact form fields to their default values after submission
        contactForm.reset();
    });
});