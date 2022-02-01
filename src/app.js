import { join } from 'path';

import 'dotenv/config';
import dirname from '@bzelip/dirname';
import Fastify from 'fastify';
import formBodyPlugin from 'fastify-formbody';
import viewLayerPlugin from 'point-of-view';
import nunjucks from 'nunjucks';

import siteSettings from './siteSettings.js';
import db from './db.js';
import recordSchema from './schema2.js';
import recordModel from './model.js';
import routes from './routes.js';

const __dirname = dirname(import.meta.url);
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

const server = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

server();
