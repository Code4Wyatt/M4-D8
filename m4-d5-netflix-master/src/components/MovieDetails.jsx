import { useEffect } from "react"

const MovieDetails = (props) => {
    const [movieId, setMovieId] = useState('')

    useEffect(() => {
        let retrievedIdFromURL = match.params.movie.imdbID

        let foundMovie = items.find(movie => movie.imdbID.toString() === retrievedIdFromURL)
        console.log(foundMovie)
        setMovieId(foundMovie)
    })

    return (
        <Container>
            <div class="jumbotron">
                <h1 class="display-4">Hello, world!</h1>
                    <img src="{props.movie.Poster}"></img>
                    <hr class="my-4">
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
        </Container>
    )

}