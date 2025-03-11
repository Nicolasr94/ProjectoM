import { initializeApp } from "firebase/app";
import {doc,getFirestore, collection, addDoc,serverTimestamp, query, where, getDocs, getDoc } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCks4-hwvF5pyxsVFzn79JiUcQQKGdY5mY",
  authDomain: "projectmanagement-724a8.firebaseapp.com",
  databaseURL: "https://projectmanagement-724a8-default-rtdb.firebaseio.com",
  projectId: "projectmanagement-724a8",
  storageBucket: "projectmanagement-724a8.firebasestorage.app",
  messagingSenderId: "806174538992",
  appId: "1:806174538992:web:b5a181ef3f9280414f5635"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export async function getAll(docF){ 
let data=[]
const q = query(collection(db, docF));
const querySnapshot = await getDocs(q);

querySnapshot.forEach((doc) => {
  data.push({
    id: doc.id,
    ...doc.data()
});
});
console.log(data)
return data;
}


export async function searchBySomeField (docRef,name,field="name") {
  const queryF = query(collection(db, docRef), where(field, "==", name));
  try{
  let data =[];
  const querySnapshot = await getDocs(queryF);
  querySnapshot.forEach((doc)=> {
    data.push({
    id: doc.id,
    ...doc.data()
});
  })
  return data
  }catch{
    console.error("Ocurrio un error inesperiado")
  }
  }
  

export const getOne = async (docRef,id) => {
  try{
    const volunteerDocRef = doc(collection(db,docRef),id);
    const docSnapShot = await getDoc(volunteerDocRef);
    if (docSnapShot.exists()) {
      return docSnapShot.data(); // Retornar los datos si existen
    } else {
      console.log('No se encontró el documento');
      return null;
    }
  } catch (error) {
    console.error('Error al obtener el documento:', error);
    return null; 
  }

  }

  export const addCardAndRef = async (data,docName) => {
    try {
      const idRef = data.idVolunteer
      console.log(idRef)
      const voluntarioRef = doc(collection(db, "volunteers"), idRef)
      await addDoc(collection(db, docName), {
        ...data,
          date:serverTimestamp(),
          volunteerId:voluntarioRef,
      });
      console.log("La carga de datos fue un éxito");
  } catch (error) {
      console.error("Error en la carga de datos:", error);
  }
}


  
  export const addCard = async (data,doc) => {
  try {
    await addDoc(collection(db, doc),data);
    console.log("La carga de datos fue un éxito");
    console.log(data)
} catch (error) {
    console.error("Error en la carga de datos:", error); 
}

}
