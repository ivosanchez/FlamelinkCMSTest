
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAC-j2nR9tGDYkNXbWoD-uI0UUNK_69JEs",
  authDomain: "flamelink-cms-6e444.firebaseapp.com",
  databaseURL: "https://flamelink-cms-6e444.firebaseio.com",
  projectId: "flamelink-cms-6e444",
  storageBucket: "flamelink-cms-6e444.appspot.com",
  messagingSenderId: "826480774307",
  appId: "1:826480774307:web:e716d698ddcac596384316"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const app = flamelink({
  firebaseApp,
  env: 'production', // optional, defaults to `production`
  locale: 'en-US', // optional, defaults to `en-US`
  dbType: 'cf' // optional, defaults to `rtdb` - can be 'rtdb' or 'cf' (Realtime DB vs Cloud Firestore)
})

// Realtime updates
app.content.subscribe({
  schemaKey: 'secondPage',
  populate: true,
  callback(error, secondPage) {
    if (error) {
      return console.error(error)
    }
    console.log({ secondPage });
    document.getElementById("cms_rt_input").innerHTML = secondPage.field_1568288228234;
    document.getElementById('cms_image').src = secondPage.field_1568209624708[0].url;
  }
})

// Alternatively, once-off
// app.content.get({
//   schemaKey: 'secondPage',
//   populate: true
// })
//   .then(secondPage => {
//     console.log({ secondPage });
//     document.getElementById("cms_rt_input").innerHTML = secondPage.field_1568288228234;
//     document.getElementById('cms_image').src = secondPage.field_1568209624708[0].url;
//   })
//   .catch(console.error)
