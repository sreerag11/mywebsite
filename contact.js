document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Example code to handle form submission (replace with your logic)
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Subject: " + subject);
    console.log("Message: " + message);
  });