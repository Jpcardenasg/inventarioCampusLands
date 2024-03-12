import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABHeVhkLZ0b54Ke9rhP_5bVph4nrHuebg",
    authDomain: "inventariocampus.firebaseapp.com",
    projectId: "inventariocampus",
    storageBucket: "inventariocampus.appspot.com",
    messagingSenderId: "564531805783",
    appId: "1:564531805783:web:e560138bdb3aff67f32d12",
    measurementId: "G-Y20QVVDSPZ"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
const db = getFirestore( app );



export async function getData( collectionName ) {
    const collectionRef = collection( db, collectionName );
    const querySnapshot = await getDocs( collectionRef );
    const data = [];
    querySnapshot.forEach( ( doc ) => {
        data.push( { id: doc.id, ...doc.data() } );
    } );
    return data;
}

export async function postData( collectionName, data ) {
    try {
        const collectionRef = collection( db, collectionName );
        const docRef = await addDoc( collectionRef, data );
        console.log( 'Colección guardada en Firebase correctamente.' );
        return docRef.id;
    } catch ( error ) {
        console.error( 'Error al guardar la colección en Firebase:', error );
        throw error;
    }
}

export async function updateData( collectionName, docId, newData ) {
    try {
        const docRef = doc( db, collectionName, docId );
        await updateDoc( docRef, newData );
        console.log( 'Documento actualizado en Firebase correctamente.' );
        return docId;
    } catch ( error ) {
        console.error( 'Error al actualizar el documento en Firebase:', error );
        throw error;
    }
}