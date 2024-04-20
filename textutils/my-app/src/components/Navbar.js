import React,{useState} from 'react'

function Navbar(props){
    const [mode,setMode] = useState('light');
    const changeMode = ()=>{
        let modele = document.getElementById('modech');
        
        if(mode === 'light'){
            setMode('dark');
            modele.style.filter = 'invert(100%)'
            document.body.style.backgroundColor = "#3d3d3d"
            document.body.style.color = "white"
        }
        else{
            setMode('light');
            modele.style.filter = 'invert(0%)'
            document.body.style.backgroundColor = "white"
            document.body.style.color = "black"
        }
    }

    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div className="container-fluid">
    <a id="navbar" className="navbar-brand mx-3" href="#navbar">{props.brand}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <img id='modech' className='mx-2' src="mode.svg" alt="" width="40" height="40" onClick={changeMode}/>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar