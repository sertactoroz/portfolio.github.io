import { useRouter } from 'next/router';
import PopularMovies from '../../components/UI/PopularMovies';

function Movies({moviedata}) {
    const router = useRouter()
	const { url } = router.query
	return (
			<PopularMovies movies={moviedata} />
	)
}

export async function getServerSideProps() {
	const request = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3044afc915e1301ae1d9551614db3711&language=en-US&page=1`);
	const moviedata = await request.json();
	return {
		props: {
			moviedata,
		},
	}
}
export default Movies;


