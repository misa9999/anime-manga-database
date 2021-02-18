function MainContent() {
  return (
    <main>
      <div className="main-head">
        <form className="search-box">
          <input 
            type="search"
            placeholder="Search for an anime..."
            required
          />
        </form>
      </div>
    </main>
  )
}

export default MainContent