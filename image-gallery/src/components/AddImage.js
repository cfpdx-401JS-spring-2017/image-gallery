import React, { Component } from 'react';

export default class AddImage extends Component {
    //passing onAdd Handler from UpdateImages.js
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            url: '',
            wiki: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    reset() {
        this.setState({
            title: '',
            description: '',
            url: '',
            wiki: ''
        })
    }

    //Q:are we saying let the value of the input become the name?
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    //Q: Why are we passing this.state in line 43 when the fn takes (image)?
    render() {
        const { title, description, url, wiki } = this.state;

        return (
            <div className="add-image">
                <h2>Add An Image:</h2>
                <form onSubmit={event => {
                    event.preventDefault();
                    this.props.handleAdd(this.state);
                    this.reset();
                }}>
                    <label>
                        Title: <input name="title"
                            required
                            value={title}
                            onChange={this.handleChange} />
                    </label>
                    <label>
                        Description: <input name="description"
                            value={description}
                            onChange={this.handleChange} />
                    </label>
                    <label>
                        Image URL: <input name="url"
                            required
                            value={url}
                            onChange={this.handleChange} />
                    </label>
                    <label>
                        Link to More Info: <input name="wiki"
                            value={wiki}
                            onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add Image</button>
                </form>

            </div>
        )
    }




}