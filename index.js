const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { database } = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const CUT_OFF_TIME = 15 * 60; // 15 minute in milliseconds.


// set up function every five minutes
exports.accountcleanup = functions.pubsub.schedule('every 5 minutes').onRun(async context => {
    // Fetch all user details.
    
    const timeslotbase = admin.database().ref('/timeslot');
    const now = Date.now() / 1000.0;
    console.log('1. Get now time' + now);
    const cutoff = now - CUT_OFF_TIME;
    console.log('1. Get now time' + now);
    const oldItemsQuery = timeslotbase.orderByChild('bookStartTime').endAt(cutoff);




    const snapshot = await oldItemsQuery.once('value');

    const updates = {};

    snapshot.forEach(child => {
        updates[child.key] = null;
    });

    console.log('TimeSlot cleanup finished');
    return timeslotbase.update(updates);
    
  });
