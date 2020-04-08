const helper = require("./RouterHelper");
const service = require("../service/CampanhaService");
module.exports = (app) => {
  /**
   * @swagger
   * definitions:
   *   Campanha:
   *     type: object
   *     properties:
   *       nome:
   *         type: string
   *       descricao:
   *         type: string
   *       responsavel:
   *         type: string
   *       idInstituicao:
   *         type: string
   *       imagem:
   *         type: string
   */
  app
    .route("/campanhas")
    /**
     * @swagger
     * /campanhas:
     *  get:
     *    tags:
     *    - campanhas
     *    description: Utilizado para recuperar as campanhas cadastradas
     *    responses:
     *      '200':
     *        description: campanhas retornadas com sucesso
     */
    .get((req, res) => {
      helper.runDefaultPromise(service.find(), res);
    })
    /**
     * @swagger
     * /campanhas:
     *  post:
     *    tags:
     *    - campanhas
     *    description: Utilizado para criar novas campanhas
     *    responses:
     *      '200':
     *        description: Campanha criada com sucesso
     *    parameters:
     *    - in: 'body'
     *      name: 'campanha'
     *      description: 'Campanha a ser criada'
     *      required: true
     *      schema:
     *        $ref: '#/definitions/Campanha'
     */
    .post((req, res) => {
      helper.runDefaultPromise(service.save(req.body), res);
    });

  app
    .route("/campanhas/:id")
    /**
     * @swagger
     * /campanhas/{id}:
     *  put:
     *    tags:
     *    - campanhas
     *    description: Utilizado para atualizar campanhas existentes
     *    responses:
     *      '200':
     *        description: Campanha atualizada com sucesso
     *    parameters:
     *    - in: 'body'
     *      name: 'campanha'
     *      description: 'Campanha a ser atualizada'
     *      required: true
     *      schema:
     *        $ref: '#/definitions/Campanha'
     *    - in: 'path'
     *      name: 'id'
     *      description: "Campanha id"
     *      required: true
     *      type: string
     */
    .put((req, res) => {
      helper.runDefaultPromise(service.update(req.body), res);
    })
    /**
     * @swagger
     * /campanhas/{id}:
     *  delete:
     *    tags:
     *    - campanhas
     *    description: Utilizado para deletar campanhas existentes
     *    responses:
     *      '200':
     *        description: Campanha removida com sucesso
     *    parameters:
     *    - in: 'path'
     *      name: 'id'
     *      description: "Campanha id"
     *      required: true
     *      type: string
     */
    .delete((req, res) => {
      helper.runDefaultPromise(service.delete(req.body), res);
    });
};
