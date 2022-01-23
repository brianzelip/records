import fp from 'fastify-plugin';

/**
 * @name dbCollection
 * @description Decorate root Fastify instance with MongoDB collection as
 * a short hand replacement for `fastify.mongo.db.collection('records')`.
 * @example fastify.records.find({})
 */
function dbCollection(fastify, opts, done) {
  fastify.decorate('records', fastify.mongo.db.collection('records'));
  done();
}

export default fp(dbCollection, { name: 'collection-decorator' });
