'use strict';

const faker = require('faker');
const Auth = require('../../model/auth');

const mock = module.exports = {};



// Auth mock - Mock create one, many, remove all
mock.auth = {};

mock.auth.createOne = () => {
 return new Auth({username: `${faker.internet.userName()}`,
                  password: `${faker.internet.password()}`,
                  email: `${faker.internet.email()}`})
  .save();
};

mock.auth.removeAll = () => Promise.all([Auth.remove()]);
