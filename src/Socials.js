import React, { Component } from 'react';
import SOCIALS from './data/socialProfiles';

// SocialProfile component 
class SocialProfile extends Component {
    render() {
        const { link, image } = this.props.socialProfile;

        return(
            <div style={{ display: 'inline-block', margin: (0, 5) }}>
                {/* a clickable link image */}
                <a href={ link }>
                    <img src={ image } alt='social-profile' style={{ width:35, height:35 }} />
                </a>
            </div>
        )
    }
}

// SocialProfiles component
class SocialProfiles extends Component {
   render() {
       return (
            <div> 
                <h2>Connect with me</h2>
                    {/* a div for all socila profiles.*/}
                    <div>
                        {
                            // we will map function the Social array to create a new array of JSX.
                            // inside of the finction we have a call back with one parameter at a time SOCIAL object from SOCIALS array
                            SOCIALS.map(SOCIAL => {
                                //then, for each object we will return SocialProfile component.
                                // and passing down the socialProfile object as data through props (socialProfile), that is equal to the object (SOCIAL) itself.
                                return <SocialProfile key={SOCIAL.id} socialProfile={SOCIAL} />
                            })
                        }
                    </div>   
            </div>
       )      
   } 
}

export default SocialProfiles;