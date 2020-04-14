"use strict";

const Model = require("../dao/entity/CampanhaEntity"),
  businessUtil = require("./BusinessUtil")(Model),
  doacaoModel = require("../dao/entity/DoacaoEntity"),
  produtoModel = require("../dao/entity/ProdutoEntity");

module.exports = businessUtil;

module.exports.campaignSummary = async (campanhaId) => {
  const produtos = await produtoModel.find();
  const produtosMap = new Map();
  produtos.forEach((produto) => produtosMap.set(produto.id, produto.nome));
  return new Promise((fulfill, reject) => {
    doacaoModel
      .aggregate([
        { $match: { campanha: campanhaId } },
        { $unwind: "$produtos" },
        {
          $group: {
            _id: {
              status: "$status",
              produto: "$produtos.produto",
            },
            quantidade: { $sum: "$produtos.quantidade" },
          },
        },
      ])
      .then((resumos) => {
        resumos.forEach((resumo) => {
          resumo.nomeProduto = produtosMap.get(resumo._id.produto);
        });
        fulfill(resumos);
      })
      .catch(reject);
  });
};
