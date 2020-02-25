const studentList = document.getElementById('student-list');
const emailElement = document.getElementById('email');
const passwordElement = document.getElementById('password');

// create element & render cafe
function renderStudent(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let age = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    age.textContent = doc.data().age;

    li.appendChild(name);
    li.appendChild(age);

    studentList.appendChild(li);
}

function login() {
    alert()
}

// getting data
db.collection('students').get().then(snapshot => {
    console.log(snapshot)
    snapshot.docs.forEach(doc => {
        renderStudent(doc);
    });
});
