
import fs from 'fs'
import chalk from 'chalk';
// funcs.................................................................
export const getNotes =  () => {
    return "your notes.."
};

export const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    if(duplicateNotes.length === 0){
        notes.push({
            title:title,
            body:body,
        })
        saveNotes(notes)
        console.log("new note added!")
    } else {
        console.log("note title taken!")
      
    };
    }

    export const removeNote = (title) => {
        console.log("remove note")
        const notes = loadNotes()
        const notesToKeep = notes.filter((note) => note.title !== title)
        
        if (notes.length > notesToKeep.length) {
            console.log(chalk.green.inverse("Note remove"))
            saveNotes(notesToKeep)
        } else {
            console.log(chalk.red.inverse("no note found!"))
        }

    }

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

export const loadNotes = () => {
    try{
        const dataBuffer =  fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e) {
        return[]

    }
}