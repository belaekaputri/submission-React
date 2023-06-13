import React from 'react';
import NoteItemTitle from './NoteItemTitle';
import NoteItemBody from './NoteItemBody';
import DeleteButton from './DeleteButton';

function NoteItem({ title, body, createdAt, id, onDelete }){
   return(
    <div className='noteItem'>
       <NoteItemTitle title ={title} createdAt={createdAt}/>
       <NoteItemBody body={body}/>
       <DeleteButton id={id} onDelete={onDelete}/>
    </div>
   ) 
}

export default NoteItem;