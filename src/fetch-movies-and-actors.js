//Links to our database;
const URL_FETCH_MOVIES =
  "https://my-json-server.typicode.com/dusanmitrovic98/dev_rwa2/movies/";
const URL_FETCH_ACTORS =
  "https://my-json-server.typicode.com/dusanmitrovic98/dev_rwa2/actors/";

export async function getMovies() {
  return await (await fetch(URL_FETCH_MOVIES)
    .catch(errorHandler))
      .json();
}

export async function getMoviesById(movieId) {
  return await (await fetch(URL_FETCH_MOVIES + movieId)
    .catch(errorHandler))
      .json();
}

export async function getActors() {
  return await (await fetch(URL_FETCH_ACTORS)
    .catch(errorHandler))
      .json();
}

export async function getActorsById(actorId) {
  return await (await fetch(URL_FETCH_ACTORS + actorId)
    .catch(errorHandler))
      .json();
}

function errorHandler(error) {
  console.warr(error);
  let response = new Response(
    JSON.stringify({
      message: "fetch error!"
    })
  );
  return response;
}
