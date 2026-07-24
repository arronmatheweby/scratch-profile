import "./menu-bar.css"

function Menu (){
    return(
     <nav className="menu-bar">
        <div className="scratch-logo">
            <img width={100} src="https://scratch.mit.edu/images/logo_sm.png" />
        </div>
        <ul className="menu-items">
            <li>About</li>
            <a target="_blank" href="https://scratch.mit.edu/users/ArronEby/"><li>scratch</li></a>
            <a target="_blank" href="https://penguinmod.com/profile?user=codebuster"><li>Penguinmod</li></a>
            <a target="_blank" href="https://turbowarp.org/"><li>Turbowarp</li></a>
        </ul>
     </nav>
    )
}

export default Menu