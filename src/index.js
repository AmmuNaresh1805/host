import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBnRxzsAu_HKn10JTtefjcFZMF9lsBZZbc",
  authDomain: "nm--data.firebaseapp.com",
  projectId: "nm--data",
  storageBucket: "nm--data.appspot.com",
  messagingSenderId: "143679258689",
  appId: "1:143679258689:web:4a2a2f8ddc836087d846c0",
};

//________________________________________Initialize Firebase-Project______________________________________//

initializeApp(firebaseConfig);

//__________________________________________Initialize Firestore___________________________________________//

const db = getFirestore();

//______________________________________________References_________________________________________________//

var regno = document.getElementById("income");
var form = document.getElementsByClassName("reg");
var label = document.getElementById("usr");
var age = document.getElementById("age");
var gender = document.getElementById("gender");
var status = document.getElementById("stus");
var result = document.getElementById("srh-btn");
var out = document.getElementsByClassName("outcome");
var msg = document.getElementById("err");

//______________________________________________Retrive-Function___________________________________________//

async function GetDocument() {
  var ref = doc(db, "RegisterNo", regno.value);
  const docSnap = await getDoc(ref);
  if (docSnap.exists()) {
    form[0].setAttribute("style", "display : none;");
    out[0].setAttribute("style", "display : block;");
    console.log(docSnap.data());
    label.innerHTML = docSnap.data().Name;
    age.innerHTML = docSnap.data().Age;
    status.innerHTML = docSnap.data().Status;
    gender.innerHTML = docSnap.data().Gender;
  } else {
    msg.innerHTML = "No Such Document";
    setTimeout(() => {
      msg.innerHTML = "";
    }, 500);
    regno.value = "";
  }
}
//______________________________________________Assign Btn Function___________________________________________//

result.addEventListener("click", GetDocument);
