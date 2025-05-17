import './kartice.css'
import sandDune from './assets/sandDune.jpg';
function Kartica(supa) {
  return (
    <div className="sve">
    <div className="slidza">
        <img src={sandDune} alt="nema sad xiaomi"/>
    </div>
    <div className="sredina">
      <h4  style={{color:supa.bojaText}}>{supa.h4}</h4>
      <h1>{supa.h1}</h1>
      <p>Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad 
          minim veniam, quis nostrud 
          exercitation ullamco laboris nisi 
          ut aliquip ex ea commodo consequat</p>
      </div>
    <div className="down" style={{backgroundColor:supa.boja}}>
      <div className="isti">
          <h2>{supa.reads}</h2>
          <p>Reads</p>
      </div>
      <div className='isti'>
         <h2>{supa.views}</h2>
          <p>Views</p>
        </div>
      <div className="isti">
         <h2>{supa.comments}</h2>
          <p>Comments</p>
        </div>
      </div>
    </div>

  )
}

export default Kartica
