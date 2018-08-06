import micro from 'micro';
import index from './app';

const port = 2000;
const server = micro(index);

server.listen(port);
