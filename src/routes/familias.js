module.exports = (app) => {
    /**
     * @swagger
     * /familias:
     *  get:
     *    tags:
     *    - familias
     *    description: Utilizado para recuperar as familias cadastradas
     *    responses:
     *      '200':
     *        description: familias retornadas com sucesso
     */
  
    app.get("/familias", (req, res) => {
      console.table(req);
      res.json("{ success: '200'}");
    });
  };
  