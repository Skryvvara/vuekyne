import supertest from 'supertest';
import axios from 'axios';
import Server from '../src/server';
import AppConfig from '../src/config/config';

const server = new Server(AppConfig.PORT);

test('Server default port is 3000', () => {
    let tempServer = new Server()
    expect(tempServer.port).toBe(3000);
});

test('Server is starting correctly', () => {
    server.startServer();
    expect(server.isListening()).toBe(true);
});

test('GET /repos', async() => {
    const data = await axios.get('http://localhost:3000/api/repos').then(res => res.data);
    console.log(data);
});

test('Server is stopping correctly', () => {
    server.stopServer();
    expect(server.isListening()).toBe(false);
})
