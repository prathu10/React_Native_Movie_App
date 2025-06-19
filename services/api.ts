export const TMDB_CONFIG ={
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchMovies = async ( { query } :{ query: string}) => {

    const endpoint = query
        ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        :`${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`; //this will give the most popular MOVIES
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    });

    if(!response.ok){
        // @ts-ignore
        throw new Error('Something went wrong', response.statusText);
    }

    const data = await response.json();
    return data.results;

}

export const fetchMovieDetails = async (movieId: string): Promise<MovieDetails > => {
    try {
        const response = await fetch(`${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`, {
            method: 'GET',
            headers: TMDB_CONFIG.headers,
        } );

        if(!response.ok) throw new Error('Failed to fetch movie details');
        const data = await response.json();
        return data;


    } catch (error) {
        console.log(error);
        throw error;
    }
}







// const url = 'https://api.themoviedb.org/3/keyword/keyword_id/movies?include_adult=false&language=en-US&page=1';
// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzEzOGI1ZTdiYzc2ZGZhN2NjODc5MmM2NTU4OWEyNyIsIm5iZiI6MTc0NjQzMTIzNy4wMzUsInN1YiI6IjY4MTg2ZDA1MmRjNzMxZWQ0OTA4YTVjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a6-_azpZ4GHHa-8YCRXi8sAm8PBynrrBmzuKrEn5pYk'
//     }
// };
//
// fetch(url, options)
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.error(err));