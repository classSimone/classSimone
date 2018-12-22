

// Initialize Firebase
var config = {
	apiKey: "AIzaSyADTi1iuG6a1KqMOq2p4yorKqIhzuTPCeE",
	authDomain: "aiasassari-72ag5.firebaseapp.com",
	databaseURL: "https://aiasassari-72ag5.firebaseio.com",
	projectId: "aiasassari-72ag5",
	storageBucket: "aiasassari-72ag5.appspot.com",
	messagingSenderId: "239683472798"
};
firebase.initializeApp(config);
  
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
timestampsInSnapshots: true
});

const section2 = document.querySelector('#section2');

db.collection("news").limit(3).get()
.then((querySnapshot) => {
	querySnapshot.forEach((doc) => {
		console.log(`${doc.id} => ${doc.data().titolo}`);
		const div = document.createElement('div');
		// div.id='box-'+i;
		const pic = document.createElement('img');
		pic.src=doc.data().pic;
		const title = document.createElement('h3');
		title.innerText=doc.data().titolo;
		const content = document.createElement('p');
		content.innerText=doc.data().corpo.substring(0,700);

		div.appendChild(pic);
		div.appendChild(title);
		div.appendChild(content);
		section2.appendChild(div);
    });
})
.catch(function(error) {
    console.log("Error getting document:", error);
});



const newsref = db.collection("news");
newsref.orderBy('id', 'desc').limit(2);

const filteredNews = newsref.orderBy('id', 'desc').limit(2);
filteredNews.get()
.then((snap)=>{

})


