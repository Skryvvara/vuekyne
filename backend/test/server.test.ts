import Server from '../src/server';
import AppConfig from '../src/config/config';

const server = new Server(AppConfig.PORT);

test('Server is starting correctly', () => {
    server.startServer();
    expect(server.isListening()).toBe(true);
});

test('Server is stopping correctly', () => {
    server.stopServer();
    expect(server.isListening()).toBe(false);
})