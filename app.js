const yargs = require('yargs');
const notes = require('./notes.js');

yargs.command({
	command : 'add',
	describe: 'add a new note',
	builder :{
		title:{
			describe:'add a new title',
			demandOption:true,
			type : 'string'
		},
		body:{
			describe:'add body',
			demandOption : true,
			type:'string'
		},
	},
	handler : function(argv){
		notes.addNote(argv.title,argv.body);
	}
})

yargs.command({
	command : 'remove',
	describe : 'remove a note',
	builder:{
		title:{
			describe:'note tile',
			demandOption : true,
			type : 'string'
		}
	},
	handler : function(argv){
		notes.removeNote(argv.title);
	}
})

yargs.command({
	command:'list',
	describe:'list all the tasks',
	handler:function(){
		notes.listNotes();
	}
})

yargs.command({
	command:'read',
	describe:'read the task with given title',
	builder:{
		title:{
			describe:'note title',
			demandOption : true,
			type : 'string'
		}
	},
	handler : function(argv){
		notes.readNote(argv.title);
	}
})

yargs.parse();