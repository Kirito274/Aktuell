import React from 'react';

class Counter extends React.Component{
    constructor(props) {
        super(props);
        /*ToDO: Setze hier den initialen state von counter auf 0 */
        this.state = {
            count: 0
        }
    }

    increaseCounter = () => {
        /*ToDO: Erhöhe hier den aktuellen state von counter um +1 */

        this.setState({count: this.state.count + 1});
    };

    render = () => {
        return (
            <div>
                <button onClick={this.increaseCounter}>Like Counter</button>
                <div>Peter hat: {this.state.count} Likes</div>
            </div>
        );
    }
}

export default Counter