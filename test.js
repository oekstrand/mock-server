// $hash = @{  FirstName    = "Ola"; 
// LastName = "Ekstrand"
//             }

// $JSON = $hash | convertto-json 
const request = require('request');
const readline = require('readline');


const firstNames = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Charles", "Joseph", "Thomas"];
const lastNames = ["Jones", "Taylor", "Brown", "Williams", "Wilson", "Johnson", "Davies", "Robinson", "Wright", "Thompson", "Evans", "Walker", "White", "Roberts", "Green", "Hall", "Wood", "Jackson", "Clarke"];


readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
        process.exit();
    } else if (key.ctrl) {
        try {
            const port = 3000 + parseInt(str);
            if (port < 3000 || port > 3003)
                return;
            request("http://localhost:" + port, { method: "DELETE" });
        }
        catch {

        }
        

    } else {
        const fName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const body = {
            "FirstName": fName,
            "LastName": lName
        };
        try {
            const port = 3000 + parseInt(str);
            if (port < 3000 || port > 3003)
                return;
            request("http://localhost:" + port, { method: "POST", json: body });
        }
        catch {

        }
    }
});

