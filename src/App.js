import React, { Component } from 'react';


class App extends Component {
    state = {dispalyBio: false}
    /*
    // like a builder, it's a method that allows us to define the App properties.
    constructor() {
        super();
        this.state = { dispalyBio: false }; 

        // must be in the constructor block to connect the state of the component with "bind".
        this.toggleDispalyBio = this.toggleDispalyBio.bind(this)
    }

    */    
    // toggleDispalyBio is a method, when the user click more text will appear/disappear.
    // means, it will set the state to its oppsite value.
    // again, the input must be writtwn as a object
    toggleDispalyBio = () => {
        this.setState({ dispalyBio: !this.state.dispalyBio });
    }

    render() {
        // let's write a ternary expression, 
        // the "?" will start the expression and the first value will be the true case 
        //  the ":" means if not (false) --> if(this.state.dispalyBio === false) do not show the content of {bio}
        const bio = this.state.dispalyBio ? (
                <div>
                    <p>Located in D.C. metro area. I code every day!</p>
                    <p>My favorite framewotkrk is React.JS</p>
                    <button onClick={this.toggleDispalyBio}>Show less</button>
                </div>
                ) : (
                    <div>
                        <button onClick={this.toggleDispalyBio}>Read more</button>
                    </div>
                )
    
        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Eliram, I'm a developer</p>
                { bio }
            </div>
        )
    }
}

export default App;

