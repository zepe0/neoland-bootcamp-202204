const { retrieveClockUser } = require("../logic");
const { verifyToken, handleErrorsAndRespond } = require("./helpers");

module.exports = (req, res) => {
  // tengo un express pediente de si recive un POST a users, y me devuelve (req, res)
  try {
    const { userId } = verifyToken(req);

    retrieveClockUser(userId) // llamo a mi funcion
      .then((data) => {
        res.status(201).json(data); // cuando ha acabado, envio al res un status 201
      })
      .catch(
        (
          error // si el registro lanza un error ASINCRONO que llega más tarde
        ) => handleErrorsAndRespond(error, res)
      );
  } catch (error) {
    // si pillo errores SINCRONOS,
    // lanzados directo de throw (ej. validaros), antes de llegar al siguiente then
    handleErrorsAndRespond(error, res);
  }
};
