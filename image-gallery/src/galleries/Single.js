import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Single extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,

        }

    }

    static PropTypes = {
        images:PropTypes.array.isRequired
    };
    //Two ways to use onClick: 
    //1:  onClick={this.previousBunny}....changes the context of this so must bind even in own component
    //2.   onClick={() =>  this.nextBunny(index)} > no need to bind because arrow function binds lexically//
    nextBunny(index) {
        const arrayLength = this.props.images.length;
        index++;
        if (index > arrayLength -1) {
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
                <span className='nextBunny' style={{
                    fontSize: '50px',
                    cursor: 'pointer'

                }}
                    onClick={() => this.previousBunny(index)}>
                    &larr;
                </span>

                <span className='previousBunny' style={{
                    fontSize: '50px',
                    cursor: 'pointer',
                }}
                    onClick={() => this.nextBunny(index)} >
                    &rarr;
                </span>

                <div>
                    <img className='images' src={image.url} alt='' />
                    <p>{image.title}</p>
                    <p>{image.description} </p>
                </div>

                
            </div>
        )
    }
}

