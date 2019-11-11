import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import store from "../store.js";
import "firebase/functions";
import "@firebase/messaging";

const POSTS = "posts";
const PORTFOLIOS = "portfolios";
const USERAUTH = "userauth";
const BACKGROUNDIMG = "background";
const COMMENTS = "comments";
const LIKE = "like";

// Setup Firebase
const config = {
  projectId: "halhalnolnol-9b318",
  authDomain: "halhalnolnol-9b318.firebaseapp.com",
  apiKey: "AIzaSyAzGXg4iu-1spk8IoCm-EwpqJYsNGemOFk",
  databaseURL: "https://halhalnolnol-9b318.firebaseio.com",
  storageBucket: "halhalnolnol-9b318.appspot.com",
  messagingSenderId: "121250140856"
};

firebase.initializeApp(config);
const firestore = firebase.firestore();
const logincheck = firebase.functions().httpsCallable("logincheck");
const logoutcheck = firebase.functions().httpsCallable("logoutcheck");

var deviceToken = "";
const messaging = firebase.messaging();
messaging.usePublicVapidKey("BOWWayUfWK5q_KCDYkpd1sbnzejtXf6vg49tzL_MHO1AEQJ8WGYFje5HYfHCAGHSlfsCP1ciYp_1vQcxQJrm8Z8");

function getDeviceToken(email) {
  messaging.requestPermission()
   .then(function(){
     return messaging.getToken();
   })
   .then(function(token){
     deviceToken=token;
     modifyToken(email);
   })
   .catch(function(err){
     console.log(err);
  })
}

//offline check
firebase
  .firestore()
  .enablePersistence()
  .catch(function(err) {
    if (err.code == "failed-precondition") {
      console.log(err);
    } else if (err.code == "unimplemented") {
      console.log(err);
    }
  });

function chkDup(email) {
  return firestore
    .collection(USERAUTH)
    .doc(email)
    .get()
    .then(doc => {
      if (doc.exists) {
        return true;
      } else {
        return false;
      }
    });
}

function modifyToken(email) {
  return firestore.collection(USERAUTH).doc(email).update({
    deviceToken: deviceToken
  })
}

function modifyUserAuth(email, auth) {
  return firestore.collection(USERAUTH).doc(email).update({
    auth: auth
  })
}

function setAuthorization(email, auth, deviceToken, userName) {
  return firestore
    .collection(USERAUTH)
    .doc(email)
    .set({
      email,
      auth,
      deviceToken,
      userName,
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    });
}

function getAllUserAuth() {
  const userauthCollection = firestore.collection(USERAUTH);
  return userauthCollection
    .orderBy("created_at", "desc")
    .get()
    .then(docSnapshots => {
      return docSnapshots.docs.map(doc => {
        let data = doc.data();
        data.created_at = new Date(data.created_at.toDate());
        return data;
      });
    });
}

async function getUserAuth(email) {
  var users = await getAllUserAuth();
  var auth = "";
  for (var i = 0; i < users.length; i++) {
    if (users[i].email == email) {
      auth = users[i].auth;
    }
  }
  store.state.userauth = auth;
}

async function getUserName(email) {
  var users = await getAllUserAuth();
  var userName = "";
  for (var i = 0; i < users.length; i++) {
    if (users[i].email == email) {
      userName = users[i].userName;
    }
  }
  store.state.user.displayName = userName;
}

export default {
  getBackground() {
    const postsCollection = firestore.collection(BACKGROUNDIMG);
    return postsCollection
      .orderBy("created_at", "desc")
      .get()
      .then(docSnapshots => {
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          return data;
        });
      });
  },
  postBackground(img) {
    return firestore.collection(BACKGROUNDIMG).add({
      img,
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    });
  },
  getPosts() {
    return firestore
      .collection(POSTS)
      .orderBy("created_at", "desc")
      .get()
      .then(docSnapshots => {
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          data.id = doc.id;
          data.created_at = new Date(data.created_at.toDate());
          return data;
        });
      });
  },
  async getPostByIndex(id) {
    const postsCollection = await firestore.collection(POSTS).doc(id);
    return postsCollection.get().then(docSnapshots => {
      let data = docSnapshots.data();
      data.id = docSnapshots.id;
      return data;
    });
  },
  postPost(title, body, userId) {
    return firestore.collection(POSTS).add({
      title,
      body,
      userId,
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    });
  },
  editPost(title, body, id) {
    return firestore
      .collection(POSTS)
      .doc(id)
      .update({
        title,
        body
      });
  },
  deletePost(id) {
    return firestore
      .collection(POSTS)
      .doc(id)
      .delete();
  },
  getPortfolios() {
    const postsCollection = firestore.collection(PORTFOLIOS);
    return postsCollection
      .orderBy("created_at", "desc")
      .get()
      .then(docSnapshots => {
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          data.id = doc.id;
          return data;
        });
      });
  },
  getPortfoliosByIndex(id) {
    const postsCollection = firestore.collection(PORTFOLIOS).doc(id);
    return postsCollection.get().then(docSnapshots => {
      let data = docSnapshots.data();
      data.id = docSnapshots.id;
      return data;
    });
  },
  postPortfolio(title, body, img, uk, language, complete, people, userId) {
    return firestore.collection(PORTFOLIOS).add({
      title,
      body,
      img,
      uk,
      language,
      complete,
      people,
      userId,
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    });
  },
  editPortfolio(title, body, language, complete, people, id) {
    return firestore
      .collection(PORTFOLIOS)
      .doc(id)
      .update({
        title,
        body,
        language,
        complete,
        people
      });
  },
  deletePortfolio(id) {
    return firestore
      .collection(PORTFOLIOS)
      .doc(id)
      .delete();
  },

  //comments
  comments(portid, fk, text, writer, replynum, good, bad) {
    firestore.collection(COMMENTS).add({
      portid,
      fk,
      text,
      writer,
      replynum,
      good,
      bad,
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    });
  },

  getcommentsByIndex() {
    const commentsCollection = firestore.collection(COMMENTS);
    return commentsCollection
      .orderBy("created_at", "desc")
      .get()
      .then(docSnapshots => {
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          data.id = doc.id;
          data.created_at = new Date(data.created_at.toDate());
          return data;
        });
      });
  },
  delcomment(id){
    firestore
      .collection(COMMENTS)
      .doc(id)
      .delete();
  },
  setcomment(id, retext){
    firestore
      .collection(COMMENTS)
      .doc(id)
      .update({
        text: retext,
        created_at: firebase.firestore.FieldValue.serverTimestamp()
      });
  },
  setcount(portid, num){
    firestore
      .collection(COMMENTS)
      .doc(portid)
      .update({
        replynum: num
      });
  },
 // 좋아요
  likegood(comment, userid){
    firestore
      .collection(LIKE)
      .doc(comment + userid)
      .set({
        comment,
        userid,
        good: 1,
        bad: 0
      });
  },
  likebad(comment, userid){
    firestore
      .collection(LIKE)
      .doc(comment + userid)
      .set({
        comment,
        userid,
        good: 0,
        bad: 1
      });
  },
  likecheck(comment, userid, good, bad){
    return firestore
      .collection(LIKE)
      .doc(comment + userid)
      .update({
        good: good,
        bad: bad
      })
      .then(() => {
        return 1;
      })
      .catch(()=> {
        return 0;
      });
  },
  check(comment, userid){
    return firestore
      .collection(LIKE)
      .doc(comment + userid)
      .update({
        comment: comment
      })
      .then(() => {
        return 1;
      })
      .catch(()=> {
        return 0;
      });
  },
  getlike() {
    const likeCollection = firestore.collection(LIKE);
    return likeCollection
    .get()
    .then(docSnapshots => {
      return docSnapshots.docs.map(doc => {
        let data = doc.data();
        data.id = doc.id;
        return data;
      });
    });
  },
  goodcheck(comment, userid){
    return firestore
      .collection(LIKE)
      .doc(comment + userid)
      .get()
      .then(r=> {
        return r.data().good;
      });
  },
  badcheck(comment, userid){
    return firestore
      .collection(LIKE)
      .doc(comment + userid)
      .get()
      .then(r=> {
        return r.data().bad;
      });
  },
  setlike(id, good, bad){
    firestore
      .collection(COMMENTS)
      .doc(id)
      .update({
        good: good,
        bad: bad
      });
  },
	getAuthorization() {
		const userauthCollection = firestore.collection(USERAUTH)
		return userauthCollection
			.orderBy('created_at', 'desc')
			.get()
			.then((docSnapshots) => {
				return docSnapshots.docs.map((doc) => {
					let data = doc.data()
					data.created_at = new Date(data.created_at.toDate())
					return data
				})
			})
	},
  modifyAuthorization(email, auth) {
    return firestore
      .collection(USERAUTH)
      .doc(email)
      .update({
        email,
        auth
      });
  },
	loginWithGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider();
		return firebase.auth().signInWithPopup(provider).then(function(result) {
			let accessToken = result.credential.accessToken
			let user = result.user
      getDeviceToken(user.email);
      swal ( "Login" ,  "로그인 되었습니다." ,  "success" )
      chkDup(user.email).then(res => {
        if(res == false) {
          setAuthorization(user.email, '방문자', deviceToken, user.displayName);
          getUserName(user.email);
        }
      }) .catch(err => {
        console.log(err);
      });
			logincheck({})
			return result
		}).catch(function(error) {
			console.error('[Google Login Error]', error)
		})
	},
	loginWithFacebook() {
		let provider = new firebase.auth.FacebookAuthProvider();
		return firebase.auth().signInWithPopup(provider).then(function(result) {
			let accessToken = result.credential.accessToken
			let user = result.user;
      getDeviceToken(user.email);
      swal ( "Login" ,  "로그인 되었습니다." ,  "success" )
      chkDup(user.email).then(res => {
        if(res == false) {
          setAuthorization(user.email, '방문자', deviceToken, user.displayName);
          getUserName(user.email);
        }
      }) .catch(err => {
        console.log(err);
      });
			return result
		}).catch(function(error) {
			console.error('[Facebook Login Error]', error)
		})
	},
	Logout() {
		firebase.auth().signOut().then(function() {
      store.state.userauth = ''
      swal ( "Logout" ,  "로그아웃 되었습니다." ,  "success" )
		}).catch(function(error) {
  		swal ( "Fail" ,  "로그아웃이 실패하였습니다." ,  "error" )
		});
		logoutcheck({})
	},
	signUp(email, password, userName) {
		firebase.auth().createUserWithEmailAndPassword(email, password).then(
			function(user) {
        swal ( "Welcome" ,  "회원가입을 축하합니다." ,  "success" )
        chkDup(email).then(res => {
          if(res == false) {
            getDeviceToken(email);
            setAuthorization(email, '방문자', deviceToken, userName);
            getUserName(email);
          }
        }) .catch(err => {
          console.log(err);
        });
			},
			function(err) {
        swal ( "Error" ,  "error, " + err.message ,  "error" )
			}
		);
	},

	signIn(email, password) {
		return firebase.auth().signInWithEmailAndPassword(email, password).then(
			function(user) {
        swal ( "Login" ,  "로그인 되었습니다." ,  "success" )
        getDeviceToken(email);
				return user
			},
			function(err) {
				store.state.accessToken = '';
				swal ( "Error" ,  "error, " + err.message ,  "error" )
			}
		);
	},
	loginPersistence() {
			firebase.auth().onAuthStateChanged(function(user) {
			  if (user) {
			    store.state.user = user;
					store.state.accessToken = user.email;
          getUserName(user.email);
          getUserAuth(user.email);
			  }
			});
	},
  userDelete() {
    var user = firebase.auth().currentUser;

    user.delete().then(function() {
      swal ( "Delete account," , user.email + "님 정상적으로 탈퇴되었습니다" ,  "info" )
      modifyUserAuth(email, "방문자")
    }).catch(function(error) {
      console.log(error)
    });
  }
}
