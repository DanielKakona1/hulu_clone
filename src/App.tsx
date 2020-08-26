import React, { useState } from 'react';
import { Header, Nav, Results } from './components';
import './App.css';
import requests from './request';

function App() {
	const [
		selectedOption,
		setSelectedOption
	] = useState(requests.fetchTrending);
	return (
		<div className="app">
			{/* Hedaer */}
			<Header />
			{/* Nav */}
			<Nav setSelectedOption={setSelectedOption} />
			{/* Results */}
			<Results selectedOption={selectedOption} />
		</div>
	);
}

export default App;
/* 
1e388a8bd3d3cc0179ba2398f9712002

eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTM4OGE4YmQzZDNjYzAxNzliYTIzOThmOTcxMjAwMiIsInN1YiI6IjVmNDYxYTdiNzFmMDk1MDAzMzgxMDViZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.37Z0uOZQXCDirdd_6BsMSBcMLRaHZAfCl6H54JMfWII */
