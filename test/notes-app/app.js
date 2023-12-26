import yargs from 'yargs';
import {getNotes ,addNote ,removeNote}  from './notes.js';



const argv = yargs(process.argv.slice(2))
  .version('1.1.0')

  .command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      },
    },
    handler(argv) {
      removeNote(argv.title)
    }
  })
  
  .command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      },
      body: {
        describe: 'Note body',
        demandOption: true,
        type: 'string' 
      },
    },
    handler(argv) {

        addNote(argv.title, argv.body)
    }
  })

  .command({
    command: 'list',
    describe: 'List your notes ',
    handler() {
        console.log('listing out all notes')
    }
  })

  .command({
    command: 'read',
    describe: 'read a note ',
    handler() {
        console.log('reading a note')
    }
  })
  .argv;


