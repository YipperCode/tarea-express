const express = require('express');


function list(req, res, next) {
    res.send('respond with list');
}

function index(req, res, next) {
    const n1 = parseInt(req.params.n1);
    const n2 = parseInt(req.params.n2);
    const resultado = n1 + n2;
    res.send(` ${n1} + ${n2} = ${resultado}`);
}


function create(req, res, next) {
    const n1 = parseInt(req.body.n1);
    const n2 = parseInt(req.body.n2);
    const resultado = n1 * n2;
    res.send(` ${n1} * ${n2} = ${resultado}`);
}

function replace(req, res, next) {
    const n1 = parseInt(req.body.n1);
    const n2 = parseInt(req.body.n2);
    const resultado = n1 / n2;
    res.send(` ${n1} / ${n2} = ${resultado}`);
}

function update(req, res, next) {
    const n1 = parseInt(req.body.n1);
    const n2 = parseInt(req.body.n2);
    const resultado = Math.pow(n1, n2);
    res.send(` ${n1} ^ ${n2} = ${resultado}`);
}

function destroy(req, res, next) {
    const n1 = parseInt(req.params.n1);
    const n2 = parseInt(req.params.n2);
    const resultado = n1 - n2;
    res.send(` ${n1} - ${n2} = ${resultado}`);
}


module.exports = { list, index, create, replace, update, destroy };