import yargs from 'yargs';
import fs from 'fs';
import uniqid from 'uniqid';

const loadUsers = () => {
    try {
        const dataBuffer = fs.readFileSync('users.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const saveUsers = (users) => {
    const dataJSON = JSON.stringify(users);
    fs.writeFileSync('users.json', dataJSON);
};

yargs(process.argv.slice(2))
    .command({
        command: 'add',
        describe: 'Add a new user',
        builder: {
            name: {
                describe: 'User name',
                demandOption: true,
                type: 'string',
            },
            email: {
                describe: 'User email',
                demandOption: true,
                type: 'string',
            },
            password: {
                describe: 'User password',
                demandOption: true,
                type: 'string',
            },
        },
        handler(argv) {
            const users = loadUsers();
            const user = {
                id: uniqid(),
                name: argv.name,
                email: argv.email,
                password: argv.password,
            };
            users.push(user);
            saveUsers(users);
            console.log('User added:', user);
        },
    })
    .command({
        command: 'read',
        describe: 'Read a user',
        builder: {
            id: {
                describe: 'User ID',
                demandOption: true,
                type: 'string',
            },
        },
        handler(argv) {
            const users = loadUsers();
            const user = users.find(user => user.id === argv.id);
            if (user) {
                console.log('User found:', user);
            } else {
                console.log('User not found');
            }
        },
    })
    .command({
        command: 'update',
        describe: 'Update a user',
        builder: {
            id: {
                describe: 'User ID',
                demandOption: true,
                type: 'string',
            },
            name: {
                describe: 'User name',
                type: 'string',
            },
            email: {
                describe: 'User email',
                type: 'string',
            },
            password: {
                describe: 'User password',
                type: 'string',
            },
        },
        handler(argv) {
            const users = loadUsers();
            const index = users.findIndex(user => user.id === argv.id);
            if (index !== -1) {
                if (argv.name) users[index].name = argv.name;
                if (argv.email) users[index].email = argv.email;
                if (argv.password) users[index].password = argv.password;
                saveUsers(users);
                console.log('User updated:', users[index]);
            } else {
                console.log('User not found');
            }
        },
    })
    .command({
        command: 'delete',
        describe: 'Delete a user',
        builder: {
            id: {
                describe: 'User ID',
                demandOption: true,
                type: 'string',
            },
        },
        handler(argv) {
            const users = loadUsers();
            const filteredUsers = users.filter(user => user.id !== argv.id);
            if (users.length > filteredUsers.length) {
                saveUsers(filteredUsers);
                console.log('User deleted');
            } else {
                console.log('User not found');
            }
        },
    })
    .parse();
