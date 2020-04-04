"use strict"
module.exports = {
    runDefaultPromise: function (promise, res) {
        try {
            this.defaultPromiseResult(promise, res);
        } catch (ex) {
            this.defaultBusinessError(ex, res);
        }
    },

    defaultResult: function (res) {
        return function (err, result) {
            if (err) {
                console.log(err)
                res.status(400).send(err)
            } else {
                res.status(200).json(result)
            }
        }
    },
    defaultPromiseResult: function (promise, res) {
        promise
            .then(function (result) {
                res.status(200).json(result)
            })
            .catch(function (err, status) {
                res.status(err.status ? err.status : 400)
                res.statusMessage = err.message
                res.send(err)
            })
    },
    defaultBusinessError: function (ex, res) {
        res.status(400).json(ex)
    },
    removeNullFromArray: function (array) {
        var temp = []
        for (let i of array) {
            i && temp.push(i)
        }
        array = temp
        return array
    }
}