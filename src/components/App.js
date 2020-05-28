import React,{Component} from 'react';
import Projects from '../assets/Projects';
import SocialProfile from '../SocialProfiles';
import Title from './Title.';
//import Header from './Header';
import profile from '../assets/profile.jpg';




class App extends Component{
    state={displayBio: false};
    
  
    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    }
    render (){ 
        return(
            <div>
                <Header />
                <img src={profile} alt='profile' className="profile"/>
                <h1>Hello!</h1>
                <p>My name is Sibashish biswas. </p>
                <Title />
                <p>I am always looking forward to working on meaningful project.</p>
                {
                    this.state.displayBio ?(
                        <div>
                          <p>I live in India, and i code everyday</p>
                          <p>My favourate language is JavaScript,and i think React.js is awesome.</p>
                          <p>Besides coding , i also love music and playing cricket!</p>
                          <button onClick={this.toggleDisplayBi}>Show less</button>
                        </div>
                      ):(
                          <div>
                              <button onClick={this.toggleDisplayBi}>Read more</button>
                          </div>
                      )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfile />
            </div>
            
           
        )
    }
}

//const AppWithHeader = () =>{
  //  return(
    //    <Header Component={App}/>
    //)
//}
//export default AppWithHeader;
 export default App;