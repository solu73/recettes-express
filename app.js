let currentUser = null;
let recipes = [];
let selectedIngredients = [];

// éléments HTML
const loginUser = document.getElementById("loginUser");
const loginPass = document.getElementById("loginPass");
const loginMsg = document.getElementById("loginMsg");
const loginScreen = document.getElementById("login-screen");
const app = document.getElementById("app");
const recipesDiv = document.getElementById("recipes");
const shoppingList = document.getElementById("shoppingList");
const manualItem = document.getElementById("manualItem");
const veg = document.getElementById("veg");
const nofour = document.getElementById("nofour");

// sécurité simple
function hash(txt) {
  return btoa(txt);
}

// création du compte
function register() {
  if (!loginUser.value || !loginPass.value) {
    loginMsg.textContent = "Remplis les champs";
    return;
  }
  localStorage.setItem("user_" + loginUser.value, hash(loginPass.value));
  loginMsg.textContent = "Compte créé ✅";
}

// connexion
function login() {
  const stored = localStorage.getItem("user_" + loginUser.value);
  if (stored === hash(loginPass.value)) {
    currentUser = loginUser.value;
    loginScreen.classList.add("hidden");
    app.classList.remove("hidden");
    loginMsg.textContent = "";
  } else {
    loginMsg.textContent = "Identifiants incorrects ❌";
  }
}

function logout() {
  location.reload();
}

// liste de courses
function addManualItem() {
  if (!manualItem.value) return;
  const li = document.createElement("li");
  li.textContent = manualItem.value;
  shoppingList.appendChild(li);
  manualItem.value = "";
}