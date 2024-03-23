const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let numero= Object.keys(objeto);
  return numero.length;
};

module.exports = contarPropiedades;
