import React, { ReactElement } from 'react';
import './VideoCard.css';
import { ThumbUpSharp } from '@material-ui/icons';
var TextTruncate = require('react-text-truncate');

const base_url = 'https://image.tmdb.org/t/p/original/';

interface Props {
	movie: {
		backdrop_path?: string;
		poster_path?: string;
		release_date?: string;
		first_air_date?: string;
		overview: string;
		title?: string;
		original_name?: string;
		vote_count: string;
		media_type?: string;
	};
}

function VideoCard({ movie }: Props): ReactElement {
	return (
		<div className="videocard">
			<img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="movie" />
			<TextTruncate line={2} element="p" truncateText="..." text={movie.overview} />

			<h2>{movie.title || movie.original_name}</h2>
			<p className="videocard__stats">
				{movie.media_type && `${movie.media_type} .`}
				{movie.release_date || movie.first_air_date} .
				<ThumbUpSharp />   {movie.vote_count}
			</p>
		</div>
	);
}

export default VideoCard;
