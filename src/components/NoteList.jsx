import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete }){
    if(notes.length===0){
        return(
            <div className='noteEmpty'>
                <h3>Tidak Ada Catatan</h3>
            </div>
        )
    }
    return(
        <div className="notesList">
            {
                notes.map((note)=>(
                    <NoteItem key={note.id}
                    id={note.id}
                    onDelete={onDelete}
                    {...note}
                     />
                ))
            }
        </div>
    )
}
export default NoteList;