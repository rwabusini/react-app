import React from 'react';
import axios from "axios";
import AllNotes from './AllNotes';
// import AllNotes  from './AllNotes';
class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            date: ""
        }
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
       
        this.onSubmit = this.onSubmit.bind(this);
    }
  
    onChangeText(e) {
        this.setState({ text: e.target.value })
    }
  
    onChangeDate(e) {
        var current_datetime = new Date()
        var formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate()
        this.setState({ date: formatted_date})
    }
    onSubmit(e) {
        e.preventDefault()

        const user = {
            text: this.state.text,
            date: this.state.date
        };
    
        axios.post('http://localhost:5000/addNotes', user)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ text: '', date: '' })

      
    }
    render() {
       

        return (
            <div>
                <form onSubmit={this.onSubmit}>

                <div>
                    <textarea className="text"
                        placeholder="enter"
                        rows={6} 
                        value={this.state.text} onChange={this.onChangeText}
                            // onChange={this.onChangeDate}
                        />
                        <button onClick={this.onChangeDate}>Add</button>
                 
                </div>

             </form>
               <div><AllNotes/></div>
            </div>
        );
    }
};
export default Note