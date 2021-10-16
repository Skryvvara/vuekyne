import request from 'supertest';
import Server from '../server';
import Config from '../config/config';
import { GithubRepository } from '../models/githubRepository.model';

Config.flushEnv('./.env');
const server = new Server(Config.PORT);

test('Server default port is 3000', () => {
  let tempServer = new Server()
  expect(tempServer.port).toBe(3000);
});

test('Server is starting correctly', () => {
  server.startServer();
  expect(server.isListening()).toBe(true);
});

test('GET /api/repos returns all repositories', async () => {
  const res: GithubRepository[] = await request(server.app).get('/api/repos').then(res => res.body);
  expect(res[0].name).not.toBe(undefined);
});

test('Server is stopping correctly', () => {
  expect(server.stopServer()).toBe(true);
  expect(server.isListening()).toBe(false);
})

test('Stopping a stopped server results in a console log', () => {
  expect(server.stopServer()).toBe(false);
});
