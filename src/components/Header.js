import Img02 from '../assets/images/img-02.png';

function Header({ value, name }) {
  console.log(value)
  return (
    <header className={value} >
      <h1 className={value ? "title-home" : ''}><strong>{name}</strong>Database</h1>
      {value && <img src={Img02} alt="" className="img-home" />}
    </header>
  )
}

export default Header;