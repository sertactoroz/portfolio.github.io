import Head from 'next/head';

export default function MovieDetails({moviedetails}) {

	return (
		<div className="movie">
			<Head>
				<title>{moviedetails.title}</title>
			</Head>
			<div className="cover"
			     style={{backgroundImage: `url(https://www.themoviedb.org/t/p/original${moviedetails.backdrop_path})`}}></div>
			<h3>{moviedetails.title}</h3>
			<div className="summary">
				{moviedetails.overview}
			</div>
			<style jsx>{`
              .movie {
                width: full;
                margin: 0 auto;
                position: relative;
                padding: 20px;

                h3 {
                  font-size: 30px;
                  font-weight: bold;
                  margin-bottom: 20px;
                }

                .summary {
                  font-size: 18px;
                  color: #666;
                  line-height: 1.7;
                }

                .cover {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 600px;
                  background-size: cover;
                  opacity: .3;
                  z-index: -1;

                  &::before {
                    content: '';
                    background: linear-gradient(to bottom, transparent, #ddd);
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                  }
                }
              }
			`}</style>
		</div>
	)
}

export async function getServerSideProps({params}) {
	const request = await fetch(`https://api.themoviedb.org/3/movie/${params.url}?api_key=3044afc915e1301ae1d9551614db3711&language=tr-TR`)
	const moviedetails = await request.json()

	return {
		props: {
			moviedetails,
		},
	}

}