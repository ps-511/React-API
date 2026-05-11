function Search({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search users..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search"
    />
  );
}

export default Search;