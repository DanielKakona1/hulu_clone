import React, { ReactElement, useState } from 'react';
import axios from '../../axios';
import './Results.css';
import VideoCard from './VideoCard/';
import FlipMove from 'react-flip-move'
interface Props {
	selectedOption: string;
}

function Results({ selectedOption }: Props): ReactElement {
	const [
		movies,
		setMovies
	] = useState([]);

	React.useEffect(
		() => {
			const fetchData = async () => {
				const response = await axios.get(selectedOption);
				setMovies(response.data.results);
				return response;
			};
			fetchData();
		},
		[
			selectedOption
		]
	);

	return <div className="results">
<FlipMove>
{movies.map((movie, index) => <VideoCard key={index} movie={movie} />)}
</FlipMove>
    </div>;
}

export default Results;
