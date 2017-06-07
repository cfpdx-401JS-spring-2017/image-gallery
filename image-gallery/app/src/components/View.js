import React, { Component } from 'react';
import Intro from './IntroView'
import PropTypes from 'prop-types';
import AddImage from './AddImage'



export default class View extends Component {

    constructor(props) {
        super(props);

        this.state = {
            CurrentView: Intro
        }

    }
    //use static if defining proptypes within the class.  
    // if function  statement looks like: View.propTypes.string.isrequired
    static propTypes = {
        images: PropTypes.array.isRequired,
        onDelete: PropTypes.func.isRequired,
        handleAdd: PropTypes.func.isRequired
    }

    changeView(View = Intro) {
        this.setState({ CurrentView: View });
    }


    render() {

        const { CurrentView } = this.state;
        return (
            <div>

                <CurrentView
                    images={this.props.images}
                    onDelete={this.props.onDelete}
                    handleAdd={this.props.handleAdd} />

                {CurrentView !== Intro &&  
                <div className="control">
                    <AddImage handleAdd={this.props.handleAdd}
                    />
                </div>}

            </div>

        )
    }

}

//Q: do I need <AddImage in this component?