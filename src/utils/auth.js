class Auth {
    constructor(url) {
      this._url = url;
      
    }
    nowPlaying() {
        return fetch(`${this._url}/now-playing`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({})
        }).then(response => response.json());
      }
    popular() {
        return fetch(`${this._url}/popular`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({})
        }).then(response => response.json());
      }
      topRated() {
        return fetch(`${this._url}/top-rated`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({})
        }).then(response => response.json());
      }
      upcoming() {
        return fetch(`${this._url}/upcoming`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({})
        }).then(response => response.json());
      }
    }
    const auth = new Auth(
        "http://localhost:3001" //acá no se que poner
      );
      
      export default auth;