# Conversor-de-Horarios-Global
Conversor de Horarios Global con HTML5, CSS,JAVASCRIPT, API REST, Fetch API, Y Manipulación del DOM

El Conversor de Horarios Global es una solución a un problema común: la dificultad para coordinar actividades o eventos en diferentes zonas horarias. Ya sea para planificar una llamada de trabajo, una reunión familiar, o un viaje, conocer la hora exacta en distintas ubicaciones es esencial. Esta aplicación te permite convertir y obtener información sobre zonas horarias de forma rápida y sencilla.

## ¿Cómo funciona?
El Conversor de Horarios Global proporciona una lista desplegable con todas las zonas horarias del mundo. Los usuarios pueden seleccionar una zona horaria de esta lista o escribir manualmente para obtener sugerencias de autocompletado. Una vez seleccionada una zona horaria, la aplicación hace una solicitud a una API REST para obtener la fecha y la hora actual de esa ubicación específica.

### Flujo del proceso
1. El usuario selecciona o busca una zona horaria en la lista o el campo de autocompletado.
2. La aplicación envía una solicitud HTTP utilizando la **Fetch API** para obtener la información de la zona horaria desde una fuente externa.
3. La API devuelve información sobre la zona horaria seleccionada, incluida la fecha y hora actual.
4. La aplicación muestra estos datos en la interfaz de usuario, permitiendo al usuario ver la hora actual en esa zona horaria.
5. En caso de error, como una zona horaria no válida, la aplicación muestra un mensaje de error claro y comprensible.

## Tecnologías Utilizadas
El proyecto utiliza una combinación de tecnologías modernas para proporcionar una experiencia fluida y atractiva:

- **HTML**: Para estructurar la página y organizar el contenido.
- **CSS**: Para estilizar la interfaz y asegurar un diseño responsive, que se adapte a diferentes tamaños de pantalla y dispositivos.
- **JavaScript**: Para gestionar la lógica de la aplicación, manejar eventos del usuario, y hacer solicitudes a la API.
- **Datalist y Select**: Para proporcionar autocompletado y opciones de selección en listas desplegables, permitiendo a los usuarios elegir zonas horarias de manera eficiente.
- **API REST**: Se usa para obtener datos actualizados sobre las zonas horarias. En este caso, se emplea la API pública `worldtimeapi.org`.
- **Fetch API**: Para hacer solicitudes HTTP asíncronas, permitiendo que la aplicación reciba datos en tiempo real sin recargar la página.
- **Manipulación del DOM**: Para actualizar dinámicamente el contenido de la página y aplicar estilos en respuesta a las acciones del usuario y a los resultados de la API.

## Casos de uso
El Conversor de Horarios Global es útil para una variedad de situaciones:

- **Profesionales que trabajan con equipos internacionales**: Para coordinar reuniones o llamadas.
- **Viajeros frecuentes**: Para conocer la hora local en sus destinos.
- **Estudiantes internacionales**: Para mantenerse conectados con amigos y familiares en diferentes partes del mundo.

Esta herramienta facilita la sincronización de actividades y la planificación a nivel global, simplificando un problema común para muchas personas.

