const helper = require("./RouterHelper");
const service = require("../service/ReceptorService");
module.exports = (app) => {
  /**
   * @swagger
   * definitions:
   *   Receptor:
   *     type: object
   *     properties:
   *       nome:
   *         type: string
   *       endereco:
   *         type: string
   *       responsavel:
   *         type: string
   */
  app
    .route("/receptores")
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
    .get((req, res) => {
      helper.runDefaultPromise(service.find(), res);
    })
    /**
     * @swagger
     * /receptores:
     *  post:
     *    tags:
     *    - receptores
     *    description: Utilizado para criar novas receptores
     *    responses:
     *      '200':
     *        description: Receptor criada com sucesso
     *    parameters:
     *    - in: 'body'
     *      name: 'receptor'
     *      description: 'Receptor a ser criada'
     *      required: true
     *      schema:
     *        $ref: '#/definitions/Receptor'
     */
    .post((req, res) => {
      helper.runDefaultPromise(service.save(req.body), res);
    });

  app
    .route("/receptores/:id")
    /**
     * @swagger
     * /receptores/{id}:
     *  put:
     *    tags:
     *    - receptores
     *    description: Utilizado para atualizar receptores existentes
     *    responses:
     *      '200':
     *        description: Receptor atualizada com sucesso
     *    parameters:
     *    - in: 'body'
     *      name: 'receptor'
     *      description: 'Receptor a ser atualizada'
     *      required: true
     *      schema:
     *        $ref: '#/definitions/Receptor'
     *    - in: 'path'
     *      name: 'id'
     *      description: "Receptor id"
     *      required: true
     *      type: string
     */
    .put((req, res) => {
      helper.runDefaultPromise(service.update(req.body), res);
    })
    /**
     * @swagger
     * /receptores/{id}:
     *  delete:
     *    tags:
     *    - receptores
     *    description: Utilizado para deletar receptores existentes
     *    responses:
     *      '200':
     *        description: Receptor removida com sucesso
     *    parameters:
     *    - in: 'path'
     *      name: 'id'
     *      description: "Receptor id"
     *      required: true
     *      type: string
     */
    .delete((req, res) => {
      helper.runDefaultPromise(service.delete(req.body), res);
    });
};
