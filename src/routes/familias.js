const helper = require("./RouterHelper");
const service = require("../service/FamiliaService");
module.exports = (app) => {
  /**
   * @swagger
   * definitions:
   *   Familia:
   *     type: object
   *     properties:
   *       nome:
   *         type: string
   *       integrantes:
   *         type: array
   *         items:
   *           type: string
   */
  app
    .route("/familias")
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
    .get((req, res) => {
      helper.runDefaultPromise(service.find(), res);
    })
    /**
     * @swagger
     * /familias:
     *  post:
     *    tags:
     *    - familias
     *    description: Utilizado para criar novas familias
     *    responses:
     *      '200':
     *        description: Familia criada com sucesso
     *    parameters:
     *    - in: 'body'
     *      name: 'familia'
     *      description: 'Familia a ser criada'
     *      required: true
     *      schema:
     *        $ref: '#/definitions/Familia'
     */
    .post((req, res) => {
      helper.runDefaultPromise(service.save(req.body), res);
    });

  app
    .route("/familias/:id")
    /**
     * @swagger
     * /familias/{id}:
     *  put:
     *    tags:
     *    - familias
     *    description: Utilizado para atualizar familias existentes
     *    responses:
     *      '200':
     *        description: Familia atualizada com sucesso
     *    parameters:
     *    - in: 'body'
     *      name: 'familia'
     *      description: 'Familia a ser atualizada'
     *      required: true
     *      schema:
     *        $ref: '#/definitions/Familia'
     *    - in: 'path'
     *      name: 'id'
     *      description: "Familia id"
     *      required: true
     *      type: string
     */
    .put((req, res) => {
      helper.runDefaultPromise(service.update(req.body), res);
    })
    /**
     * @swagger
     * /familias/{id}:
     *  delete:
     *    tags:
     *    - familias
     *    description: Utilizado para deletar familias existentes
     *    responses:
     *      '200':
     *        description: Familia removida com sucesso
     *    parameters:
     *    - in: 'path'
     *      name: 'id'
     *      description: "Familia id"
     *      required: true
     *      type: string
     */
    .delete((req, res) => {
      helper.runDefaultPromise(service.delete(req.body), res);
    });
};
