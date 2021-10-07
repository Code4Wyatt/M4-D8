import { useEffect, useState } from "react"
import { useParams } from "react-router"

const MovieDetails = () => {
    const [details, setMovieDetails] = useState(null);
    const [comments, setComments] = useState([]);

    const params = useParams

    useEffect(() => {
        const retrievedFromURLId = async () => {
            let resp = await fetch("http://www.omdbapi.com/?apikey=86c3b5f5&i=" + match.params.movieID)
        };

        if (resp.ok) {
            let data = await resp.JSON();
            console.log({ data })
            setMovieDetails(data)
        } else {
            console.log("Error")
        } catch (error) {
            console.log(error.message);
        };
        
    });
};

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