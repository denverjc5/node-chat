let id = 0;
let messages = [];

module.exports = {
  read: (request, response) => {
    response.send(messages);
  },

  update: (request, response) => {
    let messageId = request.params.id;

    for (var i =0; i < messages.length; i++) {
      let message = messages[i];

      if (messageId == message.id) {
        message.text = request.body.text;
        break;
      }
    }
    response.send(messages);
  },

  create: (request, response) => {
    let {text, time} = request.body;

    messages.push({
      id: id++,
      text: text,
      time: time
    })
    response.send(messages);
  },

  delete: (request, response) => {
    let messageId = request.params.id;

    for (var i = 0; i < messages.length; i++) {
      if (messages[i].id = messageId) {
        messages.splice(i,  1);
        break;
      }
    }
    response.send(messages);
  }
}
