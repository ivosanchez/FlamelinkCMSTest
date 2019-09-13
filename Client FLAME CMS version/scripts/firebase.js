
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


// variables based on the newly created firebase db
const db = firebase.firestore();
const colRef = db.collection("fl_content");
const docRef = colRef.doc("lpv135zB8KRzaxuAtWY8");

const imgRef = db.collection("fl_files");
const imgdocRef = imgRef.doc("XWDCheRvcuB7xNcO4QGI");

// Get a reference to the storage service, which is used to create references in your storage bucket
// Create a storage reference from our storage service
var storage = firebase.storage();
var storageReference = storage.ref("flamelink/media/");


const app = flamelink({
  firebaseApp,
  env: 'production', // optional, defaults to `production`
  locale: 'en-US', // optional, defaults to `en-US`
  dbType: 'rtdb' // optional, defaults to `rtdb` - can be 'rtdb' or 'cf' (Realtime DB vs Cloud Firestore)
})


app.content.get({
  schemaKey: 'blogPosts',
  fields: ['title', 'description', 'image']
});






// REALTIME READ OF RECORDS FROM THE CMS DB 
docRef.onSnapshot(function(doc) {

  document.getElementById("cms_rt_input").innerHTML = doc.data().field_1568288228234;
  
  console.log(doc.data().field_1568209624708[0]);

  // /fl_files/XWDCheRvcuB7xNcO4QGI)
  
});



// QUESTION IS HOW TO ACCELERATE AND AUTOMATE THIS PROCESS? 
// OR HAVE THEM SEND YOU THE PROPER FLAMELINK SDK CDNs
// Need to return the storagereference for the picture 
getDBDocument_dynamicRetrieval();

// you could put an input parameter with document number of the schema 
// then this could function as a dynamic method 
// for now we take the schema SecondPage as there is an image defined in it 
function getDBDocument_dynamicRetrieval(){

  // check in the secondPage Content Schema 
  db.collection("fl_content").doc("lpv135zB8KRzaxuAtWY8").get().then(function(doc){

        if (doc.exists) {

          // retrieve the id of the file dynamically associated with the picture in CMS 
          // now you need to retrieve 
          const docID_getimg_name = doc.data().field_1568209624708[0].id;
          console.log("Document data:", doc.data().field_1568209624708[0].id);

          db.collection("fl_files").doc(docID_getimg_name).get().then(function(doc_flfiles){

            if (doc_flfiles.exists){

              const storID_getimg_file = doc_flfiles.data().file;
              console.log(doc_flfiles.data().file);

              // wat verblijft er op dit moment in de referentie 
              // logic is to get a url from storage and then use it in the browser 
              storageReference.child(storID_getimg_file).getDownloadURL().then(function(url) {

                // insert the retrieved url into the img src 
                var img = document.getElementById('cms_image');
                img.src = url;

              }).catch(function(error) {

                // Handle any errors
                console.log("error in retrieving the url for the image");

              });
            }

            else {}

            }).catch(function(error){
        
              // detailed error logging Firebase 
              console.log("errors", error);
            
            })

          //return (YOUR DOCUMENT NUMBER);

          } else {
    
          // doc.data() will be undefined in this case
          console.log("No such document!");
    
          }

      }).catch(function(error){
      
        // detailed error logging Firebase 
        console.log("errors", error);
      
    })
  };



// // GET RECORDS FROM THE CMS DB 
// function retrieveData(){

//   docRef.get().then(function(doc){

//     if (doc.exists) {

//       // ALWAYS MAKE SURE THAT YOU MAP EVERYTHING PROPERLY.. 
//       // second page take out which field? 
//       // console.log("Document data:", doc.data().field_1568202952153);
//       document.getElementById("cms_input").innerHTML = doc.data().field_1568202952153 + "  " + doc.data().field_1568202975016;

//       } else {

//       // doc.data() will be undefined in this case
//       console.log("No such document!");

//       }
//   }).catch(function(error){
  
//     // detailed error logging Firebase 
//     console.log("errors", error);
  
//   })
// };










  




// // change an existing record, but which record do you take  
// function saveData(){

//   // what is the good docRef to take? 

//   docRef.set({

//     naam : name.value, 
//     departement: dept.value,
//     positie: pos.value,
//     werkemer_id: werkn_id.value,

//   // promises on success and on failure 
//   // promise that something will be executed at a certain point in the future 
//   }).then(function(){

//     // go to another page, show status report... 

//     console.log("status saved");

//   }).catch(function(error){

//     // show error screen, show alert... 

//     console.log("errors", error);

//   })
// };




// // TOEVOEGEN van record 
// function addData(){

//   colRef.add({

//     naam : name.value, 
//     departement: dept.value,
//     positie: pos.value,
//     werkemer_id: werkn_id.value

//   }).then(function(){

//     console.log("status saved");

//   }).catch(function(error){

//     console.log("errors", error);

//   })
// };

