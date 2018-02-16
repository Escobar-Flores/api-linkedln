// Cerrar sesión
const btnLogOut = document.getElementById('btnLogOut');
btnLogOut.addEventListener('click', closeSession);

function closeSession() {
  if (typeof IN === 'object' && typeof IN.User === 'object' && IN.User.isAuthorized()) {
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
let containerCard = document.getElementById('containerCard');

containerCard.innerHTML = `
<div class="text-center">
  <img src="${localStorage.pictureUrl}" class="img-fluid rounded-circle img-thumbnail" alt="Responsive image">
</div>          
<h3 class="text-center">${localStorage.firstName} ${localStorage.lastName}</h3>
<p class="lead text-center">${localStorage.headline}</p>
<hr class="my-4">
<p class="text-center">Esta es una introducción a tu perfil. Dale click al siguiente botón para ir a tu perfil completo en www.linkedin.com</p>
<p class="lead text-center">
  <a class="btn btn-light btn-lg" href="${localStorage.siteStandardProfileRequest}" target="_blank" role="button">Read more <i class="fab fa-linkedin fa-2x text-primary"></i></a>
</p>
`;