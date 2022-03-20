import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebaseConfig";


export const getProducts = async (setState, category) => {

  const querySnapshot = await getDocs(collection(db, "items"));
  
  const listProducts = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    listProducts.push(data);
  });
  try {
    if (category) {
      let productsFilters = listProducts.filter(
        (p) => p.category === category
      );
      setState(productsFilters);
    } else {
      setState(listProducts);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProductsById = async (id, setState) => {
  const querySnapshot = await getDocs(collection(db, "items"));
  const listId = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    listId.push(data);
  });
  try{
    const product = listId.find((el) => el.id == id);
    setState(product);

  }catch(error){
    console.log(error);
  }
}