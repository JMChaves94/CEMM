// el loader se ejecuta inmediatamente
(function () {
	const loader = document.getElementById('app-loader');
	const bar = document.querySelector('.loader-progress__bar');
	const percLabel = document.getElementById('loader-perc');

	if (!loader || !bar || !percLabel) {
		// Si no encuentra los elementos, intenta de nuevo en un momento
		setTimeout(arguments.callee, 50);
		return;
	}

	const SHOW_MS = 1000;
	let target = 0;
	let shown = 0;

	const estTimer = setInterval(() => { target = Math.min(95, target + 5); }, 90);
	
	window.addEventListener('load', () => { target = 100; });

	function tick(){
		shown += (target - shown) * 0.14;
		const pct = Math.round(shown);
		bar.style.width = pct + '%';
		percLabel.textContent = pct;
		requestAnimationFrame(tick);
	}
	tick();

	setTimeout(() => {
		clearInterval(estTimer);
		target = 100;
		document.body.classList.add('is-ready');
		loader.classList.add('hidden');
		setTimeout(() => loader.remove(), 550);
	}, SHOW_MS);
})();

// ===== RESTO DEL CÓDIGO CUANDO DOM ESTÉ LISTO =====
document.addEventListener('DOMContentLoaded', function() {
  
	// ====== NAV + REVEAL + SCROLLSPY ======
	const btn = document.querySelector('.nav-toggle');
	const nav = document.getElementById('main-nav');
	
	if (btn && nav) {
		btn.addEventListener('click', ()=>{ 
			const open = nav.classList.toggle('open'); 
			btn.setAttribute('aria-expanded', open ? 'true' : 'false'); 
			document.body.style.overflow = '';
		});
		
		document.addEventListener('click', (e)=>{ 
			if(!nav.contains(e.target) && !btn.contains(e.target)){ 
				if (nav.classList.contains('open'))
				{ 
					nav.classList.remove('open'); 
					btn.setAttribute('aria-expanded','false'); 
				} 
			}
		});
	}

	// Reveal animations para presentación
	const observer = new IntersectionObserver((entries)=>{
		entries.forEach(entry=>{
			if (entry.isIntersecting)
			{
				const el = entry.target; 
				const delay = Number(el.dataset.delay||0);
				setTimeout(()=> el.classList.add('in'), delay); 
				observer.unobserve(el);
			}
		});
	},{ threshold: 0.2 });
  
	document.querySelectorAll('#presentacion .reveal').forEach(el=>observer.observe(el));

	// Scrollspy para navegación
// Scrollspy para navegación
		const map = { presentacion:'Presentación', ofertas: 'Ofertas', empresas:'Empresas', contacto:'Contacto', vinculate:'Vinculate' };
		const links = [...document.querySelectorAll('.nav a')];
		const spy = new IntersectionObserver((entries)=>{
		entries.forEach(entry=>{
			const id = entry.target.id;
			if (entry.isIntersecting && map[id])
			{
			links.forEach(l=>l.classList.remove('active'));
			const current = links.find(l => l.textContent.trim() === map[id]);
			if (current) { current.classList.add('active'); }
			}
		});
		}, { threshold: 0.2 });

		Object.keys(map).forEach(id=>{
		const sec=document.getElementById(id);
		if (sec) spy.observe(sec);
		});

	// ===== ANIMACIONES DE SECCIONES =====
	
	// Animación misión y visión
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	};

	const sectionObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting)
			{
				entry.target.classList.add('animated');
				sectionObserver.unobserve(entry.target);
			}
		});
	}, observerOptions);

	document.querySelectorAll('.reveal-animation').forEach(element => {
		sectionObserver.observe(element);
	});

	// Animación cards de sectores
	const sectorCards = document.querySelectorAll('.sector-card');
	const cardObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry, index) => {
			if (entry.isIntersecting) {
				setTimeout(() =>{
					entry.target.classList.add('animated');
				}, index * 100);
				cardObserver.unobserve(entry.target);
			}
		});
	}, {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	});

	sectorCards.forEach(card => {
		cardObserver.observe(card);
	});

	// Animación sección empresas
	const empresasSection = document.querySelector('.wrap-empresas');
	if (empresasSection) {
		const empresaObserver = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting)
				{
					entry.target.classList.add('visible');
				}
			});
		}, { threshold: 0.2 });

		empresaObserver.observe(empresasSection);
	}

	// Animación headers
	const headers = document.querySelectorAll('.emp-head');
	const headerObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting)
			{
				entry.target.classList.add('animated');
				headerObserver.unobserve(entry.target);
			}
		});
	}, { threshold: 0.5 });

	headers.forEach(header => {
		headerObserver.observe(header);
	});

	// ===== NUEVA LÓGICA DE EMPRESAS =====

	// Mapeo de categorías del array Empresas a chips de filtro
	const CATEGORIA_TO_CHIP = {
		"Servicios de Ingeniería y Consultoría": "ingenieria",
		"Equipos y Componentes Industriales": "equipos", 
		"Tecnologías y Automatización": "tecnologia",
		"Seguridad y Medio Ambiente": "seguridad",
		"Logística y Servicios de Apoyo": "logistica",
		"default": "equipos"
	};

	// Función para generar HTML de tarjeta de empresa
	function generarTarjetaEmpresa(empresa, id) {
		const chipKey = CATEGORIA_TO_CHIP[empresa.categoria] || CATEGORIA_TO_CHIP["default"];
		const logoPath = empresa.logoEmpresa ? `${empresa.logoEmpresa}` : 'meta.jpeg';
	  
		const searchTags = [
		  empresa.nombreEmpresa,
		  empresa.categoria,
		  ...(empresa.productos || []),
		  empresa.descripcion || ''
		].join(' ').toLowerCase();
	  
		// 🔑 Normalizar URL (para que siempre abra bien)
		let paginaWeb = empresa.paginaWeb?.trim() || "";
		if (paginaWeb && !/^https?:\/\//i.test(paginaWeb)) {
		  paginaWeb = "https://" + paginaWeb;
		}
	  
		return `
		  <div class="empresa-card empresa-card--logo" id=${id}
			data-sector="${chipKey}"
			data-name="${empresa.nombreEmpresa.replace(/"/g,'&quot;')}"
			data-tags="${searchTags.replace(/"/g,'&quot;')}"
			style="--order:${Math.floor(Math.random() * 10)}">
	  
			<!-- Card cerrada -->
			<div id="closed-card">
			  <img class="empresa-image empresa-image--logo" 
				src="empresas/${logoPath}" 
				alt="${empresa.nombreEmpresa}"
				onerror="this.src='meta.jpeg'">
			  <div class="overlay">
				<h3 class="overlay-title">${empresa.nombreEmpresa}</h3>
				<p class="overlay-description">${empresa.categoria}</p>
			  </div>
			</div>
	  
			<!-- Card expandida -->
			<div id="open-card" style="display:none">
			  <div class='header-card'>
				<img class="empresa-image-small"  
				  src="empresas/${logoPath}" 
				  alt="${empresa.nombreEmpresa}"
				  onerror="this.src='meta.jpeg'">
				<a style='cursor:pointer;'>Cerrar</a>
			  </div>
	  
			  <h3 class="overlay-title">${empresa.nombreEmpresa}</h3>
			  <p class="overlay-description">${empresa.descripcion || ''}</p>
	  
			  <div class="empresa-detalle">
				<p><strong>Responsable:</strong> ${empresa.nombreResponsable || '-'}</p>
				<p><strong>Contacto:</strong> ${empresa.contacto || '-'}</p>
				<p><strong>Email:</strong> <a href="mailto:${empresa.correoElectronico}">${empresa.correoElectronico}</a></p>
				<p><strong>Dirección:</strong> ${empresa.direccion || '-'}</p>
				<p><strong>Actividad:</strong> ${empresa.actividadPrincipal || '-'}</p>
				<p><strong>Productos:</strong> ${(empresa.productos || []).join(', ')}</p>
			  </div>
	  
			  ${paginaWeb ? `<a href="${paginaWeb}" class="card-link" target="_blank">Visitar página web</a>` : ''}
			</div>
		  </div>
		`;
	  }
	  
	  

  // Función para cargar empresas
  function cargarEmpresas() {
	const grid = document.getElementById('empGrid');
	if (!grid) {
	  console.error('Grid no encontrado');
	  return;
	}

	// Verificar si existe el array Empresas
	if (typeof Empresas === 'undefined') {
	  console.error('Array Empresas no disponible');
	  // Mostrar mensaje de error o crear empresas de ejemplo
	  grid.innerHTML = '<p>No se pudieron cargar las empresas. Verifica que el archivo Empresas.js esté incluido.</p>';
	  return;
	}
	
	function GetElementInsideContainer(containerID, childID) {
		var elm = document.getElementById(childID);
		var parent = elm ? elm.parentNode : {};
		return (parent.id && parent.id === containerID) ? elm : {};
	}

	// Generar HTML para todas las empresas
	for (let i = 0; i < Empresas.length; i++) {
		grid.innerHTML += generarTarjetaEmpresa(Empresas[i], i);

		grid.querySelectorAll('.empresa-card').forEach((card, index) => {
			card.addEventListener("click", function () {
				if (card.style.width == '70vw')
				{ // Closing
					grid.style.height = 'auto';

					for (let k = 0; k < grid.children.length; k++) {
						const element = grid.children[k];
						if (element.id != index) {
							setTimeout(() => {
								element.style.display = 'block';
								element.style.transition = "0.2s";
								element.style.opacity = '100%';5
							}, 800);
						}	
					}
					card.style.width = '';
					card.style.height = '';


					let cardChildren = card.querySelectorAll('div');
					console.log(cardChildren);
					
					for (let i = 0; i < cardChildren.length; i++) {
						const element = cardChildren[i];
						if (element.id == 'open-card') {
							element.style.display = 'none';
						} else if (element.id == 'closed-card') {
							element.style.display = 'block';
						}
					}					
				}
				else
				{ // Opening
					grid.style.height = '70vh';

					for (let k = 0; k < grid.children.length; k++) {
						const element = grid.children[k];
						if (element.id != index) {
							element.style.transition = "0.2s";
							element.style.opacity = '0%';
							setTimeout(() => {
								element.style.display = 'none';
							}, 200);
						}	
					}
					setTimeout(() => {
						card.style.transition = '1s';
						card.style.width = '70vw';
						card.style.height = '70vh';
					}, 200);

					let cardChildren = card.querySelectorAll('div');
					console.log(cardChildren);
					
					for (let i = 0; i < cardChildren.length; i++) {
						const element = cardChildren[i];
						if (element.id == 'open-card') {
							element.style.display = 'block';
						} else if (element.id == 'closed-card') {
							element.style.display = 'none';
						}
					}
				}
			})
	  	});
	}

	// Activar animaciones
	requestAnimationFrame(() => {
	  grid.querySelectorAll('.empresa-card').forEach((card, index) => {
		setTimeout(() => {
		  card.classList.add('visible');
		}, index * 50);
	  });
	});
  }

  // Función de filtrado
  function applyFilter() {
	const grid = document.querySelector('.empresas-grid');
	if (!grid) return;
	
	const cards = Array.from(grid.querySelectorAll('.empresa-card'));
	const activeChip = document.querySelector('.chips .filter-chip.is-active');
	const input = document.getElementById('empSearch');
	
	const sector = activeChip ? activeChip.dataset.sector : 'all';
	const q = (input?.value || '').trim().toLowerCase();

	cards.forEach(card => {
	  const cSec = card.dataset.sector;
	  const name = (card.dataset.name || '').toLowerCase();
	  const tags = (card.dataset.tags || '').toLowerCase();
	  const sectorOk = (sector === 'all') || (cSec === sector);
	  const textOk = !q || name.includes(q) || tags.includes(q);
	  card.style.display = (sectorOk && textOk) ? '' : 'none';
	});
  }

  // Configurar filtros
  function configurarFiltros() {
	const chips = Array.from(document.querySelectorAll('.chips .filter-chip'));
	const clear = document.getElementById('clearFilters');
	const input = document.getElementById('empSearch');

	chips.forEach(ch => {
	  ch.addEventListener('click', () => {
		chips.forEach(c => c.classList.remove('is-active'));
		ch.classList.add('is-active');
		applyFilter();
	  });
	});

	clear?.addEventListener('click', () => {
	  if(input) input.value = '';
	  chips.forEach(c => c.classList.remove('is-active'));
	  applyFilter();
	});

	input?.addEventListener('input', applyFilter);
  }
  
  // Cargar empresas
  cargarEmpresas();
  
  // Configurar filtros después de cargar
  setTimeout(() => {
	configurarFiltros();
	applyFilter();
  }, 100);

});

// Acordeón para "Nuestra Oferta"
document.querySelectorAll(".oferta-btn").forEach(btn => {
  btn.addEventListener("click", () => {
	const item = btn.parentElement;
	item.classList.toggle("active");

	// Si querés que solo uno esté abierto a la vez, descomenta esto:
	/*
	document.querySelectorAll(".oferta-item").forEach(other => {
	  if (other !== item) other.classList.remove("active");
	});
	*/
  });
});
