import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeleteImage from './DeleteImage'


export default class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,

        }

    }
    static propTypes = {
        images: PropTypes.array.isRequired,

    }


    nextBunny(index) {
        const arrayLength = this.props.images.length;
        index++;
        if (index > arrayLength - 1) {
            index = 0;
        }
        this.setState({ index });
    }

    previousBunny(index) {
        const arrayLenth = this.props.images.length;
        index--;
        if (index < 0) {
            index = arrayLenth - 1;
        }
        this.setState({ index });
    }



    render() {
        const { index } = this.state;
        const image = this.props.images[index];


        if (!this.props.images.length) {
            return null;
        }
        return (
            <div>
                <span className='arrow' style={{
                    fontSize: '50px',
                    cursor: 'pointer',


                }}
                    onClick={() => this.previousBunny(index)}>
                    &larr;
                </span>

                <span className='arrow' style={{
                    fontSize: '50px',
                    cursor: 'pointer',
                }}
                    onClick={() => this.nextBunny(index)} >
                    &rarr;
                </span>

                <div>
                    <img className='images' src={image.url} alt="skateboarder" />
                    <p className='image-caption'>{image.title}</p>
                    <p className='image-caption'>{image.description} </p>
                    <DeleteImage onDelete={() => this.props.onDelete(image._id)} />
                </div>
                


            </div>
        )
    }
}

