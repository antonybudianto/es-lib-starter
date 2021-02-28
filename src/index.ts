import {add} from './math';

export function hello(name = 'World') {
  const res = add(12);
  console.log('hello', name, res);
}
