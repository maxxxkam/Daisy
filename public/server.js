const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Статические файлы, фронтенд
app.use(express.static("dist"));  // Vite собирает фронтенд в папку 'dist'

// Обработка соединения WebSocket
io.on("connection", (socket) => {
  console.log("Новый пользователь подключился");

  // Получение сообщений от клиента
  socket.on("message", (msg) => {
    console.log("Получено сообщение:", msg);
    // Рассылаем сообщение всем клиентам
    io.emit("message", msg);
  });

  socket.on("disconnect", () => {
    console.log("Пользователь отключился");
  });
});

// Запуск сервера
server.listen(4000, () => {
  console.log("Сервер работает на порту 4000");
});
