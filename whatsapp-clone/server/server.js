const io = require("socket.io")(5000, {
    cors: {
        origin: ["http://localhost:3000", "http://192.168.1.11:3000"],
        methods: ["GET", "POST"]
    }
});

io.on(`connection`, (socket) => {
  const id = socket.handshake.query.id;
  console.log('This is id: ',);
  socket.join(id);

  socket.on(`send-message`, ({ recipients, text }) => {
    recipients.forEach(recipient => {
      const newRecipients = recipients.filter((r) => r !== recipient);
      newRecipients.push(id);
      socket.broadcast.to(recipient).emit(`receive-message`, {
        recipients: newRecipients,
        sender: id,
        text,
      });
    });
  });

  socket.on('connect_error', (err) => {
    console.log(`connect_error due to ${err.message}`);
  })
});
