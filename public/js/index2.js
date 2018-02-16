'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// Cerrar sesión
var btnLogOut = document.getElementById('btnLogOut');
btnLogOut.addEventListener('click', closeSession);

function closeSession() {
  if ((typeof IN === 'undefined' ? 'undefined' : _typeof(IN)) === 'object' && _typeof(IN.User) === 'object' && IN.User.isAuthorized()) {
    // user logged in linkedin
    // call linkedin logout with websites logout function as callback
    alert('I m inside linkedin object check..'); // do you see this
    IN.User.logout(logout);
  } else {
    logout();
  }
};

function logout() {
  window.location.href = '../../';
};

// Imprimir card con datos del usuario logeado
var containerCard = document.getElementById('containerCard');

containerCard.innerHTML = '\n<div class="text-center">\n  <img src="' + localStorage.pictureUrl + '" class="img-fluid rounded-circle img-thumbnail" alt="Responsive image">\n</div>          \n<h3 class="text-center">' + localStorage.firstName + ' ' + localStorage.lastName + '</h3>\n<p class="lead text-center">' + localStorage.headline + '</p>\n<hr class="my-4">\n<p class="text-center">Esta es una introducci\xF3n a tu perfil. Dale click al siguiente bot\xF3n para ir a tu perfil completo en www.linkedin.com</p>\n<p class="lead text-center">\n  <a class="btn btn-light btn-lg" href="' + localStorage.siteStandardProfileRequest + '" target="_blank" role="button">Read more <i class="fab fa-linkedin fa-2x text-primary"></i></a>\n</p>\n';