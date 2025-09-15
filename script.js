const heartContainer = document.getElementById('heart-rain');
const enterBtn = document.getElementById('enterBtn');
const placards = document.querySelectorAll('.placard');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const confettiCanvas = document.getElementById('confetti');
const musicBtn = document.getElementById('musicBtn');
const bgm = document.getElementById('bgm');
const finalOverlay = document.getElementById('finalOverlay');
const closeOverlay = document.getElementById('closeOverlay');

// Month overlay content map (you can customize messages and background images per month)
const monthData = {
	1: { title: "1st Month — 15th June '24 - 15th July '24", bg: 'public/rug_res.jpg', message: 'We started with Gran Turismo 🎮 and vibed over badminton 🏸 somewhere between all that I fell for you 💛 then we went to the Seedhe Maut concert together 🎤🔥 and started dating that exact day 🫶✨ this healer month 🌙💗 began our beautiful little forever and I’m so grateful for you 💕' },
	2: { title: "2nd Month — 15th July '24 - 15th August '24", bg: 'public/ice_res.jpg', message: 'We said goodbye and long distance began with late night vcs and good morning texts 🌙📱 We weren’t sure it would work out but I’ll always be grateful we tried because it was totally worth it ❤️✨' },
	3: { title: "3rd Month — 15th August '24 - 15th September '24", bg: 'public/rug.jpg', message: 'it’s my bday month 🎉 i got the prettiest flowers 🌸 and the sweetest para for my birthday 🥹 every moment with you till now has been perfect ✨💛' },
	4: { title: "4th Month — 15th September '24 - 15th October '24", bg: 'public/dana choga.jpg', message: 'its your midsems month 🎓 we’ve vibed so much, had a few virtual dates, shared so many laughs and flying kisses 😘😂 staying on late night VCs with you while you study is my core memory and something i’ll never forget ✨' },
	5: { title: "5th Month — 15th October '24 - 15th November '24", bg: 'public/ramen.jpg', message: 'our first big fight over something so small 🥺 i was really dumb (still am) 🙈 but we overcame it sorted things out and learned from it 💛 just like we’ll sort any other misunderstanding in the future 🫶 we actually got closer because of that fight and spent diwali in the best way possible ✨' },
	6: { title: "6th Month — November '24", bg: 'public/rug_res.jpg', message: 'diwali month 🪔 we went to a house party together 🎉 had a cute starbucks date ☕️ played badminton 🏸 and made so many new memories 💛 after 3 months of long distance we finally met 🥹 can’t wait to meet you this diwali too ✨' },
	7: { title: "7th Month — 15th December '24 - 15th January '25", bg: 'public/ice.jpg', message: 'winter break time hehehehehehehe ❄️🥰 we went on our first official date this time and did sooo much together 💛 also also also we played our first badminton tournament together (we lost lmaoo) 🏸😂 played pool sooo much 🎱 went to starbucks ☕️ man what a beautiful month ✨' },
	8: { title: "8th Month — 15th January '25 - 15th February '25", bg: 'public/rug.jpg', message: 'lmaooo we started the new year fighting 😅 but soon it all became irrelevant and we had the best time of our lives at coldplay 🎶💛 the concert was beautiful just like the whole trip 🥹 from spending every night cuddling and sleeping together 🤗✨ to going to akshardham mandir with you 🛕 it was such a wholesome trip 🌸' },
	9: { title: "9th Month — 15th February '25 - 15th March '25", bg: 'public/dana choga.jpg', message: 'your bday month 🎂 yaaaay I gave you amazing gifts and that pink dress of yours is just too beautiful 💖 I danced to a Hannah Montana song for you hehehe 😊 we had a virtual date then valentines came 🌹 I got you black rubber bands (ouch) but it’s fine now it’s our tradition I’ll get them every valentines 💕 I miss you sooo much writing this while listening to Yellow on repeat 🎶💛' },
	10: { title: "10th Month — 15th March '25 - 15th April '25", bg: 'public/ramen.jpg', message: 'midsems again :( late night VCs full of "i miss you"s while we study together and steal cute little moments between chapters 💬📚🥱💛' },
	11: { title: "11th Month — 15th April '25 - 15th May '25", bg: 'public/rug_res.jpg', message: 'the waiting month ⏳ it was just us counting days for it to end so we could finally meet next month 🥹 and the wait was so worth it 💛✨' },
	12: { title: "12th Month — 15th May '25 - 15th June '25", bg: 'public/ice_res.jpg', message: 'We finally met on the 23rd of this month yaaay 🥳 meeting you then felt so pure and beautiful ✨ we went ice skating ⛸️ had cozy restaurant dates 🍽️ had fun at Funcity 🎡 did all the things we used to talk about on chat 💬💕 and I even got to meet your mom this month 🥹💛' },
	13: { title: "13th Month — 15th June '25 - 15th July '25", bg: 'public/rug.jpg', message: 'one year of us completed 🥹💛 I’m in Europe right now 🌍 it sucked being long distance again for 20 days lmaoo 😅 but when I came back we had so much fun yet again ✨ we didn’t do much this month but we swam together 🏊‍♂️ and cuddled sooo much 🤗💕' },
	14: { title: "14th Month — 15th July '25 - 15th August '25", bg: 'public/dana choga.jpg', message: 'we made our own rug together 🧶 finally went on that ramen date 🍜 and hit your fav Indian restaurant (Dana Choga) 🍛 p.s. you met my parents and they loved you 🥹 it was sooo cute how nervous you were but everything went perfectly and then long distance began again :( 💔' },
	15: { title: "15th Month — 15th August '25 - 15th September '25", bg: 'public/ramen.jpg', message: 'aaha the last month has been quite a roller coaster 🎢 but i’m so glad everything is back on track now 💛 it actually made us closer and showed how important we are to each other 🥹 fifteen months down, forever to go ✨ i love you 💖' }
};

const monthOverlay = document.getElementById('monthOverlay');
const monthBg = document.getElementById('monthBg');
const monthTitle = document.getElementById('monthTitle');
const monthMessage = document.getElementById('monthMessage');
const closeMonth = document.getElementById('closeMonth');
const collageGrid = document.getElementById('collageGrid');

const TOTAL_MONTHS = 15;
let currentMonth = 1;
const foundHearts = new Set();
let userInteracted = false;

function ensureAudioStart(){
	if(userInteracted) return;
	userInteracted = true;
	if(bgm){
		bgm.volume = 0.6;
		bgm.play().then(()=>{
			musicBtn?.classList.add('sound-on');
			musicBtn.textContent = '🔊';
		}).catch(()=>{
			// Autoplay blocked; keep in paused state until user toggles
		});
	}
}

function toggleMusic(){
	if(!bgm) return;
	if(bgm.paused){
		bgm.play();
		musicBtn?.classList.add('sound-on');
		musicBtn.textContent = '🔊';
	}else{
		bgm.pause();
		musicBtn?.classList.remove('sound-on');
		musicBtn.textContent = '🔈';
	}
}

function showFinalOverlay(){
	if(!finalOverlay) return;
	finalOverlay.setAttribute('aria-hidden', 'false');
}
function hideFinalOverlay(){
	finalOverlay?.setAttribute('aria-hidden', 'true');
}

function createHeart(){
	const heart = document.createElement('div');
	heart.className = 'heart';
	heart.textContent = Math.random() < 0.25 ? '🧸' : (Math.random() < 0.5 ? '💖' : '💗');
	const startLeft = Math.random() * 100; // vw
	heart.style.left = startLeft + 'vw';
	const duration = 2 + Math.random() * 2; // faster: 2-4s
	heart.style.animationDuration = duration + 's';
	heart.style.opacity = 0.7 + Math.random() * 0.3;
	heart.style.transform = `translateY(-40px) rotate(${Math.random()*40-20}deg)`;
	heartContainer.appendChild(heart);
	setTimeout(()=> heart.remove(), duration * 1000 + 200);
}

let heartIntervalId;
function startHeartRain(){
	if(heartIntervalId) return;
	for(let i=0;i<18;i++) createHeart();
	heartIntervalId = setInterval(()=>{
		for(let i=0;i<6;i++) createHeart();
	}, 250);
	setTimeout(()=>{ // taper off faster
		clearInterval(heartIntervalId);
		heartIntervalId = null;
	}, 4000);
}

function observePlacards(){
	const observer = new IntersectionObserver((entries)=>{
		entries.forEach(entry=>{
			if(entry.isIntersecting){
				entry.target.classList.add('is-visible');
				const month = Number(entry.target.dataset.month);
				if(Number.isFinite(month)){
					setCurrentMonth(month);
				}
			}
		});
	},{ threshold: 0.5 });
	placards.forEach(p=> observer.observe(p));
}

function smoothScrollTo(selector){
	document.querySelector(selector)?.scrollIntoView({ behavior:'smooth', block:'start' });
}

function getSectionByMonth(month){
	return document.querySelector(`.placard[data-month="${month}"]`);
}

function randomizeHeartPositions(){
	placards.forEach(section =>{
		const btn = section.querySelector('.unlock-heart');
		if(!btn) return;
		const top = 20 + Math.random()*60; // 20% - 80%
		const left = 18 + Math.random()*64; // 18% - 82%
		btn.style.top = top + '%';
		btn.style.left = left + '%';
	});
}

function updateHUD(){
	progressText.textContent = `Month ${currentMonth} / ${TOTAL_MONTHS}`;
	const ratio = (foundHearts.size / TOTAL_MONTHS) * 100;
	progressBar.style.width = `${ratio}%`;
	prevBtn.disabled = currentMonth <= 1;
	nextBtn.disabled = currentMonth >= TOTAL_MONTHS;
}

function setCurrentMonth(month){
	currentMonth = Math.max(1, Math.min(TOTAL_MONTHS, month));
	updateHUD();
}

function goToMonth(month){
	setCurrentMonth(month);
	smoothScrollTo(`.placard[data-month="${month}"]`);
}

function wireHUD(){
	prevBtn?.addEventListener('click', ()=>{
		ensureAudioStart();
		const target = Math.max(1, currentMonth - 1);
		goToMonth(target);
		startHeartRain();
	});
	nextBtn?.addEventListener('click', ()=>{
		ensureAudioStart();
		const target = Math.min(TOTAL_MONTHS, currentMonth + 1);
		goToMonth(target);
		startHeartRain();
	});
	musicBtn?.addEventListener('click', ()=>{
		ensureAudioStart();
		toggleMusic();
	});
}

function wireMiniGame(){
	placards.forEach(section =>{
		const month = Number(section.dataset.month);
		const btn = section.querySelector('.unlock-heart');
		if(!btn || !Number.isFinite(month)) return;
		btn.addEventListener('click', ()=>{
			ensureAudioStart();
			if(foundHearts.has(month)) return;
			foundHearts.add(month);
			btn.classList.add('found');
			startHeartRain();
			updateHUD();
			if(month === 15){
				burstConfetti();
				showFinalOverlay();
			}
		});
	});
}

// Floating teddy stickers
function spawnTeddies(){
	const num = 6;
	for(let i=0;i<num;i++){
		const t = document.createElement('div');
		t.className = 'sticker';
		t.textContent = '🧸';
		const startLeft = Math.random()*90 + 2; // 2-92vw
		const startTop = Math.random()*80 + 10; // 10-90vh
		t.style.left = startLeft + 'vw';
		t.style.top = startTop + 'vh';
		const driftSec = 10 + Math.random()*8;
		const bobSec = 2 + Math.random()*1.5;
		t.style.animationDuration = `${driftSec}s, ${bobSec}s`;
		t.style.animationDelay = `${Math.random()*2}s, ${Math.random()*1}s`;
		document.body.appendChild(t);
	}
}

// Confetti
let ctx, confettiParticles = [];
function resizeConfetti(){
	if(!confettiCanvas) return;
	confettiCanvas.width = window.innerWidth;
	confettiCanvas.height = window.innerHeight;
	ctx = confettiCanvas.getContext('2d');
}
window.addEventListener('resize', resizeConfetti);

function burstConfetti(){
	if(!confettiCanvas) return;
	resizeConfetti();
	const colors = ['#ff6fae','#ff9fc7','#ffcae1','#ffe1ef','#ffd1e8'];
	const count = 160;
	for(let i=0;i<count;i++){
		confettiParticles.push({
			x: confettiCanvas.width/2,
			y: confettiCanvas.height/3,
			vx: (Math.random()-0.5)*6,
			vy: Math.random()*-6 - 2,
			size: 4 + Math.random()*6,
			color: colors[Math.floor(Math.random()*colors.length)],
			life: 0,
			rotation: Math.random()*Math.PI*2,
			vr: (Math.random()-0.5)*0.2
		});
	}
	if(!animatingConfetti) animateConfetti();
}

let animatingConfetti = false;
function animateConfetti(){
	if(!ctx) return;
	animatingConfetti = true;
	ctx.clearRect(0,0,confettiCanvas.width, confettiCanvas.height);
	for(let i=confettiParticles.length-1;i>=0;i--){
		const p = confettiParticles[i];
		p.vy += 0.12; // gravity
		p.x += p.vx;
		p.y += p.vy;
		p.rotation += p.vr;
		p.life += 1;
		ctx.save();
		ctx.translate(p.x, p.y);
		ctx.rotate(p.rotation);
		ctx.fillStyle = p.color;
		ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
		ctx.restore();
		if(p.y > confettiCanvas.height + 40 || p.life > 300){
			confettiParticles.splice(i,1);
		}
	}
	if(confettiParticles.length){
		requestAnimationFrame(animateConfetti);
	}else{
		animatingConfetti = false;
	}
}

function openMonthOverlay(month){
	const data = monthData[month];
	if(!data) return;
	monthTitle.textContent = data.title;
	monthMessage.textContent = data.message;
	monthBg.style.backgroundImage = `url('${data.bg}')`;
	monthOverlay.setAttribute('aria-hidden', 'false');
}
function closeMonthOverlay(){ monthOverlay.setAttribute('aria-hidden','true'); }

function wirePlacardFronts(){
	document.querySelectorAll('.placard-front').forEach(btn=>{
		btn.addEventListener('click', ()=>{
			ensureAudioStart();
			const section = btn.closest('.placard');
			const month = Number(section?.dataset.month);
			if(!Number.isFinite(month)) return;
			openMonthOverlay(month);
		});
	});
	closeMonth?.addEventListener('click', closeMonthOverlay);
	monthOverlay?.addEventListener('click', (e)=>{ if(e.target === monthOverlay) closeMonthOverlay(); });
}

// Build collage from public images list (provided via script injection at build time or fallback)
const publicImages = [
	'dana choga.jpg','ice_res.jpg','ice.jpg','ramen.jpg','rug_res.jpg','rug.jpg',
	"WhatsApp Image 2025-09-15 at 15.55.21_82076983.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.24_ea7cc800.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.25_80e8060e.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.26_0a18f336.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.26_3e0d14a5.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.28_9612c181.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.29_5a566a1d.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.30_b6c1d40d.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.30_eddc47cb.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.31_b1a10956.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.31_deb2a3b5.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.32_03e9fe32.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.32_63b585ed.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.32_f430d6a7.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.33_79777e5e.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.33_c6d25911.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.33_ff3eca46.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.34_99a78eec.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.34_fb6e628c.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.35_7a2a5e75.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.35_85471db0.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.35_aaa393ae.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.36_2424612c.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.36_bca655c1.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.36_c45f095a.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.37_55f24701.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.37_a5070fb2.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.38_13f6f089.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.38_2fa9fb30.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.38_87ff00e6.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.39_d61fed5b.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.39_d844e92e.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.40_74bdb1e5.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.40_e8be311e.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.40_e958d663.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.41_12605fc9.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.41_4ce0e433.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.41_6dcb5d99.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.42_077a2cb8.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.42_521e6a1c.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.43_1815159b.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.43_7fdda6d8.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.43_bfd5b775.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.44_88bb8ec5.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.44_901c3c50.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.45_42e999f1.jpg",
	"WhatsApp Image 2025-09-15 at 15.55.45_f7959a6f.jpg",
	"WhatsApp Image 2025-09-15 at 16.10.49_4b59063b.jpg" // newly added, appended last
].map(name=> `public/${name}`);

function buildCollage(){
	if(!collageGrid) return;
	collageGrid.innerHTML = '';
	publicImages.forEach((src, idx)=>{
		const tile = document.createElement('div');
		tile.className = 'tile';
		// size variety
		const r = Math.random();
		const sizeClass = r > 0.8 ? 'size-l' : r > 0.5 ? 'size-m' : 'size-s';
		tile.classList.add(sizeClass);
		// small playful tilt
		tile.style.transform = `rotate(${(Math.random()*2-1.2).toFixed(2)}deg)`;
		const img = document.createElement('img');
		img.loading = 'lazy';
		img.src = src;
		img.alt = 'Memory';
		const badge = document.createElement('span');
		badge.className = 'tile-badge';
		badge.textContent = '💗';
		tile.appendChild(img);
		tile.appendChild(badge);
		collageGrid.appendChild(tile);
	});
}

function addPlacardDecor(){
	placards.forEach(section=>{
		// remove existing decor
		section.querySelector('.placard-decor')?.remove();
		const decor = document.createElement('div');
		decor.className = 'placard-decor';
		// create a few emojis and sparkles
		const emojis = ['🧸','🌸','💖','🌷','🩷'];
		for(let i=0;i<6;i++){
			const e = document.createElement('div');
			e.className = 'decor-emoji';
			e.textContent = emojis[i % emojis.length];
			const top = 10 + Math.random()*80; // 10-90%
			const left = 6 + Math.random()*88; // 6-94%
			e.style.top = top + '%';
			e.style.left = left + '%';
			const dur1 = 3 + Math.random()*3;
			const dur2 = 2 + Math.random()*2;
			e.style.animationDuration = `${dur1}s, ${dur2}s`;
			decor.appendChild(e);
		}
		for(let i=0;i<10;i++){
			const s = document.createElement('div');
			s.className = 'sparkle';
			s.style.top = (Math.random()*100) + '%';
			s.style.left = (Math.random()*100) + '%';
			s.style.animationDelay = (Math.random()*1.5) + 's';
			decor.appendChild(s);
		}
		section.appendChild(decor);
	});
}

function parallaxDecor(){
	const viewportMid = window.innerHeight / 2;
	placards.forEach(section=>{
		const decor = section.querySelector('.placard-decor');
		if(!decor) return;
		const rect = section.getBoundingClientRect();
		const offset = (viewportMid - (rect.top + rect.height/2)) / window.innerHeight; // -0.5..0.5
		decor.style.transform = `translateY(${offset*16}px)`;
	});
}

window.addEventListener('scroll', parallaxDecor, { passive:true });

// Ensure bgm has a src (in case <source> isn't picked up in some browsers)
if(bgm && !bgm.src){
	bgm.src = 'public/yellow.mp3';
}

function fadeInAudio(targetVolume=0.6, durationMs=800){
	if(!bgm) return;
	try{ bgm.volume = 0; } catch{}
	const steps = 16;
	let i = 0;
	const tick = durationMs / steps;
	const iv = setInterval(()=>{
		i++;
		const v = Math.min(targetVolume, (i/steps)*targetVolume);
		try{ bgm.volume = v; } catch{}
		if(i>=steps) clearInterval(iv);
	}, tick);
}

// Start audio once on the very first user interaction anywhere
window.addEventListener('pointerdown', ()=>{ ensureAudioStart(); fadeInAudio(0.6, 900); }, { once:true, passive:true });
window.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' ') ensureAudioStart(); }, { once:true });

// Update ensureAudioStart to also fade in
const _ensureAudioStart_orig = ensureAudioStart;
ensureAudioStart = function(){
	_ensureAudioStart_orig();
	fadeInAudio(0.6, 900);
};

// Trigger heart rain on heart clicks (decor hearts or any heart emoji)
document.addEventListener('click', (e)=>{
	const el = e.target;
	if(!(el && el.textContent)) return;
	const txt = el.textContent;
	if(/💖|💗|🩷|❤️|❤/.test(txt)){
		ensureAudioStart();
		startHeartRain();
	}
});

// Lightbox wiring for collage
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
let lightboxIndex = 0;

function openLightbox(idx){
	lightboxIndex = idx;
	lightboxImg.src = publicImages[lightboxIndex];
	lightbox.setAttribute('aria-hidden', 'false');
}
function closeLightbox(){ lightbox.setAttribute('aria-hidden','true'); }
function prevLightbox(){ lightboxIndex = (lightboxIndex - 1 + publicImages.length) % publicImages.length; lightboxImg.src = publicImages[lightboxIndex]; }
function nextLightbox(){ lightboxIndex = (lightboxIndex + 1) % publicImages.length; lightboxImg.src = publicImages[lightboxIndex]; }

function wireLightbox(){
	// open from collage tiles
	if(collageGrid){
		collageGrid.addEventListener('click', (e)=>{
			const tile = e.target.closest('.tile');
			if(!tile) return;
			const index = Array.from(collageGrid.children).indexOf(tile);
			if(index >= 0){
				openLightbox(index);
			}
		});
	}
	lightboxClose?.addEventListener('click', closeLightbox);
	lightboxPrev?.addEventListener('click', prevLightbox);
	lightboxNext?.addEventListener('click', nextLightbox);
	lightbox?.addEventListener('click', (e)=>{ if(e.target === lightbox) closeLightbox(); });
	// keyboard
	document.addEventListener('keydown', (e)=>{
		if(lightbox.getAttribute('aria-hidden') === 'true') return;
		if(e.key === 'Escape') closeLightbox();
		if(e.key === 'ArrowLeft') prevLightbox();
		if(e.key === 'ArrowRight') nextLightbox();
	});
	// touch swipe
	let startX = 0, startY = 0, isTouching = false;
	lightbox.addEventListener('touchstart', (e)=>{
		if(e.touches.length !== 1) return;
		isTouching = true; startX = e.touches[0].clientX; startY = e.touches[0].clientY;
	},{ passive:true });
	lightbox.addEventListener('touchmove', (e)=>{
		if(!isTouching) return;
		// prevent scroll when swiping image
		e.preventDefault();
	},{ passive:false });
	lightbox.addEventListener('touchend', (e)=>{
		if(!isTouching) return; isTouching = false;
		const dx = (e.changedTouches?.[0]?.clientX ?? 0) - startX;
		const dy = (e.changedTouches?.[0]?.clientY ?? 0) - startY;
		if(Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)){
			dx > 0 ? prevLightbox() : nextLightbox();
		}
	});
}

// Wire placard fronts and build collage on load
window.addEventListener('load', ()=>{
	randomizeHeartPositions();
	startHeartRain();
	observePlacards();
	wireHUD();
	wireMiniGame();
	spawnTeddies();
	setCurrentMonth(1);
	wirePlacardFronts();
	buildCollage();
	addPlacardDecor();
	parallaxDecor();
	wireLightbox();
});

enterBtn?.addEventListener('click', ()=>{
	ensureAudioStart();
	goToMonth(1);
	startHeartRain();
});

closeOverlay?.addEventListener('click', ()=>{
	hideFinalOverlay();
});
