import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import face from './icon.png';
const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 115, width: 150 }} >
			<div className="Tilt-inner pa3"> 
				<img style={{paddingTop:'5px'}} alt="" src={face}/> 
			</div>
			</Tilt>

		</div>
		);
}

export default Logo;