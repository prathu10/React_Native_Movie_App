export const TMDB_CONFIG ={
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchMovies = async ( { query } :{ query: string}) => {

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