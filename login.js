document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Example validation (replace with your authentication logic)
    if (username === "user" && password === "password") {
      alert("Login successful!");
      window.location.href="index.html";
    } else {
      alert("Invalid username or password.");
    }
  });

function goToCreateAccount() {
    window.location.href = "create_account.html";
  }