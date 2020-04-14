const helper = require("./RouterHelper");
const service = require("../service/DoacaoService");
module.exports = (app) => {
  /**
   * @swagger
   * definitions:
   *   Doacao:
   *     type: object
   *     properties:
   *       nome:
   *         type: string
   *       produtos:
   *         type: array
   *         items:
   *           $ref: '#/definitions/DoacaoProduto'
   *       doador:
   *         type: string 
   *       cesta:
   *         type: string
   *       status:
   *         type: string
   *       imagem:
   *         type: string
   *       campanha:
   *         type: string
   *   DoacaoProduto:
   *      type: object
   *      properties:
   *        produto:
   *          type: string
   *        quantidade:
   *          type: number
   */
  app
    .route("/doacoes")
    /**
     * @swagger
     * /doacoes:
     *  get:
     *    tags:
     *    - Doacoes
     *    description: Utilizado para recuperar as Doacoes cadastradas
     *    responses:
     *      '200':
     *        description: Doacoes retornadas com sucesso
     */
    .get((req, res) => {
      helper.runDefaultPromise(service.find(), res);
    })
    /**
     * @swagger
     * /doacoes:
     *  post:
     *    tags:
     *    - Doacoes
     *    description: Utilizado para criar novas Doacoes
     *    responses:
     *      '200':
     *        description: Doacao criada com sucesso
     *    parameters:
     *    - in: 'body'
     *      name: 'Doacao'
     *      description: 'Doacao a ser criada'
     *      required: true
     *      schema:
     *        $ref: '#/definitions/Doacao'
     */
    .post((req, res) => {
      helper.runDefaultPromise(service.save(req.body), res);
    });

  app
    .route("/doacoes/:id")
    /**
     * @swagger
     * /doacoes/{id}:
     *  put:
     *    tags:
     *    - Doacoes
     *    description: Utilizado para atualizar Doacoes existentes
     *    responses:
     *      '200':
     *        description: Doacao atualizada com sucesso
     *    parameters:
     *    - in: 'body'
     *      name: 'Doacao'
     *      description: 'Doacao a ser atualizada'
     *      required: true
     *      schema:
     *        $ref: '#/definitions/Doacao'
     *    - in: 'path'
     *      name: 'id'
     *      description: "Doacao id"
     *      required: true
     *      type: string
     */
    .put((req, res) => {
      helper.runDefaultPromise(service.update(req.body), res);
    })
    /**
     * @swagger
     * /doacoes/{id}:
     *  delete:
     *    tags:
     *    - Doacoes
     *    description: Utilizado para deletar Doacoes existentes
     *    responses:
     *      '200':
     *        description: Doacao removida com sucesso
     *    parameters:
     *    - in: 'path'
     *      name: 'id'
     *      description: "Doacao id"
     *      required: true
     *      type: string
     */
    .delete((req, res) => {
      helper.runDefaultPromise(service.delete(req.body), res);
    });
};
