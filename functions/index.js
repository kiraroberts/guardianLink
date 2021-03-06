const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
response.send("Hello from Firebase!");
});

const createNotification = (notification) => {
  return admin.firestore().collection('notifications')
  .add(notification)
  .then(doc => console.log('notification added', doc))
}

exports.postCreated = functions.firestore
  .document('posts/{postId}')
  .onCreate(doc => {

    const post = doc.data();
    const notification = {
      content: ' added a new post',
      user: `${post.authorUserName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(notification);
});

// exports.userJoined = functions.auth.user()
//   .onCreate(user => {

//     return admin.firestore().collection('user')
//       .doc(user.uid).get().then(doc => {

//         const newUser = doc.data()
//         const notification = {
//           content: ' just registered',
//           user: `${newUser.userName}`,
//           time: admin.firestore.FieldValue.serverTimestamp()
//         }

//         return createNotification(notification);

//       });

// })

exports.userJoined = functions.firestore.document("users/{uid}")
  .onCreate(doc => {
    const user = doc.data();
    const notification = {
      content: " just registered",
      user: `${user.userName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };
    return createNotification(notification);
  });
