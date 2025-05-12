import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const auth = getAuth();
const provider = new GoogleAuthProvider();

// document
//   .getElementById("google-sign-in")
//   .addEventListener("click", function () {
//     authenticateUser("google");
//   });

document.getElementById("google-sign-in").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      document.getElementById("auth-container").style.display = "none";
      document.getElementById("resume-container").style.display = "block";
    })
    .catch((error) => {
      console.error("Error signing in:", error);
    });
});

import { GithubAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const githubProvider = new GithubAuthProvider();

document.getElementById("github-sign-in").addEventListener("click", () => {
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      document.getElementById("auth-container").style.display = "none";
      document.getElementById("resume-container").style.display = "block";
    })
    .catch((error) => {
      console.error("Error signing in:", error);
    });
});

// document.getElementById("apple-sign-in").addEventListener("click", function () {
//   authenticateUser("apple");
// });

import { OAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const appleProvider = new OAuthProvider("apple.com");

document.getElementById("apple-sign-in").addEventListener("click", () => {
  signInWithPopup(auth, appleProvider)
    .then((result) => {
      document.getElementById("auth-container").style.display = "none";
      document.getElementById("resume-container").style.display = "block";
    })
    .catch((error) => {
      console.error("Error signing in:", error);
    });
});

document
  .getElementById("microsoft-sign-in")
  .addEventListener("click", function () {
    authenticateUser("microsoft");
  });

function authenticateUser(provider) {
  alert(`Authenticated with ${provider}`);
  document.getElementById("auth-container").style.display = "none";
  document.getElementById("resume-container").style.display = "block";
}
