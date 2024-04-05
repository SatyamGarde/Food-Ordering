import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);

    // console.log("child constructor")
    this.state = {
        userInfo:{
        name: "Dummy",
        location:"Default",
        }
    };
  }

 async componentDidMount(){
    // console.log('child componentDidMount')
    const data =await fetch("https://api.github.com/users/satyamgarde");
    const json = await data.json();

    this.setState({
        userInfo: json,
    });
    console.log(json);    
  }

  render() {
    // console.log("Child render")
    const { name, location,avatar_url
    } = this.state.userInfo;
    return (
      <div>
      {/* console.log("child render") */}
        <div className="btn">
          
        </div>
        <img src={avatar_url
}/>
        <li>{name}</li>
        <li>{location}</li>
      </div>
    );
  }
}

export default Userclass;
