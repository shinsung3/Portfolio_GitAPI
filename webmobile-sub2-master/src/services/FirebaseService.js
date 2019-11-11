import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import store from '../store.js'
import "firebase/functions";


const POSTS = "posts";
const PORTFOLIOS = "portfolios";
const BACKGROUNDIMG = "background";

// Setup Firebase
const config = {
	projectId: 'halhalnolnol-9b318',
	authDomain: 'halhalnolnol-9b318.firebaseapp.com',
	apiKey: 'AIzaSyAzGXg4iu-1spk8IoCm-EwpqJYsNGemOFk',
	databaseURL: 'https://halhalnolnol-9b318.firebaseio.com',
	storageBucket: 'halhalnolnol-9b318.appspot.com'
}

firebase.initializeApp(config)
const firestore = firebase.firestore()
const logincheck = firebase.functions().httpsCallable('logincheck');
const logoutcheck = firebase.functions().httpsCallable('logoutcheck');




export default {
	getBackground() {
		const postsCollection = firestore.collection(BACKGROUNDIMG);
		return postsCollection
			.orderBy("created_at", "desc")
			.get()
			.then(docSnapshots => {
				return docSnapshots.docs.map(doc => {
					let data = doc.data();
					data.created_at = new Date(data.created_at.toDate());
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
		const postsCollection = firestore.collection(POSTS)
		return postsCollection
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
	postPost(title, body) {
		return firestore.collection(POSTS).add({
			title,
			body,
			created_at: firebase.firestore.FieldValue.serverTimestamp()
		})
	},
	getPortfolios() {
		const postsCollection = firestore.collection(PORTFOLIOS)
		return postsCollection
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
	postPortfolio(title, body, img) {
		return firestore.collection(PORTFOLIOS).add({
			title,
			body,
			img,
			created_at: firebase.firestore.FieldValue.serverTimestamp()
		})
	},
	loginWithGoogle() {
		let provider = new firebase.auth.GoogleAuthProvider()
		return firebase.auth().signInWithPopup(provider).then(function(result) {
			let accessToken = result.credential.accessToken
			let user = result.user
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
			let user = result.user
			return result
		}).catch(function(error) {
			console.error('[Facebook Login Error]', error)
		})
	},
	Logout() {
		firebase.auth().signOut().then(function() {
			alert("로그아웃 되었습니다.")
		}).catch(function(error) {
  		alert("로그아웃 실패.")
		});
		logoutcheck({})
	},
	signUp(email, password) {
		firebase.auth().createUserWithEmailAndPassword(email, password).then(
			function(user) {
				alert("회원가입 축하합니다")
			},
			function(err) {
			 	alert("error, " + err.message);
			}
		);
	},
	signIn(email, password) {
		return firebase.auth().signInWithEmailAndPassword(email, password).then(
			function(user) {
				var splEmail = [];
				splEmail = email.split('@');
				store.state.accessToken = splEmail[0];

				return user
			},
			function(err) {
				store.state.accessToken = '';
				alert("error, " + err.message)
			}
		);
	},
	loginPersistence() {
			firebase.auth().onAuthStateChanged(function(user) {
			  if (user) {
			    store.state.user = user;
					store.state.accessToken = user.email;
			  } else {

			  }
			});
	}
}
