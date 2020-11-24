function registrar() {
  var email = document.getElementById("regemail").value;
  var pass = document.getElementById("regpass").value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, pass)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      // ...
    });
}

function ingresar() {
  var email2 = document.getElementById("loginemail").value;
  var pass2 = document.getElementById("loginpass").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email2, pass2)
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      location.reload();
      return false;
    });
}

function observador() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user.email !== "carlosac2198@gmail.com") {
      users();
    }
    if (user.email === "carlosac2198@gmail.com") {
      admin();
    }
  });
}
observador();

function admin() {
  var btn = document.getElementById("admin");
  btn.innerHTML = `
  <div id="menuser">
  </br><h4 class="text-center">Menú de administrador</h4>
  <a href="crud.html" class="btn btn-primary">Ir al CRUD</a></br>
  <button class="btn btn-danger" onclick="logout()">Cerrar Sesión</button>
  </div>`;
}

function users() {
  var btn = document.getElementById("user");
  btn.innerHTML = `
  <div id="menuser">
  <h4 class="text-center">Menú de usuario</h4>
  <a href="../index.html" class="btn btn-primary">Ir a la página principal</a></br>
  <button class="btn btn-danger" onclick="logout()">Cerrar Sesión</button>
  </div>`;
  var registro = document.getElementById("registro");
  registro.innerHTML = ``;
}

function logout() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      console.log("saliendo");
    })
    .catch(function (error) {
      console.log("error");
    });

  location.reload();
  return false;
}
