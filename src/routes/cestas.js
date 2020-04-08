const helper = require("./RouterHelper");
const service = require("../service/CestaService");
module.exports = (app) => {
  /**
   * @swagger
   * definitions:
   *   Cesta:
   *     type: object
   *     properties:
   *       nome:
   *         type: string
   *       descricao:
   *         type: string
   *       produtos:
   *         type: array
   *         items:
   *           type: string
   *       imagem:
   *         type: string
   */
  app
    .route("/cestas")
    /**
     * @swagger
     * /cestas:
     *  get:
     *    tags:
     *    - Cestas
     *    description: Utilizado para recuperar as Cestas cadastradas
     *    responses:
     *      '200':
     *        description: Cestas retornadas com sucesso
     */
    .get((req, res) => {
      helper.runDefaultPromise(service.find(), res);
    })
    /**
     * @swagger
     * /cestas:
     *  post:
     *    tags:
     *    - Cestas
     *    description: Utilizado para criar novas Cestas
     *    responses:
     *      '200':
     *        description: Cesta criada com sucesso
     *    parameters:
     *    - in: 'body'
     *      name: 'Cesta'
     *      description: 'Cesta a ser criada'
     *      required: true
     *      schema:
     *        $ref: '#/definitions/Cesta'
     */
    .post((req, res) => {
      helper.runDefaultPromise(service.save(req.body), res);
    });

  app
    .route("/cestas/:id")
    /**
     * @swagger
     * /cestas/{id}:
     *  put:
     *    tags:
     *    - Cestas
     *    description: Utilizado para atualizar Cestas existentes
     *    responses:
     *      '200':
     *        description: Cesta atualizada com sucesso
     *    parameters:
     *    - in: 'body'
     *      name: 'Cesta'
     *      description: 'Cesta a ser atualizada'
     *      required: true
     *      schema:
     *        $ref: '#/definitions/Cesta'
     *    - in: 'path'
     *      name: 'id'
     *      description: "Cesta id"
     *      required: true
     *      type: string
     */
    .put((req, res) => {
      helper.runDefaultPromise(service.update(req.body), res);
    })
    /**
     * @swagger
     * /cestas/{id}:
     *  delete:
     *    tags:
     *    - Cestas
     *    description: Utilizado para deletar Cestas existentes
     *    responses:
     *      '200':
     *        description: Cesta removida com sucesso
     *    parameters:
     *    - in: 'path'
     *      name: 'id'
     *      description: "Cesta id"
     *      required: true
     *      type: string
     */
    .delete((req, res) => {
      helper.runDefaultPromise(service.delete(req.body), res);
    });
};
