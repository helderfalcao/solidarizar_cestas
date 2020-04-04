'use strict';

module.exports = function (Model) {
    return {
        save: function (model) {
            var newModel = new Model(model);
            return newModel.save();
        },
        update: function (model) {
            return Model.findOneAndUpdate(
                { _id: model._id }, model, { new: true });
        },
        findById: function (id) {
            return Model.findById(id);
        },
        findOne: function (filter) {
            return Model.findOne(filter);
        },
        listAll: function () {
            return Model.find();
        },
        delete: function (filter) {
            return Model.remove(filter);
        },
        find: function (filter) {
            return Model.find(filter);
        },
        insertMany: function (models) {
            return Model.insertMany(models);
        }
    }
}