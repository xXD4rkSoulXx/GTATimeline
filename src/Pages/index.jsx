import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { SplitText } from 'gsap/SplitText';

import GTAIIIPic from './assets/GTAIIIPic.jpg';
import GTAViceCityPic from './assets/GTAViceCityPic.jpg';
import GTASanAndreasPic from './assets/GTASanAndreasPic.png';
import GTAIVPic from './assets/GTAIVPic.jpg';
import GTAVPic from './assets/GTAVPic.jpg';
import GTAVIPic from './assets/GTAVIPic.webp';

import GTAIIIWallpaper from './assets/GTAIIIWallpaper.jpg';
import GTAViceCityWallpaper from './assets/GTAViceCityWallpaper.jpg';
import GTASanAndreasWallpaper from './assets/GTASanAndreasWallpaper.webp';
import GTAIVWallpaper from './assets/GTAIVWallpaper.jpg';
import GTAVWallpaper from './assets/GTAVWallpaper.jpg';
import GTAVIWallpaper from './assets/GTAVIWallpaper.jpg';

import SectionGTAIII from './components/SectionGTAIII';

gsap.registerPlugin(useGSAP, DrawSVGPlugin, SplitText);

function Index() {
	let split = [];
	const tl = gsap.timeline();
	
	const sectionTimeline = useRef(null);
	const timeline = useRef(null);
	const years = useRef(null);
	const wallpapers = [GTAIIIWallpaper, GTAViceCityWallpaper, GTASanAndreasWallpaper, GTAIVWallpaper, GTAVWallpaper, GTAVIWallpaper];
	
	const [gtaIIIVisible, setGTAIIIVisible] = useState(false);
	const [gtaViceCityVisible, setGTAViceCityVisible] = useState(false);
	const [gtaSanAndreasVisible, setGTASanAndreasVisible] = useState(false);
	const [gtaIVVisible, setGTAIVVisible] = useState(false);
	const [gtaVVisible, setGTAVVisible] = useState(false);
	const [gtaVIVisible, setGTAVIVisible] = useState(false);
	
	useGSAP(() => {		
		gsap.set(timeline.current.children[timeline.current.children.length - 1], {
			drawSVG: '0%'
		});
		
		for(let i = 0; i < 6; i++) {
			gsap.set(timeline.current.children[(i + 1) * 4 - 1].children[0], {
				scale: 0
			});
			
			split[i] = SplitText.create(years.current.children[i], {type: 'chars'});
			gsap.set(split[i].chars, {
				y: -200,
				opacity: 0
			});
			
			tl.from(Array.from(timeline.current.children).slice(i * 4, (i + 1) * 4 - 1), {
				drawSVG: '0%',
				duration: 2,
				stagger: 2
		    })
		    .addPause()
		    .call(() => {
			    gsap.to(timeline.current.children[(i + 1) * 4 - 1].children[0], {
				    onStart: () => {
						sectionTimeline.current.style.backgroundImage = `url(${wallpapers[i]})`;
						gsap.to(split[i].chars, {
							y: 0,
							opacity: 1,
							duration: 0.7,
							stagger: 0.04
						});
					},
					scale: 1,
				    duration: 2,
					onComplete: () => {
						tl.resume();
					}
			    });
		    });
			
			timeline.current.children[(i + 1) * 4 - 1].children[0].addEventListener('mouseover', () => {
				sectionTimeline.current.style.backgroundImage = `url(${wallpapers[i]})`;
			});
		}
		
		tl.to(timeline.current.children[timeline.current.children.length - 1], {
			drawSVG: '100%',
			duration: 2
		});
	}, {scope: sectionTimeline, timeline, years});
	
	return (
		<main>
			{ gtaIIIVisible && (
				<SectionGTAIII setGTAIIIVisible={setGTAIIIVisible} />
			)}
			<section ref={sectionTimeline} className="relative w-screen h-screen bg-black bg-cover bg-center">
				<div className="absolute inset-0 w-screen h-screen bg-black/70 flex justify-center items-center z-10">
					<div ref={years}>
						<p className="absolute top-[12vh] left-[10vw] text-5xl text-white font-bold">2001</p>
						<p className="absolute top-[82vh] left-[23vw] text-5xl text-white font-bold">2002</p>
						<p className="absolute top-[11vh] left-[38vw] text-5xl text-white font-bold">2004</p>
						<p className="absolute top-[82vh] left-[52vw] text-5xl text-white font-bold">2008</p>
						<p className="absolute top-[11vh] left-[67vw] text-5xl text-white font-bold">2013</p>
						<p className="absolute top-[82vh] left-[81vw] text-5xl text-white font-bold">2026</p>
					</div>
					
					{/* Timeline */}
					<svg ref={timeline} className="w-full" viewBox="0 0 1063 460" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line x1="0.983871" y1="234.5" x2="155.984" y2="233.5" stroke="white" strokeWidth="5"/>
						<line x1="153.5" y1="236" x2="153.5" y2="127" stroke="white" strokeWidth="5"/>
						<circle transform="rotate(90 156.5 66.5)" cx="156.5" cy="66.5" r="58" stroke="white" strokeWidth="5"/>
						<foreignObject x="103" y="10" className="relative w-27 h-27">
							<img onClick={() => {setModalOpen(true)}} src={GTAIIIPic} className="w-full h-full rounded-full cursor-pointer" />
						</foreignObject>
						
						<line x1="155.984" y1="233.5" x2="310.984" y2="232.5" stroke="white" strokeWidth="5"/>
						<line x1="308.5" y1="230" x2="308.5" y2="339" stroke="white" strokeWidth="5"/>
						<circle transform="rotate(-90 306.5 399.5)" cx="306.5" cy="399.5" r="58" stroke="white" strokeWidth="5"/>
						<foreignObject x="253" y="345" className="w-27 h-27">
							<img src={GTAViceCityPic} className="w-full h-full rounded-full cursor-pointer" />
						</foreignObject>
						
						<line x1="305.984" y1="232.5" x2="460.984" y2="231.5" stroke="white" strokeWidth="5"/>
						<line x1="458.5" y1="230" x2="458.5" y2="121" stroke="white" strokeWidth="5"/>
						<circle transform="rotate(90 461.5 60.5)" cx="461.5" cy="60.5" r="58" stroke="white" strokeWidth="5"/>
						<foreignObject x="408" y="6" className="w-27 h-27">
							<img src={GTASanAndreasPic} className="w-full h-full rounded-full cursor-pointer" />
						</foreignObject>
						
						<line x1="460.984" y1="231.5" x2="615.984" y2="230.5" stroke="white" strokeWidth="5"/>
						<line x1="613.5" y1="233" x2="613.5" y2="342" stroke="white" strokeWidth="5"/>
						<circle transform="rotate(-90 611.5 399.5)" cx="611.5" cy="399.5" r="58" stroke="white" strokeWidth="5"/>
						<foreignObject x="558" y="345" className="w-27 h-27">
							<img src={GTAIVPic} className="w-full h-full rounded-full cursor-pointer" />
						</foreignObject>
						
						<line x1="610.984" y1="230.5" x2="765.984" y2="229.5" stroke="white" strokeWidth="5"/>
						<line x1="763.5" y1="230" x2="763.5" y2="121" stroke="white" strokeWidth="5"/>
						<circle transform="rotate(90 765.5 60.5)" cx="765.5" cy="60.5" r="58" stroke="white" strokeWidth="5"/>
						<foreignObject x="712" y="6" className="w-27 h-27">
							<img src={GTAVPic} className="w-full h-full rounded-full cursor-pointer" />
						</foreignObject>
						
						<line x1="760.984" y1="229.5" x2="915.984" y2="228.5" stroke="white" strokeWidth="5"/>
						<line x1="913.5" y1="230" x2="913.5" y2="339" stroke="white" strokeWidth="5"/>
						<circle transform="rotate(-90 915.5 399.5)" cx="915.5" cy="399.5" r="58" stroke="white" strokeWidth="5"/>
						<foreignObject x="862" y="345" className="w-27 h-27">
							<img src={GTAVIPic} className="w-full h-full rounded-full cursor-pointer" />
						</foreignObject>
						
						<line x1="907.984" y1="228.5" x2="1062.98" y2="227.5" stroke="white" strokeWidth="5"/>
					</svg>
				</div>
			</section>
		</main>
	);
}

export default Index;
