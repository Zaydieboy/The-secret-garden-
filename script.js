// Script for form submission
document.getElementById('quoteForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const number = document.getElementById('number').value;
  const email = document.getElementById('email').value;
  const product = document.getElementById('product').value;
  const quantity = document.getElementById('quantity').value;
  const address = document.getElementById('address').value;

  alert(`Thank you, ${name}! We will contact you soon regarding your order for ${quantity} grams of ${product}.`);
});