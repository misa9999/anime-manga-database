function Header({ value, name }) {
  console.log(value)
  return (
    <header className={value} >
      <h1><strong>{name}</strong>Search</h1>
    </header>
  )
}

export default Header;