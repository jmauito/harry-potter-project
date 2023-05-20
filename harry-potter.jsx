const App = () => {
  const { useState, useEffect } = React;
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const url = "https://hp-api.onrender.com/api/characters";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data);
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const search = () => {
    const regex = new RegExp(query, "i");
    setFilteredData(data.filter((item) => regex.test(item.name)));
  };

  const formatWandInformation = (wand) => {
    return `wood of ${wand.wood}, core of ${wand.core} and ${wand.length} of length`;
  };

  return (
    <>
      <header>
        <div id="banner">
          <img id="img-banner" src="img/hp-1.jpeg" alt="School" />
          <div id="div-image-title">
            <h1 id="image-title">Harry Potter Characters list</h1>
            <p id="image-subtitle">
              Find information of characters of Harry Potter.
            </p>
            <p class="image-text">This project uses the <a href="https://hp-api.onrender.com/">HP-API.</a> </p>
            <div class="row">
              <div className="col-sm-12 py-2">
                <label className="search-label" htmlFor="search">
                  Name to search:
                </label>
              </div>
              <div className="col-sm-12 py-2">
                <input
                  id="search"
                  type="text"
                  onChange={handleChange}
                  placehoder="Character's name to search..."
                />
              </div>
              <div className="col-sm-12 py-2">
                <button className="btn btn-large btn-primary" onClick={search}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row mb-2">
          {filteredData.map((item) => (
            <div className="col-md-6" key={item.id}>
              <div className="characters-card row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative characters-card-container">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary">
                    {item.house}
                  </strong>
                  <h3 className="mb-0">{item.name}</h3>
                  <div class="mb-1 text-body-secondary">{item.dateOfBirth}</div>
                  <p class="card-text mb-auto">
                    <strong>Species:</strong> {item.species}
                  </p>
                  <p class="card-text mb-auto">
                    <strong>Gender:</strong> {item.gender}
                  </p>
                  <p class="card-text mb-auto">
                    <strong>Ancestry:</strong> {item.ancestry}
                  </p>
                  <p class="card-text mb-auto">
                    <strong>Wizard:</strong> {item.wizard}
                  </p>
                  <p class="card-text mb-auto">
                    <strong>Patronus:</strong> {item.patronus}
                  </p>
                  <p class="card-text mb-auto">
                    <strong>Wand:</strong> {formatWandInformation(item.wand)}
                  </p>
                </div>
                <div className="col characters-image-container">
                  <img
                    className="characters-image"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer class="center">
        <p>Jorge Mauricio Zárate</p>
        <p>MIT License</p>
        <h4 class="center">Follow me</h4>
        <div id="content-social-networks">
          <a href="https://www.linkedin.com/in/jorge-mauricio-z%C3%A1rate-ponce-95056618b">
            <img
              class="social-network-image"
              src="img/linkedIn_icon.png"
              alt=""
            />{" "}
          </a>
          <a href="https://twitter.com/jmauito">
            {" "}
            <img
              class="social-network-image"
              src="img/twitter_icon.png"
              alt=""
            />
          </a>
          <a href="https://www.facebook.com/JorgeMauricioZaratePonce/">
            {" "}
            <img
              class="social-network-image"
              src="img/facebook_icon.png"
              alt=""
            />{" "}
          </a>
          <a href="https://github.com/jmauito">
            {" "}
            <img
              class="social-network-image"
              src="img/github_icon.png"
              alt=""
            />{" "}
          </a>
        </div>
      </footer>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
