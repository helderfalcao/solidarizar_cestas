module.exports = (app) => {
    /**
     * @swagger
     * /receptores:
     *  get:
     *    tags:
     *    - receptores
     *    description: Utilizado para recuperar as receptores cadastradas
     *    responses:
     *      '200':
     *        description: receptores retornadas com sucesso
     */
  
    app.get("/receptores", (req, res) => {
      console.table(req);
      res.json("{ success: '200'}");
    });
  };
  