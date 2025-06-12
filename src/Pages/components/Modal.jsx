export default function Modal({ closeModal, data }) {
	return (
		<div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center z-50">
            <div className="bg-white !p-8 rounded-lg">
                <button className="btn btn--close" onClick={() => closeModal()}>
                X
                </button>
                <div className="modal__body">
                <h1 className="modal__title">
                    {data.name} {data.color}
                </h1>
                <h2 className="modal__subtitle">Having a website in 2021 is essential.</h2>
                <ul>
                    <span>How I will help you :</span>
                    <li>Discover together your goals through a strategy session</li>
                    <li>Discuss about the possible solutions to implement</li>
                    <li>A glorious online presence a.k.a. website</li>
                </ul>
                </div>
                <div className="modal__footer">
                <p>Wanna put your business out there ?</p>
                <button className="btn btn--main">{data.name}</button>
                </div>
            </div>
        </div>
	);
}