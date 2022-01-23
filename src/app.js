import { join } from 'path';

import dotenv from 'dotenv';
import dirname from '@bzelip/dirname';
import Fastify from 'fastify';
import fastifyMongoDB from 'fastify-mongodb';
import viewLayer from 'point-of-view';
import nunjucks from 'nunjucks';

import dbHelper from './dbHelper.js';
import routes from './routes.js';
import siteSettings from './siteSettings.js';

dotenv.config();
const __dirname = dirname(import.meta.url);
const viewsDir = './views';
const viewsRoot = join(__dirname, viewsDir);

const dbOpts = {
  // see https://github.com/fastify/fastify-mongodb
  forceClose: true,
  url: process.env.VINYL_DB_URI
};
const viewOpts = {
  // see https://github.com/fastify/point-of-view
  engine: { nunjucks },
  root: viewsRoot,
  defaultContext: siteSettings
};

const fastify = Fastify({ logger: true });

fastify.register(fastifyMongoDB, dbOpts);
fastify.register(dbHelper);
fastify.register(routes);
fastify.register(viewLayer, viewOpts);

const server = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

server();
