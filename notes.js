const fs = require('fs');
const chalk = require('chalk');
const addNote = (title,body)=>{
	 const notes = loadNotes();
	 const dupliacateList = notes.filter((note)=>{
	 	return note.title === title;
	 })
	 console.log(dupliacateList.length);

	 if(dupliacateList.length === 0)
	 {	 
	 	notes.push({
		 	title:title,
		 	body:body
		 })
		saveNotes(notes);
		console.log('new note added');	
	 }
	 else{
	 	console.log('title already taken');
	 }
}

const loadNotes = ()=>{
	try{
		const dataBuffer = fs.readFileSync('notes.json');
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	}catch(e){
		return [];
	}
}

const saveNotes = (notes)=>{
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json',dataJSON);
}

const removeNote = (title)=>{
	const notes = loadNotes();
	const newNotes = notes.filter((note)=>{
		return note.title !== title;
	})
	if(newNotes.length < notes.length){
		console.log(chalk.green.inverse('Note removed'));
	}
	else{
		console.log(chalk.red.inverse('no Note found'));
	}
	saveNotes(newNotes);
}

const listNotes = ()=>{
	const notes = loadNotes();
	for(let i=0;i<notes.length;i++){
		console.log(notes[i].title);
		console.log(notes[i].body);
	}
}

const readNote = (title)=>{
	const notes = loadNotes();
	const note = notes.find((note) => note.title === title);
	if(note){
		console.log(note.body);
	}
}
module.exports = {
	addNote : addNote,
	removeNote : removeNote,
	listNotes : listNotes,
	readNote : readNote
}