import { gql, useQuery } from "@apollo/client";

const GET_MOVIES = gql`
    {
        movies {
            id
            medium_cover_image
        }
    }
`;
function Home() {
    const { loading, error, data } = useQuery(GET_MOVIES);
    console.log(loading, error, data);

    return <h1>Home</h1>;
}

export default Home;
