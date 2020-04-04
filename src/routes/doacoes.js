module.exports = (app) => {
    /**
     * @swagger
     * /doacoes:
     *  get:
     *    tags:
     *    - doacoes
     *    description: Utilizado para recuperar as doacoes cadastradas
     *    responses:
     *      '200':
     *        description: doacoes retornadas com sucesso
     */
  
    app.get("/doacoes", (req, res) => {
      console.table(req);
      res.json("{ success: '200'}");
    });
  };
  