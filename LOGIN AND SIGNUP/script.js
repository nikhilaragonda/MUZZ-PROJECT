// Simulated user session
let isLoggedIn = false;

// Utility function to navigate to a new page
function navigateTo(page) {
  window.location.href = page;
}

// Login function
function login(event) {
  event.preventDefault(); // Prevent form submission
  isLoggedIn = true;
  alert("Successfully signed in!");
  localStorage.setItem("isLoggedIn", true); // Store session
  navigateTo("index.html"); // Navigate to home
}

// Signup function
function signup(event) {
  event.preventDefault(); // Prevent form submission
  alert("Signup successful! Please login.");
  navigateTo("login.html"); // Navigate to login page
}

// Logout function
function logout() {
  isLoggedIn = false;
  localStorage.removeItem("isLoggedIn"); // Clear session
  alert("Successfully logged out!");
  window.location.reload();
}

// Check login state on home page
if (window.location.pathname.endsWith("index.html")) {
  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const userGreeting = document.getElementById("userGreeting");

  if (localStorage.getItem("isLoggedIn") === "true") {
    loginBtn.style.display = "none";
    signupBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
    userGreeting.textContent = "Hello, User!";
  } else {
    loginBtn.style.display = "inline-block";
    signupBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
    userGreeting.textContent = "";
  }
}
