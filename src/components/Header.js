import Img02 from '../assets/images/img-02.png';
import Img03 from '../assets/images/img-03.png';

function Header({ value, name }) {
  console.log(value)
  return (
    <header className={value} >
      <h1 className={value ? "title-home" : ''}><strong>{name}</strong>Search</h1>
      {value && <img src={Img02} alt="" className="img-home" />}
    </header>
  )
}

export default Header;