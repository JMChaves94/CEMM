class Empresa {
  constructor(nombreEmpresa, nombreResponsable, contacto, correoElectronico, direccion, logoEmpresa, paginaWeb, cuit, actividadPrincipal, descripcion, productos, categoria) {
    this.nombreEmpresa = nombreEmpresa;
    this.nombreResponsable = nombreResponsable;
    this.contacto = contacto;
    this.correoElectronico = correoElectronico;
    this.direccion = direccion;
    this.logoEmpresa =logoEmpresa;
    this.paginaWeb = paginaWeb;
    this.cuit = cuit;
    this.descripcion = descripcion;
    this.actividadPrincipal = actividadPrincipal;
    this.productos = productos;
    this.categoria = categoria; // Nueva propiedad añadida
  } 
}

const Empresas = [];

const ABAC = new Empresa(
  'ABAC S.R.L.',
  'Eduardo Cambiasso',
  '1121527010',
  'abac@abac.com.ar',
  'PITAM, Parque Industrial Tecnológico Aeronáutico',
  'abac.png',
  'abac.com.ar',
  '30609968792',
  'FABRICACIÓN DE PRODUCTOS METÁLICOS DE TORNERÍA Y/O MATRICERÍA',
  "ABAC es una empresa argentina fundada en 1979. Se especializa en válvulas, manifolds para instrumentos, conectores, accesorios y equipos para sistemas de presión, caudal y control de fluidos en aplicaciones industriales de alta exigencia.",
  [
    "Válvulas manuales",
    "Manifolds para instrumentación",
    "Control de fluidos"
  ],
  "Equipos y Componentes Industriales" // Categoría asignada
);

Empresas.push(ABAC);

const ACUALITE = new Empresa(
  'ACUALITE S.A',
  'Estefanía Gramajo',
  '4628-0851 / 0853/ 0854/ 0872',
  'ventas@acualitepro.com.ar',
  'Acualite Proyectos S. A.',
  'aspa.png',
  'http://www.acualitepro.com.ar/',
  '33657244029',
  'FABRICACIÓN DE MAQUINARIA Y EQUIPO DE USO ESPECIAL N.C.P.',
  "Acualite proyectos es una empresa Argentina de ingenierí­a, construcciones y servicios especializada en soluciones medioambientales relacionadas al tratamiento de aguas, efluentes lí­quidos, saneamiento y contaminación ambiental en general.",
  [
    "Sistema de tratamiento de aguas (Ablandamiento - Lecho mixto - Decantación tubular o de placa - Microfiltración - Filtración convencional o contralavado continuo - Osmosis Inversa- Filtros de carbón activado - Ultrafiltración- Intercambio iónico)",
    "Equipos para el tratamiento de aguas",
    "Operación y mantenimiento",
    "Aditivos químicos",
    "Laboratorio",
    "Ingeniería y Química"
  ],
  "Seguridad y Medio Ambiente" // Categoría asignada
);

Empresas.push (ACUALITE);

const CAEF = new Empresa(
  'CAEF S.R.L',
  'Verónica Kempe',
  '1144833465',
  'vero@caefsrl.com.ar',
  'Antonio Rivero 1761',
  'caef.png',
  'www.caefsrl.com.ar ',
  '33657244029',
  'FABRICACIÓN DE MAQUINARIA Y EQUIPO DE USO ESPECIAL N.C.P.',
  "Somos la empresa en Argentina con la mayor variedad de Aislaciones en Alambres y Planchuelas para bobinado .Cumplimos con los compromisos asumidos con nuestros clientes, manteniendo stock permanente de todos nuestros productos para entregas inmediatas. Mantenemos para cada cliente un stock mínimo permanente de materiales de uso continuo para asistirlos en urgencias de entrega.",
  [
    "Paredes Móviles Acústicas",
    "Control de Ruido",
    "Equipos de Medición", 
    "Espumas Fonoabsorbentes, Lanas Minerales y Adhesivos"
  ],
  "Servicios de Ingeniería y Consultoría" // Categoría asignada
);

Empresas.push (CAEF);

const DECIBEL = new Empresa(
  'DECIBEL SUDAMERICA SA',
  'Miguel Tomacielo',
  '1168987169',
  'acustica@decibel.com.ar',
  'Las Bases 165 Haedo',
  'Decibel.png',
  'https://www.decibel.com.ar/',
  '30641672064',
  'FABRICACIÓN DE PRODUCTOS METÁLICOS PARA USO ESTRUCTURAL',
  "Líder en soluciones acústicas para la industria. Somos especialistas en la medición, diagnóstico y control de ruido y vibraciones, brindando soluciones integrales que garantizan seguridad operativa, cumplimiento normativo y protección del ambiente.",
  [
    "Paredes Móviles Acústicas", 
    "Control de Ruido",
    "Equipos de Medición",
    "Espumas Fonoabsorbentes, Lanas Minerales y Adhesivos" 
  ],
  "Servicios de Ingeniería y Consultoría" // Categoría asignada
);

Empresas.push (DECIBEL);

const DECRAF = new Empresa(
  'DECRAF',
  'Pablo Castro',
  '1130372748',
  'ventas@drecaf.com',
  'Evaristo Carriego 2664',
  'drecaf.png',
  'https://www.drecaf.com',
  '30710821042',
  'Fabricación de maquinaria y equipo de uso especial n.c.p.',
  "Somos especialistas en la medición, diagnóstico y control de ruido y vibraciones, brindando soluciones integrales que garantizan seguridad operativa, cumplimiento normativo y protección del ambiente.",
  [
    "Purgadores y Filtros de aire comprimido"
  ],
  "Equipos y Componentes Industriales" // Categoría asignada
);

Empresas.push (DECRAF);

const ELEKTRO = new Empresa(
  'ELEKTRO WELDING',
  'Tomás Stricolli',
  '1121798832',
  'info@elekttrowelding.com.ar ',
  'Barcelona 1340',
  'elektro.png',
  'www.elekttrowelding.com.ar',
  '20214406676',
  'Fabricación de maquinaria y equipo de uso general n.c.p.',
  "Elekttro Welding es una empresa argentina, de reconocida trayectoria, dedicada a la fabricación de equipos para desabollado automotor y su línea de accesorios, soldadura Mig Mag, de arco/MMA, cargadores y arrancadores de batería.",
  [
    "Cargadores y soldadores eléctricos"
  ],
  "Equipos y Componentes Industriales" // Categoría asignada
);

Empresas.push (ELEKTRO);

const EMELDIS = new Empresa(
  'EMELDIS S.R.L.',
  'Diego Ingratta',
  '1144830298',
  'info@emeldis.com.ar',
  'Sta. Fe 1235, B1708DUU Morón, Provincia de Buenos Aires',
  'PerforadosEmeldis.png',
  'https://www.emeldis.com.ar/',
  '30707640037',
  'Venta al por mayor de equipo profesional y científico e instrumentos de medida y de control n.c.p.',
  "Preformados Emeldis SRL es una empresa argentina dedicada al diseño y fabricación de soluciones para líneas eléctricas y de telecomunicaciones. Especializada en varillas preformadas, retenciones, empalmes y accesorios para redes de cobre y fibra óptica, ofrece productos de alta calidad técnica que garantizan eficiencia y seguridad en instalaciones.",
  [
    "Alambres preformados para líneas eléctricas"
  ],
  "Servicios de Ingeniería y Consultoría" // Categoría asignada
);

Empresas.push (EMELDIS);

const ENERTRANS = new Empresa(
  'ENERTRANS',
  'Manuel Pinto',
  '1137636356',
  'contacto@enertrans.com.ar',
  'Parque Industrial DECA',
  'Enetrans.png',
  'https://www.enertrans.com.ar/',
  '30715635506',
  'Alquiler de flota a empresas de construcción, petróleo y minería',
  "Enertrans es una empresa con amplia trayectoria en el mercado. Inicio sus actividades en zona oeste de la Provincia de Buenos Aires, y hoy sus oficinas y depósitos se encuentran ubicados en el Parque Industrial DECA, en la localidad de Haedo. La empresa nace con el objetivo de brindar soluciones en lo referido a elevación, transporte y logística en todo el territorio Argentino.",
  [
    "Equipamiento para camiones y soluciones en movilidad"
  ],
  "Logística y Servicios de Apoyo" // Categoría asignada
);

Empresas.push (ENERTRANS);

const ENERMET = new Empresa(
  'ENERMET SA',
  'Manuel Pinto',
  '1126891319 (whatsapp)',
  'comercial@enermetsa.com.ar',
  'Valentín Gómez 577',
  'enermet.png',
  'https://enermetsa.com.ar/',
  '33718229869',
  'Fabricacion de Carrocerias para vehiculos livianos, medianos y pesados',
  "En ENERMET nos especializamos en fabricar carrocerías con diseños innovadores y en la instalación de equipos hidráulicos avanzados. Cada proyecto representa entregar soluciones que mueven al país. Transformamos Desafíos en Soluciones,  asesorarando, diseñando y abasteciendo proyectos que enfrentan las más altas exigencias del sector como: Cajas Fijas, Camillas de Auxilio Mecánico, Volcadoras, Portavolquetes y montajes de Hidrogrúas. Ofrecemos una fabricación especializada y adaptada, orientado a maximizar el desempeño y la vida útil de cada camión. Desarrollamos soluciones que mueven a la industria.",
  [
    "Soluciones integrales para vehículos pesados / cajas fijas, hidrogrúas, portavolquetes y volcadoras"
  ],
  "Equipos y Componentes Industriales" // Categoría asignada
);

Empresas.push (ENERMET);

const FALMET = new Empresa(
  'FALMET',
  'Pablo Falduti',
  '1157621971',
  'comercial@grupofalmet.com.ar',
  'Colihue 451',
  'falmet.png',
  'https://www.grupofalmet.com.ar/',
  '30613225257',
  'DISEÑO Y FABRICACION DE PLANTAS Y EQUIPOS DE TRATAMIENTO DE AGUA, AGUA PRODUCIDA Y EFLUENTES.',
  "Diseñamos soluciones sostenibles en tratamiento de aguas, efluentes, separacion de O/W, agitacion y skids de proceso para la industria. 40 años de experiencia y certificacion ISO en diseño y fabricacion.",
  [
    "Plantas de tratamiento de agua y efluentes",
    "Equipos de agitacion y mezcla",
    "servicios de ingeniería y equipamiento ambiental"
  ],
  "Seguridad y Medio Ambiente" // Categoría asignada
);

Empresas.push (FALMET);

const GLOBAL = new Empresa(
  'GLOBAL COMPONENTES',
  'Néstor Botinelli',
  '1153073185',
  'Néstor.bottinelli@ncblighting.com',
  'Conceja Horacio Julián 837',
  'GlobalComponentes.jpg',
  'https://www.globalcomponentes.com/',
  '30708579773',
  'VENTA AL POR MAYOR DE MERCANCÍAS N.C.P.',
  "Fabrica de iluminacion , tanto standard como a medida , industrial , comercial y hogar , además de comercializar insumos para la electrónica , ( interruptores , semiconductores , cables y consumibles ) nuestras marcas NCB Y NCB LIGHTING",
  [
    "Iluminación y cartelería"
  ],
  "Logística y Servicios de Apoyo" // Categoría asignada
);

Empresas.push (GLOBAL);

const HC = new Empresa(
  'HC INDUSTRIAL',
  'Hernán Chirelli',
  '1158506236',
  'herchirelli@yahoo.com.ar',
  'Antonio Aberastain 158',
  'HcIndustrial.png',
  'https://www.hcindustrial.com.ar',
  '20209570204',
  'FABRICACIÓN DE PRODUCTOS METÁLICOS DE TORNERÍA Y/O MATRICERÍA',
  "Empresa metalmecánica dedicada a la fabricación de piezas especiales, estructuras metálicas soldadas, racks, medios de transporte, dispositivos neumáticos y electroneumáticos, mecanizados con torno y centro de mecanizado. Reparación de máquinas y partes de máquinas.",
  [
    "Soluciones para la industria y Construcción"
  ],
  "Equipos y Componentes Industriales" // Categoría asignada
);

Empresas.push (HC);

const MAYEKAWA = new Empresa(
  'MAYEKAWA ARGENTINA',
  'María Eugenia Alemán, Horacio Lozaya',
  '4609-2000',
  '',
  'Valentín Gómez 151',
  'mayekawa.png',
  'https://mayekawa.com/americas/mar',
  '30573118983',
  'FABRICACIÓN DE COMPRESORES, GRIFOS Y VÁLVULAS',
  "Mayekawa se esfuerza día a día por expandir su negocio en convertirse en el fabricante #1 de compresores en América, ofreciendo soluciones innovadoras y fortaleciendo su relación con clientes y proveedores. Nuestra visión “Only ONE” se basa en convertirnos en la única opción para la industria.",
  [
    "Bombas de calor",
    "Compresores"
  ],
  "Equipos y Componentes Industriales" // Categoría asignada
);

Empresas.push (MAYEKAWA);

const MERNERA = new Empresa(
  'MERNERA RESORTES',
  'Julio Braunrot',
  '4450-8977 / 4729 - +54 9 11 2327-6020 (whatsapp)',
  'administracion@mnresortes.com.ar',
  'Alejandro Malaspina 433',
  'MnResortes.png',
  'https://mnresortes.com.ar/',
  '33717728829',
  'FABRICACIÓN EN INDUSTRIAS BÁSICAS DE PRODUCTOS DE HIERRO Y ACERO N.C.P.',
  "Situados en Hurlingham, Buenos Aires, MN Resortes opera desde su planta, dedicada a la fabricación y distribución de Resortes. Somos una empresa familiar desde el origen, y contamos con tres generaciones de trabajo. Fundada en 1990 seguimos sosteniendo la misma filosofía basada en la calidad. Contamos con una trayectoria en el mercado nacional que avala el esfuerzo por mantener la satisfacción de nuestros clientes en todo momento. Enfrentando los desafíos de la competencia, hemos incorporado  tecnología de última generación, ofreciendo a nuestros clientes el mejor producto, para seguir siendo competitivos en el mercado global, a través de la velocidad y la eficiencia. A la fecha continuamos ofreciendo diseño, fabricación y servicio de la más alta calidad.",
  [
    "Resortes de compresión",
    "Resortes de torsión",
    "Resortes de formas", 
    "Resortes de fleje" 
  ],
  "Equipos y Componentes Industriales" // Categoría asignada
);

Empresas.push (MERNERA);

const METALURGICAGIRALDES = new Empresa(
  'METALURGICA GIRALDES',
  'Martina Giraldes',
  '11 5307-1570',
  'info@giraldes.com.ar',
  'Santa Fe 1571',
  'metalurgicaGiraldes.png',
  'https://www.giraldes.com.ar/?l=es_AR',
  '30577295561',
  'FABRICACIÓN DE PRODUCTOS METÁLICOS DE TORNERÍA Y/O MATRICERÍA',
  "Mecanizado pesado de precisión para la industria energética y petrolera.",
  [
    "Servicios de reparación y manufactura para la industria del petróleo, energía, minería y siderurgia"
  ],
  "Servicios de Ingeniería y Consultoría" // Categoría asignada
);

Empresas.push (METALURGICAGIRALDES);

const METALURGICASANTAMARTA = new Empresa(
  'METALURGICA SANTA MARTA',
  'Marcelo Prieto',
  '1169882666',
  'info@tallersantamarta.com.ar',
  'Barcelona 1332',
  'MetalurgicaSantaMarta.png',
  'instagram.com/tallersantamarta',
  '30709210706',
  'FABRICACIÓN DE TANQUES, DEPÓSITOS Y RECIPIENTES DE METAL',
  "Somos un pyme especializada en la fabricación de estructuras metalmecánicas. Nuestro carácter familiar nos permite una atención personalizada enfocada a comprender las necesidades operativas de cada proyecto y resolver en menor tiempo la requisición del servicio.",
  [
    "Cilindrado de chapas"
  ],
  "Equipos y Componentes Industriales" // Categoría asignada
);

Empresas.push (METALURGICASANTAMARTA);

const MIRBLA = new Empresa(
  'MIRBLA SA',
  'Claudio Blanco',
  '1140972669',
  'info@mirbla-sa.com.ar',
  'Valentín Gomez 151 Haedo',
  'mirbla.png',
  'https://mirbla-sa.com.ar/',
  '33602413379',
  'FABRICACION DE COMPRESORES, GRIFOS Y VALVULAS',
  "Empresa con 45 Años de expericiencia en el Mercado del OIL & GAS y Tratamiento  de Aguas y Efluentes.",
  [
     "Fabricación de Bombas Dosificadoras / Sistemas de Dosificación / Plantas formuladoras de Emulsiones/ Muestreadores de Gas / Muestreadores de Petróleo / Odorizadores"
  ],
  "Equipos y Componentes Industriales" // Categoría asignada
);

Empresas.push (MIRBLA);

const MM = new Empresa(
  'MM REDUCTORES',
  'Hugo Martinez',
  '1146974610',
  'recepcion@mmreductores.com.ar',
  'Mburucuyá 560',
  'mm Reductores.png',
  'www.mmreductores.com.ar ',
  '30715813439',
  'FABRICACIÓN DE COJINETES, ENGRANAJES, TRENES DE ENGRANAJE Y PIEZAS DE TRANSMISIÓN',
  "MMreductores se encuentra equipada con moderna tecnología; lo que permite integrarse a los mercados internacionales, compitiendo con países altamente tecnificado. Producimos una variada línea de equipos de gran calidad y de vital importancia para el crecimiento y modernización de la industria. Contamos  para ello con personal técnicamente capacitado para realizar los más importantes proyectos de Ingeniería",
  [
    "Reductores y Motoreductores a sinfín y corona",
    "Reductores y Motoreductores a engranajes"
  ],
  "Servicios de Ingeniería y Consultoría" // Categoría asignada
);

Empresas.push (MM);

const MORONTEXTIL = new Empresa(
  'MORON TEXTIL',
  '',
  '4629-5178/4489-1115 / 5433-7170',
  'textilmoron@gmail.com',
  'Curupayti 535',
  'tn.png',
  'https://www.textilmoron.com.ar/',
  '30708136170',
  'FABRICACION DE MEDIAS',
  "Con más de 30 años de experiencia en el rubro, Textil Morón es sinónimo de excelencia en la fabricación de cabos y sogas para cualquier uso y propósito. Poseemos una gran variedad de artículos complementarios para ferreterías, pinturerías, casas de pesca y náutica.",
  [
    "Sogas de polipropileno, cabos y cuerdas"
  ],
  "Equipos y Componentes Industriales" // Categoría asignada
);

Empresas.push (MORONTEXTIL);


const mtUniformes = new Empresa(
  'MT UNIFORMES',
  'Diego Delicati / Silvia Zarza',
  '1153684820/ 11 2548-7700',
  'mtuniformes@morontex.com.ar',
  'Almafuerte 2988, San Justo (Local) Gral.Luis Maria Campos 855, Moron (Fabrica/Showroom)',
  'mtUniformes.png',
  'https://www.mtuniformes.com.ar/',
  '20395532309',
  'CONFECCIÓN DE PRENDAS DE VESTIR',
  'MT Uniformes es una empresa argentina que diseña y confecciona indumentaria profesional con taller propio y procesos controlados. Vestimos salud, gastronomía, industria y comercios con prendas cómodas y durables, de talles fieles y terminaciones prolijas. Utilizamos telas de alto desempeño y costuras reforzadas, y ofrecemos personalización por bordado y estampado. Desarrollamos talles para cada cliente, garantizamos reposición continua y entregas a tiempo para mantener una imagen consistente en todo tu equipo.',
  [
    "Indumentaria de Trabajo",
    "Calzado de seguridad",
    "Uniformes personalizados"
  ],
  "Seguridad y Medio Ambiente" // Categoría asignada

);

Empresas.push(mtUniformes);

const OBDULIO = new Empresa(
  'OBDULIO PENNELLA S.A.',
  'Fabio Pennella',
  '1125758433',
  'info@cincado.com',
  '9 de Julio 750',
  'opsa.jpg',
  'http://www.cincado.com',
  '30594228592',
  'TRATAMIENTO Y REVESTIMIENTO DE METALES Y TRABAJOS DE METALES EN GENERAL',
  "Obdulio Pennella S.A. es una compañía líder en tratamientos superficiales de metales, especializada en servicios como cincado electrolítico, fosfatizado al manganeso, pavonado, niquelado y rotofinish. Con un enfoque en la calidad certificada y la mejora continua, brinda soluciones técnicas a industrias como la petrolera, alimenticia, de herrajes, construcción, hospitales y laboratorios, automotriz y maquinaria agrícola.",
  [
    "Tratamientos superficiales"
  ],
  "Equipos y Componentes Industriales" // Categoría asignada
);

Empresas.push(OBDULIO);

const PARCT = new Empresa(
  'PARCT SRL',
  'Eduardo Turano',
  '1146598642 / 1146509783 /1131241433',
  'info@parct.com.ar',
  'El Ceibo 586',
  'parct.png',
  'www.parct.com.ar',
  '30523000116',
  'FABRICACIÓN DE MÁQUINAS HERRAMIENTA',
  "Fabricación de máquinas y herramientas para tuberías.",
  [
    "Roscadoras",
    "Ranuradoras",
    "Biseladoras",
    "Cortatubos"
  ],
  "Servicios de Ingeniería y Consultoría" // Categoría asignada
);

Empresas.push(PARCT);

const POYE = new Empresa(
  'POYE UNIFORMES',
  'Alejandro Penna',
  '1138458543/ 1144602929/ 1144431858',
  'hola@poye.com.ar / agpenna@poye.com.ar',
  'Tronador 392',
  'poyeUniformes.png',
  'https://poye.com.ar/#empresas',
  '27163349944',
  'CONFECCIÓN DE ROPA DE TRABAJO, UNIFORMES.',
  "Somos una empresa familiar argentina con 23 años en el rubro textil, con un enfoque en el uso, la calidad de las materias primas y una confección excelente que garantizan durabilidad y comodidad en nuestras prendas. Conscientes de que nuestra responsabilidad no termina con la venta, ofrecemos una atención personalizada que continúa después de la entrega del pedido.",
  [
    "Indumentaria de Trabajo",
    "Uniformes Especializados"
  ],
  "Seguridad y Medio Ambiente" // Categoría asignada
);

Empresas.push(POYE);

const RG = new Empresa(
  'RG METALURGICA',
  'Victor Díaz',
  '4139-7823',
  'info@rgmetalurgica.com.ar',
  '14 de Julio 3342',
  'MetalurgicaRg.png',
  'https://www.rgmetalurgica.com.ar/',
  '30708948108',
  '',
  "Somos una empresa argentina con más de 40 años de experiencia en la fabricación de punzones y matrices para punzadoras CNC. Desde nuestra planta en Castelar, brindamos soluciones ágiles y de alta calidad para la industria metalúrgica, con stock permanente, desarrollos a medida y un fuerte compromiso con la innovación y el servicio postventa.",
  [
    "Punzones, matrices y accesorios para punzadoras CNC",
    "Proyecto, diseño y desarrollo de matriceria para proyectos especiales",
    "matriceria para punzonados múltiples",
    "mecanizado por CNC para trabajos especiales"
  ],
  "Servicios de Ingeniería y Consultoría" // Categoría asignada
);

Empresas.push(RG);

const SERO = new Empresa(
  'SERO ELECTRIC S.A.',
  'Ivan Alejandro Naya',
  '1160183668',
  'ventas@seroelectric.com',
  'Avenida Figueroa Alcorta 500',
  'SERO.png',
  'www.seroelectric.com',
  '30660840199',
  'Desarrollo y produccion de movilidad electrica.',
  "Sero Electric es una empresa que se dedica al desarrollo y fabricacion de vehiculos electricos livianos, Categoria L6. Hemos desarrollado a un total de 6 versiones de vehículos, para 2 y 4 pasajeros, vehículos de carga, vehículos especiales para logística, etc.",
  [
    "Vehiculos Eléctricos"
  ],
  "Tecnologías y Automatización" // Categoría asignada
);

Empresas.push(SERO);

const SINTERCAL = new Empresa(
  'SINTERCAL S.R.L.',
  'Adrián Lasciar',
  '(54-11) 4629-6573 / 4628-2870',
  'info@sintercal.com.ar',
  'Cristóbal Colón 1053',
  'Sintercal.png',
  'http://www.sintercal.com.ar/',
  '30600504920',
  'INDUSTRIAS MANUFACTURERAS N.C.P.',
  "Desde 1986, en Sintercal S.A. combinamos la tecnología de los polvos metálicos con la innovación en procesos productivos para ofrecer soluciones sinterizadas a medida, optimizando tiempos y costos para nuestros clientes.",
  [
    "Piezas sintetizadoras de alta precisión"
  ],
  "Equipos y Componentes Industriales" // Categoría asignada
);

Empresas.push(SINTERCAL);

const STILUX = new Empresa(
  'STILUX',
  'Jorge A. Camilotto',
  '11- 4623-7183 / 11-4091-9876',
  'stilux@stilux.com.ar',
  'Stilux',
  'stilux.png',
  'http://www.stilux.com.ar/',
  '20161117243',
  'FABRICACIÓN DE MATERIAL ELÉCTRICO',
  "Somos una empresa que desde 1990 dedica sus esfuerzos a la fabricación de productos eléctricos, electrónicos y de iluminación para la industria.",
  [
    "Transformadores de Baja Tensión",
    "Semáforos Viales, Peatonales y Ferroviarios"
  ],
  "Equipos y Componentes Industriales" // Categoría asignada
);

Empresas.push(STILUX);

const TECNO = new Empresa(
  'TECNO INDUSTRIAS S.A.',
  'David Langtry',
  '11 2691-6976 (whatsapp)',
  'ventas@tecnoindustrias.com.ar',
  'Vuelta de Obligado 2346, Haedo',
  'tecnoIndustrias.png',
  'https://tecnoindustrias.com.ar/',
  '30709415138',
  'Proyectos llave en mano de Parques Fotovoltaicos, fabricación patchcords para redes de Fibra óptica.',
  "Nos especializamos en proyectos integrales de energía solar: desde la provisión e instalación hasta la puesta en marcha de sistemas eficientes y sostenibles.",
  [
    "ATEES, SUYESSO, PURE, PATCHCORDS, Baterías, CATV, Fibra óptica"
  ],
  "Tecnologías y Automatización" // Categoría asignada
);

Empresas.push(TECNO);

const TODARELLO = new Empresa(
  'TODARELLO Y CIA S.R.L.',
  'Damián Todarello',
  '114489-3333/34',
  'ventas@tarewa.com',
  'Huaura 235',
  'tarewa.png',
  'http://www.tarewa.com',
  '30550358553',
  'Fabricación de maquinaria y equipo de uso general n.c.p.',
  "Resistencias eléctricas industriales. Sistemas de calefacción y control. 60 años liderando el mercado de la calefacción industrial.",
  [
    "Resistencias Eléctricas"
  ],
  "Equipos y Componentes Industriales" // Categoría asignada
);

Empresas.push(TODARELLO);

const VORTECH = new Empresa(
  'VORTECH',
  'Adrián Roson',
  '4692-5909 / 4692-1489',
  'contacto@vor-tech.com.ar',
  'Madrid 3912',
  'vorTech.png',
  'https://www.vor-tech.com.ar/',
  '30709994669',
  'FABRICACIÓN DE MAQUINARIA Y EQUIPO DE USO ESPECIAL N.C.P.',
  "Somos una empresa dedicada exclusivamente a la reparación, fabricación y comercialización de Decantadores Centrífugos Industriales, con más de treinta años de trabajo en el sector.",
  [
    "Servicio de Reparación Integral de Decantadores Centrífugos",
    "Fabricación de componentes para decantadores centrífugos"
  ],
  "Servicios de Ingeniería y Consultoría" // Categoría asignada
);

Empresas.push(VORTECH);

const WEST = new Empresa(
  'WEST LUBRICANTES S.A.C.E.I.',
  'Luis Lavarini',
  '1163087838/ 1123766358',
  'ventas@westlubricantes.com.ar / ventas2@westlubricantes.com.ar',
  'Parque Industrial UIO La Cantábrica',
  'WEST.png',
  'https://west-lubricantes.webnode.page/',
  '30551716569',
  'FABRICACIÓN DE PRODUCTOS DE LA REFINACIÓN DEL PETRÓLEO',
  "West Lubricantes es una empresa argentina con 60 años de experiencia en la formulación y elaboración de aceites y grasas lubricantes, estándares y especiales.",
  [
    "Lubricantes para engranajes y reductores",
    "aceite para motores diesel pesado",
    "anticongelantes y refrigerantes para sistemas de enfriamiento",
    "hidráulicos, lubricantes para cadenas y cinta transportadoras y grasas para rodamientos"
  ],
  "Tecnologías y Automatización" // Categoría asignada
);

Empresas.push(WEST);

const WPG = new Empresa(
  'WPG SRL',
  'Daiana Mamone',
  '1158121644',
  'info@wpgsrl.com.ar',
  'Juan José Castelli 125',
  'wpg.png',
  'https://www.wpgsrl.com.ar/',
  '30711310351',
  'PROVISION DE INGENIERIA PARA TRATAMIENTO DE AGUAS Y EFLUENTES',
  "WPG es una empresa argentina con 15 años de trayectoria dedicada a la ingeniería en el tratamiento de aguas y efluentes, como así también a la provisión de partes y equipos.",
  [
    "Servicios de ingeniería: Compuertas, Bombas dosificadoras, válvulas, seditubos, sistemas de tratamiento, antracita, sopladores, difusores, prensas, plantas compactas y repuestos"
  ],
  "Seguridad y Medio Ambiente" // Categoría asignada
);

Empresas.push(WPG);

const YACO = new Empresa(
  'YACO',
  'Marcelo Alejandro Vázquez',
  '1120877006 / 1151255876',
  'atcomercial@yaco-sa.com',
  'General Luis María Campos 596',
  'yaco.png',
  'http://www.yaco-sa.com',
  '30527260406',
  'FABRICACIÓN DE PRODUCTOS DE CAUCHO N.C.P.',
  "Yaco es una empresa argentina dedicada desde 1941 a la fabricación de caños curvos y mangueras para los mercados automotrices, industriales y agrícolas.",
  [
    "Mangueras conformadas para todo tipo de motorización (agua y combustible)",
    "Mangueras Industriales"
  ],
  "Equipos y Componentes Industriales" // Categoría asignada
);

Empresas.push(YACO);

