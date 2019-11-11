importScripts("https://www.gstatic.com/firebasejs/4.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.2.0/firebase-messaging.js");


const firebase = require('firebase-functions');
var firebaseConfig = {
   apiKey: "AIzaSyAzGXg4iu-1spk8IoCm-EwpqJYsNGemOFk",
   authDomain: "halhalnolnol-9b318.firebaseapp.com",
   databaseURL: "https://halhalnolnol-9b318.firebaseio.com",
   projectId: "halhalnolnol-9b318",
   storageBucket: "halhalnolnol-9b318.appspot.com",
   messagingSenderId: "121250140856",
   appId: "1:121250140856:web:f4c1774b2136c433"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
   console.log('[firebase-messaging-sw.js] Received background message ', payload);
   // Customize notification here
   var notificationTitle = 'Background Message Title';
   var notificationOptions = {
       body: 'Background Message body.',
       icon: '/firebase-logo.png'
   };

   return self.registration.showNotification(notificationTitle,
       notificationOptions);
});
