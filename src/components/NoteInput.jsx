import React from 'react';

class NoteInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title : '',
            body  : '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler= this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler= this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        this.setState(()=>{
            return{
                title : event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event){
        this.setState(()=>{
            return{
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState(() => {
            return {
                title:"",
                body: "",
            };
        });
    }

    render(){
        return(
            <form className='noteInput' onSubmit={this.onSubmitEventHandler}>
              <h1>Buat Catatan</h1>
              <input type="text" placeholder='Judul' value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
              <textarea placeholder='Tuliskan Catatanmu Disini' value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
              <button type='submit'>Tambah</button>
            </form>
        )
    }
}

export default NoteInput;