module.exports = (app) => {
    /**
     * @swagger
     * /cestas:
     *  get:
     *    tags:
     *    - cestas
     *    description: Utilizado para recuperar as cestas cadastradas
     *    responses:
     *      '200':
     *        description: cestas retornadas com sucesso
     */
  
    app.get("/cestas", (req, res) => {
      console.table(req);
      res.json("{ success: '200'}");
    });
  };
  