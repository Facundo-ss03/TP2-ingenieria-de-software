
const charlas = [
    

    {
        id:"charla1",
        name: "Introducción al Rol de Autoridad de Mesa",
        tema:"Funciones básicas, derechos, responsabilidades y el impacto de la autoridad de mesa en la transparencia democrática.",
        direction: "GKA José C. Paz Buenos Aires AR, Zuviría 4933, B1665",
        horarios:"10 de octubre de 2026, 18:00 - 19:30 hs",
        
        coords: [-34.619683, -58.756524],
        image:"imagenes/cocina1.jfif"
        
    },
    {
        id:"charla2",
        name: "Apertura de Mesa y Acondicionamiento del Cuarto Oscuro",
        tema:"Procedimiento inicial de la jornada electoral, verificación del material, armado de la urna y preparación del cuarto oscuro.",
        direction: "Roque Sáenz Peña 5183, B1665 José C. Paz, Provincia de Buenos Aires",
        horarios:"Fecha: 14 de octubre de 2026, 10:00 - 11:30 hs",

        coords:[-34.619683, -58.456524],
        image:"imagenes/cocina2.jfif"
    },
    {
        id:"charla3",
        name: "Acreditación de Identidad y Padrón Electoral",
        tema:"Tipos de documentos válidos, manejo e impugnación en el padrón, asistencia a electores con discapacidad y voto accesible.",
        direction: "Roque Sáenz Peña 1234, B1665 San Miguel, Provincia de Buenos Aires",
        horarios:"Fecha: 18 de octubre de 2026, 17:00 - 18:30 hs",

        coords:[-34.619683, -58.466524],
        image:"imagenes/imagenArte3.jpeg"
    },
    {
        id:"charla4",
        name: "Escrutinio de Mesa y Conteo de Votos",
        tema:"Clasificación de votos (válidos, nulos, impugnados y recurridos) y técnicas para confeccionar el acta y el certificado de escrutinio sin errores.",
        direction: "Juan Sáenz Peña 5183, B1665 Bella vista, Provincia de Buenos Aires",
        horarios:"Fecha: 22 de octubre de 2026, 19:00 - 20:30 hs",

        coords:[-34.619683, -58.556524],
        image:"imagenes/imagenArte2.jpeg"
    },
    {
        id:"charla5",
        name: "Resolución de Conflictos y Relación con Fiscales",
        tema:"Vínculo con fiscales partidarios, manejo de situaciones imprevistas y normativa legal para resolver incidentes en la mesa.",
        direction: "Marta Peña 5183, B1665 Polvorines, Provincia de Buenos Aires",
        horarios:"Fecha: 26 de octubre de 2026, 15:00 - 16:30 hs",

        coords:[-35.619683, -58.456524],
        image:"imagenes/imagenArte1.jfif"
    },
    {
        id:"charla7",
        name: "Charla de Cierre: Preparación Final para la Jornada Electoral",
        tema:"Repaso general, dudas frecuentes, entrega de documentación al correo al finalizar la jornada y aspectos administrativos de la remuneración/viáticos.",
        direction: "Roque Sáenz Peña 5183, Pilar, Provincia de Buenos Aires",
        horarios:"Fecha: 30 de octubre de 2026, 18:30 - 20:00 hs",

        coords:[-34.619683, -59.456524],
        image:"imagenes/cocina3.jfif"
    },
    {
        id:"charla8",
        name: "Uso de Tecnología y Nuevas Herramientas Electorales",
        tema:"Incorporación de herramientas digitales en el proceso electoral, transmisión de datos desde el establecimiento y nuevos protocolos tecnológicos para el escrutinio.",
        direction: "Altube 5183, B1665 Rodriguez, Provincia de Buenos Aires",
        horarios:"Fecha: 2 de noviembre de 2026, 18:00 - 19:30 hs",

        coords:[-35.619683, -68.456524],
        image:"imagenes/cocina2.jfif"
    },
    {
        id:"charla9",
        name: "Accesibilidad e Inclusión Electoral",
        tema:"Protocolos para el Voto Accesible, atención prioritaria, uso de la plantilla Braille y adecuación de espacios para personas con discapacidad o movilidad reducida.",
        direction: "Carlos Paz 5183, B1665 Moreno, Provincia de Buenos Aires",
        horarios:"Fecha: 4 de noviembre de 2026, 16:30 - 18:00 hs",

        coords:[-34.619683, -60.456524],
        image:"imagenes/cocina1.jfif"
    }
];



let map = L.map('mi_mapa').setView([-34.619683, -58.756524], 12);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        
        const misMarcadores = {};

function charlasIniciales(){
    let text = "";
    charlas.forEach(x=>{
         text += `<div class="result-box item-charla" id="${x.id}" data-nombre="${x.name.toLowerCase()}"" onclick="alCliquearCharlaEnLista('${x.id}')">
                    <div class="search-result">
                        <div class="description">
                            <div class="title"><strong>${x.name}</strong></div>
                            
                            <div> ${x.direction}</div>
                            <div> ${x.horarios}</div>
                            
                            
                        </div>
                        <img class="search-result-image" src="${x.image}" alt="charla ${x.image}">
            
                        
                    </div>
            </div>`;
            document.querySelector('.search-content').innerHTML = text;
});
    
}


        function crearYRegistrarMarcador(id, coords, nombre) {
            const m = L.marker(coords).addTo(map);
            
        
            m.idRelacionado = id;
            
    
            
            m.bindPopup(`<b>${nombre}</b>`);
            misMarcadores[id] = m;

            m.on('click', alCliquearMarcador);
            
            return m;
        }


charlasIniciales();


charlas.forEach(t => {
    if(t.coords) crearYRegistrarMarcador(t.id, t.coords, t.name);
});

       
    
        function alCliquearMarcador(e) {
            const id = e.target.idRelacionado;
            const elemento = document.getElementById(id);

            if (elemento) {
            
                document.querySelectorAll('.item-charla').forEach(el => {
                    el.style.background = '#D0E1F9';
                elemento.style.background = '#a2badd';
                
                
                elemento.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                });

               
            
            }
        }

        

        function alCliquearCharlaEnLista(idcharla) {
            const marcador = misMarcadores[idcharla];

            if (marcador) {
                
                map.flyTo(marcador.getLatLng(), 15);
                marcador.openPopup();

                
                const charlaDiv = document.getElementById(idcharla);
                
                const nombre = charlaDiv.querySelector('.title').innerText;
                const tipo = charlaDiv.querySelector('.description div:nth-child(2)').innerText;
                const imagenSrc = charlaDiv.querySelector('img').src;
                
                
                const charlaInfo = charlas.find(t => t.id === idcharla);
                if(charlaInfo){
                    const contenido = document.getElementById('contenido-detalle');
                contenido.innerHTML = `<div class="detalle-header">
                    <img src="${charlaInfo.image}" style="width:100%; border-radius:15px; margin-bottom:15px;">
                    <h2 style="margin:0; color:#283655;">${charlaInfo.name}</h2>
                    <span style="color:#4D648D; font-weight:bold;"></span>
                </div>
                <div class="detalle-body" style="margin-top:20px; text-align:left;">
                    <p><strong>Tema:</strong> ${charlaInfo.tema}</p>
                    <p><strong> Dirección:</strong> ${charlaInfo.direction}</p>
                    <p><strong> Horarios:</strong> ${charlaInfo.horarios}</p>
                </div>
        
                    
                    
                `;
                document.getElementById('detalle-charla').classList.add('open');

                }


            

                
            }
        }

        function cerrarPanel() {
            document.getElementById('detalle-charla').classList.remove('open');
        }


    
        function mostrar() {
            const searchSection = document.querySelector('.search-section');
            
            searchSection.classList.toggle('hidden');

            searchSection.addEventListener('transitionend', () => {
                map.invalidateSize(); 
            }, { once: true }); 
        }   


const inputDelUsuario = document.querySelector('.search-input');
inputDelUsuario.addEventListener("input",function(){
    const busquedaUsuario = inputDelUsuario.value.toLowerCase();

    const charlas = document.querySelectorAll('.item-charla');
    charlas.forEach(div => {
        const nombre = div.getAttribute('data-nombre');
        const tipo = div.getAttribute('data-tipo');

        if(nombre.includes(busquedaUsuario)||tipo.includes(busquedaUsuario)){
            div.style.display="block";
        }else{
            div.style.display="none";
        }
    });
});



window.onload=function(){
    map.invalidateSize();
}
























//----------------------------------------------------------------
