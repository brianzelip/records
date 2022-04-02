import { dirname, join } from 'path';

import 'dotenv/config';
import Fastify from 'fastify';
import formBodyPlugin from 'fastify-formbody';
import viewLayerPlugin from 'point-of-view';
import nunjucks from 'nunjucks';
import staticPlugin from 'fastify-static';

import siteSettings from './siteSettings.js';
import db from './db.js';
import recordSchema from './schema2.js';
import recordModel from './model.js';
import routes from './routes.js';

const port = process.argv[2] || 3000;
const __dirname = dirname(new URL(import.meta.url).pathname);
const viewsDir = './views';
const viewsRoot = join(__dirname, viewsDir);
const dbOpts = { uri: process.env.RECORDS_DB_URI };
const viewOpts = {
  engine: { nunjucks },
  root: viewsRoot,
  defaultContext: siteSettings
};

const fastify = Fastify({ logger: true });

fastify.register(db, dbOpts);
fastify.register(recordSchema);
fastify.register(recordModel);
fastify.register(formBodyPlugin);
fastify.register(routes);
fastify.register(viewLayerPlugin, viewOpts);
fastify.register(staticPlugin, {
  root: join(__dirname, 'public'),
  prefix: '/wtf/',
  index: false,
  list: true
});

const server = async () => {
  try {
    await fastify.listen(port);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

server();
