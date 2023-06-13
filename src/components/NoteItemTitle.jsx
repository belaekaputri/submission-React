import React from 'react';

function NoteItemTitle({ title, createdAt }){
    return(
        <div className="nTitle">
            <h3>{ title} </h3>
            <p>{ createdAt }</p>
        </div>
    )
}
export default NoteItemTitle;