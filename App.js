import "./App.css";

function home_page(){
  return(
    <>
    <div className="logo"></div>
    <div className="top-left">Mavtrix</div>
    <div className="name">Mavtrix</div>

    <div className="content">First Indian video conferencing application with sound spatilisation features</div>
    
    <button className="join">Join</button>
    </>
  )
}

export default function page2(){
  return(
    <>
      <div className="logo"></div>
      <div className="top-left">Mavtrix</div>
      <div className="heading">Get these additional features: </div>
      <div className="points">Remote Learning</div>
      <div className="points">Scheduled Meetings</div>
      <div className="points">Immersive Presentation</div>
      <div className="points">Increases Engagement</div>
      <div className="points">Privacy Enhancement</div>
      <div className="points">Immersive Sound</div>
      <div className="points">Sound Spatialization</div>
      <div className="points">Realistic Speaker Movement</div>
      <div className="points">Remote Team Collaboration</div>
      <div className="right-box">
        <button className="signin">Sign in with Google</button>
      </div>
    </>
  )
}

// export default home_page