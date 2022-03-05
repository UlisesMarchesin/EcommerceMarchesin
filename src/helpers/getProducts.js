const url = "https://run.mocky.io/v3/a288552b-8535-428b-80c5-606fddbbbb9a";

export const getProducts = async (setState, category) => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    if(category){
      setState(data.filter( p => p.category === category))
    }else{
      setState(data);
    }
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