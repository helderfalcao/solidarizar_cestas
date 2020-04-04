module.exports = (app) => {
    /**
     * @swagger
     * /produtos:
     *  get:
     *    tags:
     *    - produtos
     *    description: Utilizado para recuperar as produtos cadastradas
     *    responses:
     *      '200':
     *        description: produtos retornadas com sucesso
     */
  
    app.get("/produtos", (req, res) => {
      console.table(req);
      res.json("{ success: '200'}");
    });
  };
  