document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const foodChosen = document.getElementById('food').value;

    // Validate form inputs
    if (!name || !email || !address || !foodChosen) {
        alert('Please fill in all fields and select a food item.');
        return;
    }

    // Confirmation message
    alert(`Thank you, ${name}! Your order for ${foodChosen} has been placed. We will deliver it to ${address}. A confirmation email will be sent to ${email}.`);

    // Optionally, reset the form
    document.getElementById('orderForm').reset();
});
