import arrayFromVal from './utils/arrayFromVal.js';

export function home(req, reply) {
  reply.send(`Hello there @ ${new Date()}`);
}

export async function listRecords(req, reply) {
  const cursor = this.records.find({});
  const count = await cursor.count();
  await cursor.forEach((doc) => console.log(doc));
  reply.send(`Records count: ${count}`);
}

export function renderEditForm(req, reply) {
  reply.view('index.njk');
}

export async function getAdd(req, reply) {
  const input = {
    title: 'TESTING 011 via recordModel!',
    artists: ['BZ'],
    label: 'Bolton Hill Recs',
    year: new Date().getFullYear(),
    genres: ['children'],
    copies: 1
  };
  const record = new this.recordModel(input);
  const result = await this.records.insertOne(record);
  reply.send(`A record was inserted with the _id: ${result.insertedId}`);
}

export async function postAddRecord(req, reply) {
  const cleanedInput = {
    title: req.body.title,
    artist: arrayFromVal(req.body.artist),
    label: arrayFromVal(req.body.label),
    genre: arrayFromVal(req.body.genre),
    year: req.body.year,
    country: req.body.country,
    copies: req.body.copies
  };
  const record = new this.recordModel(cleanedInput);
  const result = await this.records.insertOne(record);

  reply.send(`A record was inserted with the _id: ${result.insertedId}`);
}
