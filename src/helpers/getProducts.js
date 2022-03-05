const url = "https://run.mocky.io/v3/8d8e0a98-13d6-48b5-9576-ff372c7a0e53";

export const getProducts = async (setState) => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    setState(data);
  } catch (error) {
    console.log(error);
  }
};

export const getProductsById = async (id, setState) => {
  try{
    const resp = await fetch(url);
    const data = await resp.json();
    const product = data.find( el => el.id == id);
    setState(product);

  }catch(error){
    console.log(error);
  }
}


