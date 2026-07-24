import "./header.css"
import profile from "./user_profile.png" 

function Header (){
    return(
      <header className="header">
        <div>
        <div className="heading">
            <div className="p1">
            <img src={profile} alt="user_profile"/>
            <h1>ArronEby</h1><br/>
            </div>
            <p>Scratcher, Joined 1 year ago<br/> India</p>
            </div>
            <div className="about">
                <h1>About me</h1>
                <p>Hey there! welcome to my own Profile i will<br></br>
                be active once in a month. I will upload more projects then in<br/>
                Penguinmod or Scratch or Cocrea.
                </p>
            </div>
        </div>
      </header>
    )
}
export default Header