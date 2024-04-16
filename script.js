// Function to show the popup
function showPopup() {
    document.getElementById('popup-container').style.display = 'block';
  }
  
  // Function to close the popup
  function closePopup() {
    document.getElementById('popup-container').style.display = 'none';
  }
  
  // Function to handle subscription
  function subscribe() {
    // Add your subscription logic here
    alert('Thank you for subscribing!');
    closePopup();
  }
  
  // Show the popup after the page loads (you can trigger this function based on specific conditions)
  window.onload = function() {
    showPopup();
  };
  