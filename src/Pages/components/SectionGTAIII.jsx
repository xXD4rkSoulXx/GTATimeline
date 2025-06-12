import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Observer } from 'gsap/Observer';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import GTAIII_Intro from '../assets/GTAIII_Intro.mp4';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, Observer, ScrollToPlugin);

function SectionGTAIII({ setModalOpen, content }) {
	let splitTitle = [];
	let splitDescription = [];
	
	const GTAIII = useRef(null);
	
	useGSAP(() => {
		gsap.from(GTAIII.current, {
			y: '100vh',
			duration: 2
		});
		
		gsap.utils.toArray('section').forEach((el, i) => {
			if(i != 0) {
				/*Observer.create({
					type: "wheel, touch, pointer",
					onDown: () => {
						if(i !== (gsap.utils.toArray('section').length - 1)) {
							gsap.to(window, {
								duration: 1,
								scrollTo: gsap.utils.toArray('section')[i + 1]
							});
						}
						console.log(document.querySelectorAll('section'));
					},
					onUp: () => {
						if(i !== 1) {
							gsap.to(window, {
								duration: 1,
								scrollTo: gsap.utils.toArray('section')[i - 1]
							});
						}
					}
				});*/
				
				splitTitle[i] = SplitText.create(el.children[0].children[0], {type: 'words'});
				splitDescription[i] = SplitText.create(el.children[0].children[2], {type: 'lines'});
				
				gsap.from(splitTitle[i].words, {
					y: -200,
					opacity: 0,
					duration: 0.7,
					stagger: 0.04,
					scrollTrigger: {
						trigger: el.children[0].children[0],
						start: 'center center'
					}
				});
				
				gsap.from(splitDescription[i].lines, {
					y: -200,
					opacity: 0,
					duration: 0.7,
					stagger: 0.04,
					scrollTrigger: {
						trigger: el.children[0].children[2],
						start: 'center center'
					}
				});
				
				gsap.from(el.children[1].children, {
					scale: 0,
					scrollTrigger: {
						trigger: el.children[1].children,
						start: 'center center'
					}
				});
			}
		});
	}, {scope: GTAIII});
	
	return (
		<div ref={GTAIII} className="absolute inset-0 w-screen h-screen z-20">
			<svg onClick={() => {setGTAIIIVisible(false)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="fixed top-5 right-5 size-15 text-white cursor-pointer z-40">
				<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
			</svg>
			<section className="w-screen h-screen">
				<video autoPlay muted loop playsInline className="w-screen h-screen object-cover">
					<source src={GTAIII_Intro} type="video/mp4" />
					O teu navegador não suporta vídeos em HTML5.
				</video>
			</section>
			<section className="w-screen h-screen bg-black text-white flex">
				<div className="w-[50vw] h-screen flex flex-col justify-center items-center">
					<h1 className="text-6xl font-bold">Sinopse</h1>
					<br />
					<p className="text-xl text-center font-medium">
						Em Grand Theft Auto III, o jogador assume o papel de Claude, um ex-presidiário que,
						após ser traído pela sua namorada Catalina, se vê a trabalhar para vários chefes do crime
						da fictícia Liberty City, uma cidade inspirada em Nova Iorque. A trama envolve Claude a
						envolver-se em um mundo de gangues, crime e corrupção, enquanto procura a vingança contra
						Catalina e tenta sobreviver na cidade.
					</p>
				</div>
				<div className="w-[50vw] h-screen flex justify-center items-center">
					<img src="https://s2-techtudo.glbimg.com/bKK2ro7m3w-7oP-6_itNq9TT5HI=/0x0:620x620/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/n/R/xqYGc7Q5u8dcphAqxk1A/2011-10-21-1-1.jpg" className="w-100" />
				</div>
			</section>
			<section className="w-screen h-screen bg-black text-white flex flex-row-reverse">
				<div className="w-[50vw] h-screen flex flex-col justify-center items-center">
					<h1 className="text-6xl font-bold">Claude Speed</h1>
					<br />
					<p className="text-xl text-center font-medium">
						Claude é um homem calmo e sério que parece não ter emoções independentemente da situação.
						Desde que ele é pago por seus serviços, ele vai tomar as ordens de seus chefes sem relutância
						ou reclamação, geralmente dando um aceno para mostrar que ele entende e não responde mesmo
						quando ele é repreendido ou quando seus chefes gritam quando ele faz algo de errado.
					</p>
				</div>
				<div className="w-[50vw] h-screen flex justify-center items-center">
					<img src="https://comicvine.gamespot.com/a/uploads/original/11123/111235159/6322871-3819943233-latest" className="w-100" />
				</div>
			</section>
			<section className="w-screen h-screen bg-black text-white flex">
				<div className="w-[50vw] h-screen flex flex-col justify-center items-center">
					<h1 className="text-6xl font-bold">Sinopse</h1>
					<br />
					<p className="text-xl text-center font-medium">
						Em Grand Theft Auto III, o jogador assume o papel de Claude, um ex-presidiário que,
						após ser traído pela sua namorada Catalina, se vê a trabalhar para vários chefes do crime
						da fictícia Liberty City, uma cidade inspirada em Nova Iorque. A trama envolve Claude a
						envolver-se em um mundo de gangues, crime e corrupção, enquanto procura a vingança contra
						Catalina e tenta sobreviver na cidade.
					</p>
				</div>
				<div className="w-[50vw] h-screen flex justify-center items-center">
					<img src="https://s2-techtudo.glbimg.com/bKK2ro7m3w-7oP-6_itNq9TT5HI=/0x0:620x620/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/n/R/xqYGc7Q5u8dcphAqxk1A/2011-10-21-1-1.jpg" className="w-100" />
				</div>
			</section>
		</div>
	);
}

export default SectionGTAIII;
