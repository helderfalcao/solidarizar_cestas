const app = express();

/**
 * @swagger
 * /instituicoes:
 *  tags: Instituicoes
 *  get:
 *    tags:
 *    - instituicoes      
 *    description: Utilizado para recuperar as instituicoes cadastradas
 *    responses:
 *      '200':
 *        description: Instituicões retornadas com sucesso
 */
app.get("/instituicoes", (req, res) => {});
