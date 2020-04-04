module.exports = (app) => {
    /**
     * @swagger
     * /instituicoes:
     *  get:
     *    tags:
     *    - instituicoes
     *    description: Utilizado para recuperar as instituicoes cadastradas
     *    responses:
     *      '200':
     *        description: instituicoes retornadas com sucesso
     */
  
    app.get("/instituicoes", (req, res) => {
      console.table(req);
      res.json("{ success: '200'}");
    });
  };
  