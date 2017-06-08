import React, { Component } from 'react';
import List from './List';
import Gallery from './Gallery';
import Thumbnail from './Thumbnail';
import Intro from './IntroView'
import PropTypes from 'prop-types';
import AddImage from './AddImage'


export default class Veiw extends Component {

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
            <div className="header-container">
                <header className="header-title"
                    onClick={() => this.changeView(Intro)}>
                    <h1 > The Zephr Originals. </h1>
                    <h2>Z-Girls & Z-Boys of the 70's</h2>
                </header>

                <span>
                    <button className="view-buttons"
                        onClick={() => this.changeView(List)}
                    >CHECK OUT LIST VIEW</button>
                </span>
                <span>
                    <button className="view-buttons"
                        onClick={() => this.changeView(Thumbnail)}
                    >CHECK OUT THUMBNAIL VIEW</button>
                </span>
                <span>
                    <button className="view-buttons"
                        onClick={() => this.changeView(Gallery)}>CHECK OUT GALLERY VIEW</button>
                </span>


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

//Q: I want to create delete button component at add to all three views...how do I pass onDelete to delete button as props?
// line 58 if both are t