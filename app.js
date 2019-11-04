const express = require('express');
const nofServers = 4;
const phoneStates = [];

const logPhoneState = () => {
    console.clear();
    console.log("-------------------------");
    phoneStates.forEach(phoneState => {
        console.log(`  ${phoneState.name}: Contacts: ${phoneState.contacts.length}`);
        console.dir(phoneState.contacts.map((contact) => `${contact.FirstName} ${contact.LastName}` ));
    });
    console.log("-------------------------");
}

for (let i = 0; i < nofServers; i++) {
    phoneStates.push({
        name: "Phone " + i,
        contacts: []
    });
    const app = express();
    app.use(express.json());
    const port = 3000 + i;

    app.get('/', (req, res) => {
        res.send(phoneStates[i]);
    });

    app.post('/', (req, res) => {
        phoneStates[i].contacts.push(req.body);

        logPhoneState();

        res.send("Ok");
    });

    app.listen(port);
}