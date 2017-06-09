import React, { Component } from 'react';

export default class AddImage extends Component {
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

//reset to clear fields after adding a new image
    reset() {
        this.setState({
            title: '',
            description: '',
            url: '',
            wiki: ''
        })
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        const { title, description, url, wiki } = this.state;

        return (
            <div className="add-image">
                <h2>Add An Image:</h2>
                <form onSubmit={event => {
                    event.preventDefault();
                    this.props.handleAdd(this.props.albumId, this.state);
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