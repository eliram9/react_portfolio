import React, { Component } from 'react';
import PROJECTS from './data/projects';

class Projects extends Component {
    render() {
        return (
            <div>
                <h2>Projects</h2>
                <div>
                    { /* instead of calling to every project in our array we will use .map function!
                    we will use this function on the properties array to import the original array into 
                    a new array that consist a lot of JSX objects.
                    it means with map function we can transform project data items to indiviual pieces and render them. */}
                    {/*inside of the function we have also a call back function to pass into the map and
                    the actual parameter ((PROJECT)) to the call back of each project one at the time*/}

                    {
                        PROJECTS.map(PROJECTS => {
                            return(
                                <div>{PROJECTS.title}</div>
                            );
                        })  
                    }
                </div>
            </div>
        )
    }
}

export default Projects; 