const app = express();

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

app.get("/campanhas", (req, res) => {});