class ApiMovie{
    constructor(url, token) {
        this._url = url;
        this._token = token;
      }
    
    setToken(token) {
        this._token = `Bearer ${token}`;
    }

    getPopular() {
        return fetch(`${this._url}popular?api_key=${this._token}`, {
          headers: {         
            "Content-Type": "application/json",
          },
        }).then((response) => response.json());
      }

      getNowPlaying() {
        return fetch(`${this._url}now_playing?api_key=${this._token}`, {
          headers: {         
            "Content-Type": "application/json",
          },
        }).then((response) => response.json());
      }

      getTopRated() {
        return fetch(`${this._url}top_rated?api_key=${this._token}`, {
          headers: {         
            "Content-Type": "application/json",
          },
        }).then((response) => response.json());
      }

      getUpcoming() {
        return fetch(`${this._url}upcoming?api_key=${this._token}`, {
          headers: {         
            "Content-Type": "application/json",
          },
        }).then((response) => response.json());
      }
}
const api = new ApiMovie(
  "https://api.themoviedb.org/3/movie/",     // creo que es asi, puede que sea hasta el numero y no todo
  "01c5bfaae82ff6953f7d7793e8b41dc1"        //¿esta bien cambiarlo por el token de mi api terceros?
);

export default api;