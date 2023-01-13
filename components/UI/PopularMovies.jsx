import Link from "next/link";
import Image from "next/image";
import classes from "../../styles/popularmovies.module.css";

export default function PopularMovies({ movies }) {
  return (
    <div className="classes.popular">
      <h2>Popular Movies</h2>
      <div className="classes.popular-inner">
        {movies.results.map((movie, index) => (
          <Link key={index} href={`/movies/${movie.id}`}>
            <h3>{movie.title}</h3>
            <Image className="classes.img"
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
              alt="{movie.title}"
            />
          </Link>
        ))}
      </div>
      {/* <style jsx>{`
        .popular {
          width: full; 
          margin: 0 auto;
          padding: 30px 30px;
          img {
            display: flex;
            padding: 10px 10px;
            border-radius: 40px;
          }
          h2 {
            text-align: center;
            font-size: 40px;
            margin-bottom: 20px;
          }
          .popular-inner {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            
            a {
              width: calc(25% - 10px);
              position: relative;
              h3 {
                display: flex;
                text-align: center;
                font-size: 40px;
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                color: #fff;
                background: linear-gradient(to top, #000, transparent);
                padding: 50px 20px 20px 20px;
              }
             
            }
            
          }
        }
      `}</style> */}
    </div>
  );
}
