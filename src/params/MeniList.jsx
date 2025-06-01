import { Link } from "react-router-dom"
import { jela } from "./MeniData.jsx"

const MeniList = () => {
  const styles = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '10px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    listStyleType: 'none',
  }
  return (
    <div>
      <h2>Meni</h2>
      <ul >
        {jela.map(jelo => (
          <li key={jelo.id} style={styles}>
            <Link to={`/${jelo.id}`} style={{ textDecoration: "none", }}>
              <h5 style={{ color: "black" }}>{jelo.name} - {jelo.price}</h5>
            </Link>
          </li>
        ))}
      </ul>
    </div >
  )
}

export default MeniList
