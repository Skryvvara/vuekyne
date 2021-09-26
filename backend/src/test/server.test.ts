import supertest from 'supertest';
import axios from 'axios';
import Server from '../server';
import AppConfig from '../config/config';

const server = new Server(AppConfig.PORT);

test('Server default port is 3000', () => {
    let tempServer = new Server()
    expect(tempServer.port).toBe(3000);
});

test('Server is starting correctly', () => {
    server.startServer();
    expect(server.isListening()).toBe(true);
});

test('Server is stopping correctly', () => {
    server.stopServer();
    expect(server.isListening()).toBe(false);
})
