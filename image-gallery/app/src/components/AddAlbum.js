import React, { Component } from 'react';

export default class AddAlbum extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    reset() {
        this.setState({
            name: '', 
        })
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value

        });
    }

    render() {
        const { name } = this.state;

        return (
            <div className="add-album">
                <h2>Add A New Album:</h2>
                <form onSubmit={event => {
                    event.preventDefault();
                    this.props.handleAdd(this.state);
                    this.reset();
                }}>
                    <label>
                        NAME: <input name="name"
                            required
                            value={name}
                            onChange={this.handleChange} />
                    </label>
                    
                    <button type="submit">Add Album</button>
                </form>

            </div>
        )
    }




}