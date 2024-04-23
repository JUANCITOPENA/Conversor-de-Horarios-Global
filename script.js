// Lista completa de zonas horarias sin duplicados
const todasLasZonasHorarias = [
    "America/Santo_Domingo",
    "America/New_York",
    "America/Los_Angeles",
    "America/Chicago",
    "America/Denver",
    "America/Phoenix",
    "America/Anchorage",
    "America/Honolulu",
    "America/Bogota",
    "America/Mexico_City",
    "America/Lima",
    "America/Santiago",
    "America/Buenos_Aires",
    "America/Sao_Paulo",
    "America/Caracas",
    "America/Montevideo",
    "Europe/London",
    "Europe/Paris",
    "Europe/Berlin",
    "Europe/Madrid",
    "Europe/Rome",
    "Europe/Moscow",
    "Europe/Athens",
    "Europe/Amsterdam",
    "Europe/Lisbon",
    "Europe/Zurich",
    "Africa/Cairo",
    "Africa/Johannesburg",
    "Africa/Lagos",
    "Asia/Tokyo",
    "Asia/Shanghai",
    "Asia/Hong_Kong",
    "Asia/Singapore",
    "Asia/Seoul",
    "Asia/Kuala_Lumpur",
    "Asia/Bangkok",
    "Asia/Jakarta",
    "Asia/Mumbai",
    "Asia/Delhi",
    "Asia/Dubai",
    "Asia/Tehran",
    "Australia/Sydney",
    "Australia/Melbourne",
    "Australia/Perth",
    "Australia/Adelaide",
    "Australia/Brisbane",
    "Pacific/Auckland",
    "Pacific/Fiji",
    "Pacific/Honolulu"
];

// Validación de zona horaria
function validarZonaHoraria(zona) {
    return todasLasZonasHorarias.includes(zona);
}

// Llenar el datalist y el select con todas las zonas horarias
function llenarOpciones() {
    const datalist = document.getElementById("timezone-list");
    const select = document.getElementById("timezone-select");
    
    datalist.innerHTML = ""; // Limpiar antes de agregar
    select.innerHTML = "<option value=''>Seleccione una zona horaria</option>"; // Opción predeterminada
    
    todasLasZonasHorarias.forEach((zona) => {
        // Llenar el datalist para autocompletado
        const optionDatalist = document.createElement("option");
        optionDatalist.value = zona;
        datalist.appendChild(optionDatalist);
        
        // Llenar el select para la lista desplegable
        const optionSelect = document.createElement("option");
        optionSelect.value = zona;
        optionSelect.text = zona;
        select.appendChild(optionSelect);
    });
}

// Filtrar el datalist según el texto escrito
function filterTimezones() {
    const input = document.getElementById("timezone-input").value.trim().toLowerCase();
    const datalist = document.getElementById("timezone-list");

    datalist.innerHTML = ""; // Limpiar antes de agregar
    
    todasLasZonasHorarias.forEach((zona) => {
        if (zona.toLowerCase().includes(input)) {
            const option = document.createElement("option");
            option.value = zona;
            datalist.appendChild(option);
        }
    });
}

// Seleccionar desde el select y actualizar el input
function selectTimezone() {
    const select = document.getElementById("timezone-select");
    const input = document.getElementById("timezone-input");
    
    input.value = select.value; // Asignar valor del select al input
}

// Obtener la hora de la zona horaria seleccionada
// Función para obtener la hora de la zona horaria seleccionada y mostrar resultados
async function getTime() {
    const timezone = document.getElementById("timezone-input").value.trim(); 
    const resultElement = document.getElementById("result");

    if (timezone === "") {
        resultElement.innerText = "Por favor, ingrese una zona horaria.";
        resultElement.className = "result-section result-negative"; // Fondo rojo para errores
        return;
    }

    if (!validarZonaHoraria(timezone)) {
        resultElement.innerText = "Zona horaria no encontrada. Por favor, ingrese una zona horaria válida.";
        resultElement.className = "result-section result-negative"; // Fondo rojo para errores
        return;
    }

    try {
        const response = await fetch(`http://worldtimeapi.org/api/timezone/${timezone}`);
        if (!response.ok) {
            throw new Error("Zona horaria no encontrada");
        }

        const data = await response.json();
        const { datetime, timezone: tz } = data;
        const fechaHora = new Date(datetime);
        const resultado = `Zona horaria seleccionada: ${tz}\nFecha y hora: ${fechaHora.toLocaleString()}`;

        resultElement.innerText = resultado;
        resultElement.className = "result-section result-positive"; // Fondo amarillo para resultados exitosos
    } catch (error) {
        resultElement.innerText = "Error al obtener la hora: " + error.message;
        resultElement.className = "result-section result-negative"; // Fondo rojo para errores
    }
}


// Llamar a la función para llenar las opciones al cargar la página
llenarOpciones();
