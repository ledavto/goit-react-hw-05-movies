import axios from 'axios';
import Notiflix from 'notiflix';

// npm i axios
// npm i notiflix
// npm install react-router-dom

//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTkyMWRkYzRjZDhjZjUyODE4ZTMwNmFiM2U0OTk2YSIsInN1YiI6IjY1NjQ1NWQyN2RmZGE2NTkzMDRjNDcwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ndAqmE3xxQaeU7y34bJAU7IErqXNVjvShsnsEpx0nMY
//key API =61921ddc4cd8cf52818e306ab3e4996a

// https://api.themoviedb.org/3/trending/all/day
//https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

class Api {
  #BASE_URL = 'https://api.themoviedb.org/3/';
  #KEY_API = '61921ddc4cd8cf52818e306ab3e4996a';

  async getData(url) {
    const response = await axios.get(url);
    return response.data;
  }

  handleError(error) {
    Notiflix.Notify.failure(error.response.data.message);
  }

  async getMovieReviews(movId) {
    try {
      return await this.getData(
        `${this.#BASE_URL}/movie/${movId}/reviews?language=en-US&api_key=${
          this.#KEY_API
        }`
      );
    } catch (error) {
      this.handleError(error);
    }
  }

  async getMovieCredits(movId) {
    try {
      return await this.getData(
        `${this.#BASE_URL}/movie/${movId}/credits?language=en-US&api_key=${
          this.#KEY_API
        }`
      );
    } catch (error) {
      this.handleError(error);
    }
  }

  async getMovieDetail(movId) {
    try {
      return await this.getData(
        `${this.#BASE_URL}movie/${movId}?language=en-US&api_key=${
          this.#KEY_API
        }`
      );
    } catch (error) {
      this.handleError(error);
    }
  }

  async getSearch(params, page) {
    try {
      return await this.getData(
        `${this.#BASE_URL}/search/movie?api_key=${
          this.#KEY_API
        }&query=${params}&include_adult=false&language=en-US&page=${page}`
      );
    } catch (error) {
      this.handleError(error);
    }
  }

  async getTrend() {
    try {
      return await this.getData(
        `${this.#BASE_URL}trending/all/day?api_key=${this.#KEY_API}`
      );
    } catch (error) {
      this.handleError(error);
    }
  }
}

const api = new Api();
export default api;
