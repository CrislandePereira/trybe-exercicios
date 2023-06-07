const techList = (array, name) => {
  if(array.length === 0) return 'Vazio!';

  const ordernaArray = array.sort();
  const listaTecnologias = [];

  for (let index = 0; index < ordernaArray.length; index += 1){
    listaTecnologias.push({
      tech: ordernaArray[index], 
      name,
    });
  }
  return listaTecnologias;
};

module.exports = techList;