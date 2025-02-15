import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHr4nBoFKqqgsA-tpvb0gY8uTWdRBQtkU",
  authDomain: "spotify-faed9.firebaseapp.com",
  projectId: "spotify-faed9",
  storageBucket: "spotify-faed9.firebasestorage.app",
  messagingSenderId: "654505870546",
  appId: "1:654505870546:web:b48ed4df80245c15add90b",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded");

  // Fetch user data from localStorage
  let userData = JSON.parse(localStorage.getItem("userData"));

  if (!userData) {
    console.log("No user data found.");
    alert("No user data found. Please log in again.");
    redirectToHome();
  } else if (userData.firstName === "Guest") {
    document.getElementById("userName").textContent = "Guest User";
  } else {
    document.getElementById("userName").textContent = `${userData.firstName} ${userData.lastName}`;
  }

  // Ensure the logout button exists in the DOM
  const logoutBtn = document.getElementById("logout-button");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      console.log("Logout button clicked");

      try {
        // Only sign out if the user is not a guest
        if (userData.firstName !== "Guest") {
          console.log("User is not a guest, signing out from Firebase...");
          await signOut(auth);
          console.log("Signed out from Firebase successfully.");
        }
        localStorage.removeItem("userData"); // Clear user data from localStorage
        console.log("User data removed from localStorage.");
        window.location.href = "./index.html"; // Redirect to the home page
      } catch (error) {
        console.error("Error logging out:", error.message);
        alert("Error logging out: " + error.message);
        window.location.href = "./index.html"; // Redirect to home if error occurs
      }
    });
  } else {
    console.error("Logout button not found in the DOM.");
  }
});

// Redirect user to home page
function redirectToHome() {
  console.log("Redirecting to home page...");

  signOut(auth)
    .then(() => {
      console.log("User signed out from Firebase.");
      localStorage.removeItem("userData"); // Clear user data from localStorage
      window.location.href = "./index.html"; // Redirect to home page
    })
    .catch((error) => {
      console.error("Error redirecting to home:", error.message);
    });
}
