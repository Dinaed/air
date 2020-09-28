import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css"
import './quality.scss';



mapboxgl.accessToken = 'pk.eyJ1IjoiZGluYWVkIiwiYSI6ImNrZm02b2I3aDA5a3kycm54cHpocHAxa3UifQ.Vp_Ufn9HjBnvmZtgUEyMAg'
const MapboxLanguage = require('@mapbox/mapbox-gl-language');

const Quality = () => {
	const mapContainer = useRef(null);
	const [locationInfo] = useState({
		lng: 31,
		lat: 48.3,
		zoom: 5
	});
	
	
	useEffect( () => {
		const map = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v10',
			center: [locationInfo.lng, locationInfo.lat],
			zoom: locationInfo.zoom
		});
		const language = new MapboxLanguage();
	 	map.addControl(language);
	}, [])
	 
	return (
		<section className="quality" id="quality">
			<div className="container">
				<h2 className="quality-title">Индекс качества воздуха в режиме реального времени</h2>
				<div className="quality-map" ref={mapContainer}>
					
				</div>
				<p className="quality-text">Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга на карте выше.</p>
			</div>
		</section>
	);
};

export default Quality;
