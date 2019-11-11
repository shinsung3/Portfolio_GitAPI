const functions = require('firebase-functions');
const sanitizer = require('./sanitizer');
const admin = require('firebase-admin');
admin.initializeApp();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("테스트용 확인");
// });


exports.logincheck = functions.https.onCall((data, context) => {

const email = context.auth.token.email || null;
const uid = context.auth.uid;
  console.log(email+"로그인")
  return {email};
});

exports.logoutcheck = functions.https.onCall((data, context) => {

const email = context.auth.token.email || null;
const uid = context.auth.uid;
  console.log(email+"로그아웃")
  return {email};
});
