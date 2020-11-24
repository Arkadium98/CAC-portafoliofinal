const db = firebase.firestore();
const projectsContainer = document.getElementById("projectsContainer");
const getTasks = () => db.collection("tasks").get();

const onGetTasks = (callback) => db.collection("tasks").onSnapshot(callback);

const getTask = (id) => db.collection("tasks").doc(id).get();

window.addEventListener("DOMContentLoaded", async (e) => {
  onGetTasks((querySnapshot) => {
    projectsContainer.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      task.id = doc.id;
      if (!task.fileurl) {
        task.fileurl =
          "https://firebasestorage.googleapis.com/v0/b/carlos-arias.appspot.com/o/placeholder.png?alt=media&token=e79db9ff-5645-4346-84f8-98e73988f4d6";
      }
      projectsContainer.innerHTML += `
            <div class="card card-body mt-2 ${task.category} proyecto" style="background-color: rgb(32, 32, 36);color:white;">
                 <img class="img-fluid" src="${task.fileurl}"/>
                <h3 class="h2 text-center pt-2" style="text-align:center;">${task.title}</h3>
                <p>${task.description}</p>
                
            </div>
        `;
    });
  });
});
