import { useState } from 'react';
import Modal from './components/Modal';

export default function Index() {
	const [modal, setModal] = useState({ show: false, data: null });

	const GTA_I = { name: 'GTA I', color: 'red' };
	const GTA_II = { name: 'GTA II', color: 'blue' };
	const GTA_III = { name: 'GTA III', color: 'green' };
	const GTA_IV = { name: 'GTA IV', color: 'yellow' };
	const GTA_V = { name: 'GTA V', color: 'purple' };
	const GTA_VI = { name: 'GTA VI', color: 'orange' };

	const openGTA_I = () => {
		setModal({ show: true, data: GTA_I });
	};

	const openGTA_II = () => {
		setModal({ show: true, data: GTA_II });
	};

	const openGTA_III = () => {
		setModal({ show: true, data: GTA_III });
	};

	const openGTA_IV = () => {
		setModal({ show: true, data: GTA_IV });
	};

	const openGTA_V = () => {
		setModal({ show: true, data: GTA_V });
	};

	const openGTA_VI = () => {
		setModal({ show: true, data: GTA_VI });
	};

	const handleClose = () => {
		setModal({ show: false, data: null });
	};

	return (
		<div className="main">
			{/* Buttons */}
			<button className="cursor-pointer" onClick={openGTA_I}>
				GTA I
			</button>
			<button className="cursor-pointer" onClick={openGTA_II}>
				GTA II
			</button>
			<button className="cursor-pointer" onClick={openGTA_III}>
				GTA III
			</button>
			<button className="cursor-pointer" onClick={openGTA_IV}>
				GTA IV
			</button>
			<button className="cursor-pointer" onClick={openGTA_V}>
				GTA V
			</button>
			<button className="cursor-pointer" onClick={openGTA_VI}>
				GTA VI
			</button>

			{/* Modal */}
			{modal.show && modal.data && <Modal closeModal={handleClose} data={modal.data} />}
		</div>
	);
}
