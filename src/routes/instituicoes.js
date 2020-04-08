const helper = require("./RouterHelper");
const service = require("../service/InstituicaoService");
module.exports = (app) => {
  /**
   * @swagger
   * definitions:
   *   Instituicao:
   *     type: object
   *     properties:
   *       nome:
   *         type: string
   *       descricao:
   *         type: string
   *       responsavel:
   *         type: string
   *       imagem:
   *         type: string
   */
  app
    .route("/instituicoes")
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
    .get((req, res) => {
      helper.runDefaultPromise(service.find(), res);
    })
    /**
     * @swagger
     * /instituicoes:
     *  post:
     *    tags:
     *    - instituicoes
     *    description: Utilizado para criar novas instituicoes
     *    responses:
     *      '200':
     *        description: Instituicao criada com sucesso
     *    parameters:
     *    - in: 'body'
     *      name: 'instituicao'
     *      description: 'Instituicao a ser criada'
     *      required: true
     *      schema:
     *        $ref: '#/definitions/Instituicao'
     */
    .post((req, res) => {
      helper.runDefaultPromise(service.save(req.body), res);
    });

  app
    .route("/instituicoes/:id")
    /**
     * @swagger
     * /instituicoes/{id}:
     *  put:
     *    tags:
     *    - instituicoes
     *    description: Utilizado para atualizar instituicoes existentes
     *    responses:
     *      '200':
     *        description: Instituicao atualizada com sucesso
     *    parameters:
     *    - in: 'body'
     *      name: 'instituicao'
     *      description: 'Instituicao a ser atualizada'
     *      required: true
     *      schema:
     *        $ref: '#/definitions/Instituicao'
     *    - in: 'path'
     *      name: 'id'
     *      description: "Instituicao id"
     *      required: true
     *      type: string
     */
    .put((req, res) => {
      helper.runDefaultPromise(service.update(req.body), res);
    })
    /**
     * @swagger
     * /instituicoes/{id}:
     *  delete:
     *    tags:
     *    - instituicoes
     *    description: Utilizado para deletar instituicoes existentes
     *    responses:
     *      '200':
     *        description: Instituicao removida com sucesso
     *    parameters:
     *    - in: 'path'
     *      name: 'id'
     *      description: "Instituicao id"
     *      required: true
     *      type: string
     */
    .delete((req, res) => {
      helper.runDefaultPromise(service.delete(req.body), res);
    });
};
