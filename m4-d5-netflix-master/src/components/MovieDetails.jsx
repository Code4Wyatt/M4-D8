import { useEffect } from "react"

const MovieDetails = () => {
    const [movieId, setMovieId] = useState('')

    useEffect(() => {
        let retrievedIdFromURL = match.params.movieId

        let foundMovie = items.find(movie => movie.id.toString() === retrievedIdFromURL)
        console.log(foundMovie)
        setMovieId(foundMovie)
    })

}