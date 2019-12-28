var config = {
  apiKey: "AIzaSyBibYbSU--GmOM8gy5_AAUSfR4UEll2GN0",
  authDomain: "newyear2020-be006.firebaseapp.com",
  databaseURL: "https://newyear2020-be006.firebaseio.com",
  projectId: "newyear2020-be006",
  storageBucket: "newyear2020-be006.appspot.com",
  messagingSenderId: "673055237812",
  appId: "1:673055237812:web:e32c542ca718b661b819e1"
};
firebase.initializeApp(config);

var database = firebase.database();

// send data
function saveToFirebase(event) {    
  document.getElementById('number').innerHTML = getRandomInt(1, 5);
  const myurl_string = window.location.href;
  const myurl = new URL(myurl_string);
  const name = myurl.searchParams.get('name');
  const phone = myurl.searchParams.get('phone');
  const number = $('#number').text();
  const msgId =  Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

  if (name.length > 0) {
      writeMessageData(msgId, name, phone, number);
  }
  console.log('msgId: ' + msgId);
  return false;
};

function writeMessageData(msgId, name, phone, number) {
  firebase.database().ref('messages/' + msgId).set({
    name: name,
    phone: phone,
    number: number
  });
};

// get data
function getMessages(event) {

    document.getElementById('resultMessages').innerHTML = '<table id="resultTable">';

    var table = document.getElementById("resultTable");

    var header = table.createTHead();
    var row = header.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = "id";
    cell2.innerHTML = "Ім'я";
    cell3.innerHTML = "Телефон";
    cell4.innerHTML = "Подарунок";

    var i = 0;
    var body = table.createTBody();

    var usersRef = firebase.database().ref('messages/');
    usersRef.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var row = body.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);

            cell1.innerHTML = childSnapshot.key;
            childSnapshot.forEach(function(childValue) {
                var childKey = childValue.key;
                var childData = childValue.val();

                switch (childKey) {
                    case 'name':
                        cell2.innerHTML = childData;
                        break;
                    case 'phone':
                        cell3.innerHTML = childData;
                        break;
                    case 'number':
                        cell4.innerHTML = childData;
                        break;
                    default:
                        break;
                }
            });
            i = i + 1;
        });
    });
};