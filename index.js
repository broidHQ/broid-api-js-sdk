const broidSDK = require("./lib/index.js");

const botActorID = "U3LJCKD7C";
const auto_reply = true;

const sdk = new broidSDK({
  appID: '152320555339762395',
  secret: 'PCFlR2BhCmIBf7FGgJ27OcGZpfIRKdsG311mPFRE3HjAu1uDHb',
},
'https://api-dev.broid.ai',
'1',
'debug'
);

const socket = sdk.realtime()
  .then((socket) => socket.subscribe({
		next: (data) => {
      if (!data['@context']) {
        console.log('system: ', data);
        return;
      }

      console.log('user: ', data);
      const actorID = data.actor.id || "";
      if (actorID === botActorID) { return; }

      const dataType = data.type.toLowerCase() || null;
      console.log('sending,,,', dataType);

      if (dataType === 'create' || dataType === 'update' || dataType === 'delete') {
        if (auto_reply) {
          let reply = data;
          reply.to = reply.actor;
          reply.object.content = `ping - ${reply.object.content}`;

          sdk.sendMessage(reply)
            .then(() => console.log('me: ', reply))
            .catch((err) => console.error(err.message));
        }
      }

    },
		error: err => console.error(`Something went wrong: ${err.message}`),
	}));
