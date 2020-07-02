import React from 'react';
// import SingleNote from "./SingleNote.js";
import axios from "axios";

// Receive items data through props

class SingleNote extends React.Component {
    constructor(props) {
        super(props);
      this.state={
        //   id:this.props.id
        id:'',
        notes:this.props
          }
    }
    onSubmit(id) {
        // e.preventDefault()
        var noteDelete = {
            id: id
        }; 
        // var note = {
        //     id: this.state.id
        // };
       
        axios.post('http://localhost:5000/delNotes', noteDelete)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ id: this.state.id})
    }
       
    handleRemove = (e) => {
        const id = this.state.id;
        const url = 'http://localhost:5000/delNotes';
        // const id = document.querySelectorAll("li").props['data-id'];
        e.preventDefault();
        axios.post(url , id)
            .then(res => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    handleNoteDelete = (note) => {
        var noteId = note.id;
        var newNotes = this.state.notes.filter(function (note) {
            return note.id !== noteId;
        });
        this.setState({ notes: newNotes });
    };

    render() {
        return (
            <div >
                <form >
                <div className="video-list-entry-title">{this.props.text}</div>
                <div className="video-list-entry-title">{this.props.date}</div>
                <div className="video-list-entry-title">{this.props.id}</div>
                    {/* <button onClick={this.onSubmit(this.props.id)} >Delete</button> */}
                    <button onClick={this.handleNoteDelete} >Delete</button>
                </form>
            </div>
        );
    };
}
export default SingleNote;