const helper = require("./RouterHelper");
const service = require("../service/ProdutoService");
module.exports = (app) => {
  /**
   * @swagger
   * definitions:
   *   Produto:
   *     type: object
   *     properties:
   *       nome:
   *         type: string
   *       descricao:
   *         type: string
   */
  app
    .route("/produtos")
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
    .get((req, res) => {
      helper.runDefaultPromise(service.find(), res);
    })
    /**
     * @swagger
     * /produtos:
     *  post:
     *    tags:
     *    - produtos
     *    description: Utilizado para criar novas produtos
     *    responses:
     *      '200':
     *        description: Produto criada com sucesso
     *    parameters:
     *    - in: 'body'
     *      name: 'produto'
     *      description: 'Produto a ser criada'
     *      required: true
     *      schema:
     *        $ref: '#/definitions/Produto'
     */
    .post((req, res) => {
      helper.runDefaultPromise(service.save(req.body), res);
    });

  app
    .route("/produtos/:id")
    /**
     * @swagger
     * /produtos/{id}:
     *  put:
     *    tags:
     *    - produtos
     *    description: Utilizado para atualizar produtos existentes
     *    responses:
     *      '200':
     *        description: Produto atualizada com sucesso
     *    parameters:
     *    - in: 'body'
     *      name: 'produto'
     *      description: 'Produto a ser atualizada'
     *      required: true
     *      schema:
     *        $ref: '#/definitions/Produto'
     *    - in: 'path'
     *      name: 'id'
     *      description: "Produto id"
     *      required: true
     *      type: string
     */
    .put((req, res) => {
      helper.runDefaultPromise(service.update(req.body), res);
    })
    /**
     * @swagger
     * /produtos/{id}:
     *  delete:
     *    tags:
     *    - produtos
     *    description: Utilizado para deletar produtos existentes
     *    responses:
     *      '200':
     *        description: Produto removida com sucesso
     *    parameters:
     *    - in: 'path'
     *      name: 'id'
     *      description: "Produto id"
     *      required: true
     *      type: string
     */
    .delete((req, res) => {
      helper.runDefaultPromise(service.delete(req.body), res);
    });
};
