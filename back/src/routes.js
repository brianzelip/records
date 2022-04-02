import {
  renderEditForm,
  getAdd,
  listRecords,
  postAddRecord
} from './controller.js';

async function routes(fastify, options, done) {
  fastify.get('/', renderEditForm);

  fastify.get('/add', getAdd);

  fastify.get('/list', listRecords);

  fastify.post('/add-record', postAddRecord);

  done();
}

export default routes;
