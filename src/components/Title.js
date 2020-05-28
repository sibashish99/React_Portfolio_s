import React, {Component} from 'react';

const TITLES=[
    'Prodution and Industrial Engineer',
    'A music lover',
    'Entthusiastic in UI/UX',
    'An adventure seeker'
];

class Title extends Component{
    state = {titleIndex : 0 , fadeIn: true};

    componentDidMount(){
            
        this.timeout = setTimeout(() => this.setState({fadeIn : false}), 2000);   
        this.animateTitles();
    }
    
    animateTitles = () => {
        this.titleInterval = setInterval(() =>{
             const titleIndex = (this.state.titleIndex + 1)% TITLES.length;
             this.setState({titleIndex , fadeIn: true});
             setTimeout(() => this.setState({fadeIn : false}), 2000);  
         },4000);
    }
    componentWillUnmount(){
       clearInterval(this.titleInterval);
       clearTimeout(this.timeout);
    }

    render(){

        const{fadeIn: titleIndex} = this.state;
        const title = TITLES[titleIndex];

        return(
            <p className={fadeIn? 'title-fade-in' : 'title-fade-out'}> I am {title}</p>
        )
            
        
    }
}
export default Title;