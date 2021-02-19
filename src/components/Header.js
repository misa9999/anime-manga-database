import Img01 from '../assets/images/img-01.png';

function Header({ value, name }) {
  console.log(value)
  return (
    <header className={value} >
      {value && <img src={Img01} alt="" className="img-home" />}

      <h1><strong>{name}</strong>Search</h1>
    </header>
  )
}

export default Header;