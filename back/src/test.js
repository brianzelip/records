import { dirname } from 'path';

console.log('naive:', new URL(import.meta.url).pathname);
console.log('dirname:', dirname(new URL(import.meta.url).pathname));

console.log(process.env);
