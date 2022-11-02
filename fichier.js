import { getDatabase, ref, set, child, get } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js';

function writeContactData(name, telephone,  message) {
  const db = getDatabase();
  set(ref(db, 'fichier/' + name), {
    name,
    telephone,
    message,
  });
}

var form = document.getElementById('formulaire');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  var name = form['fname'].value;
  var telephone = form['tel'].value;
  var message = form['message'].value;
  writeContactData(name, telephone, message);
});
