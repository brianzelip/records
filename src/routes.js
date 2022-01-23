import schema from './schema.js';
import { renderEditForm, getAdd, listRecords } from './controller.js';

const postBodySchema = { body: schema };

async function routes(fastify, options, done) {
  const records = fastify.mongo.db.collection('records');

  fastify.get('/', renderEditForm);

  fastify.get('/add', getAdd);

  fastify.get('/list', listRecords);

  done();
}

export default routes;
