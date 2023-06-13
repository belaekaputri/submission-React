import React from 'react';
import NoteList from './NoteList';
import {getInitialData} from '../utils/data';
import NoteInput from './NoteInput';

class NoteApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            notes:getInitialData(),
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }
   onDeleteHandler(id){
        const notes= this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }
    onAddNoteHandler({title,body}){
     this.setState((prevState)=>{
        return{
            notes:[
                ...prevState.notes,
                {
                    id : +new Date(),
                    title,
                    body,
                    createdAt: new Date().toISOString(),
                    archived: false,
                }
            ]
        }
     });
    }

    render(){
        return(
            <div className="noteApp">
                <h1 className='title'>Note.</h1>
                <NoteInput addNote={this.onAddNoteHandler}/>
                <h1 className='tl'>Daftar Catatan</h1>
                <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler}/>
            </div>
        )
    }
}
export default NoteApp;