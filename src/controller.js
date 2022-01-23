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
  const record = {
    title: 'TESTING 008 with new ES Module set up',
    artist: 'BZ',
    label: 'Bolton Hill Recs',
    year: new Date(),
    genres: ['blues', 'jazz', 'soul']
  };
  // `this` is the fastify instance
  const result = await this.records.insertOne(record);
  reply.send(`A record was inserted with the _id: ${result.insertedId}`);
}
