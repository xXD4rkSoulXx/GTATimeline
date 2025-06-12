import GTAIIIPic from '../assets/GTAIIIPic.jpg';
import GTAViceCityPic from '../assets/GTAViceCityPic.jpg';
import GTASanAndreasPic from '../assets/GTASanAndreasPic.png';
import GTAIVPic from '../assets/GTAIVPic.jpg';
import GTAVPic from '../assets/GTAVPic.jpg';
import GTAVIPic from '../assets/GTAVIPic.webp';

export default function TimelineTrigger({ x, y, data }) {
	if (data === undefined) {
		return null;
	}

	let image = '';
	switch (data.name) {
		case 'openGTA_I':
			image = GTAIIIPic;
			break;
		case 'openGTA_II':
			image = GTAViceCityPic;
			break;
		case 'openGTA_III':
			image = GTASanAndreasPic;
			break;
		case 'openGTA_IV':
			image = GTAIVPic;
			break;
		case 'openGTA_V':
			image = GTAVPic;
			break;
		case 'openGTA_VI':
			image = GTAVIPic;
			break;
	}

	return (
		<foreignObject x={x} y={y} className="relative w-27 h-27">
			<img onClick={data} src={image} className="w-full h-full rounded-full cursor-pointer" />
		</foreignObject>
	);
}