## **Proyecto:** Mapa georreferencial en servidor para el Programa Munigestion



### **Autor:** Emanuel Castillo



#### **Resumen**
 
El proyecto consiste en la implementación de un mapa georreferencial de OpenStreetMap, en un servidor local y en un servidor web o nube, usando el mismo en el Programa Munigestión. 
Este Programa surge en 2014 a partir del Convenio entre UNL y UNR, generando lineamientos de acción y ejecución para brindar capacitación a los gobiernos 
locales de la Provincia de Santa Fe y a sus agentes, entendiéndola como una herramienta prioritaria para el fortalecimiento de las capacidades de gestión 
e innovación política. Por lo tanto, el mayor énfasis puesto desde este Programa de Extensión Universitaria es ofrecer propuestas de capacitación a los 
gobiernos locales propiciando articulaciones entre la misión universitaria de la extensión y las políticas públicas. Actualmente el Programa depende de la 
Secretaria de Fortalecimiento Territorial de la Universidad Nacional del Litoral.

En este mapa georreferencial estaran marcadas todas las localidades de la Provincia de Santa Fe que tienen convenio firmado en el marco del Programa, 
junto a datos de las mismas y sus participaciones en las distintas modalidades del Munigestión.

Se compartirá en la página web oficial de la Universidad Nacional del Litoral y la Universidad Nacional de Rosario, como también en la página web 
oficial del Programa Munigestión para que toda la comunidad vea el alcance y el área de influencia del Programa en toda la provincia.


#### **Estado del arte** 

Indagando en la web encontré un proyecto similar llamado "MapServer" pero mucho mas complejo, ya que fue originalmente desarrollado por la Universidad de 
Minnesota (UMN) con el proyecto ForNet en cooperación con la NASA, y el departamento de recursos naturales (MNDNR). Más tarde fue recibido por el proyecto 
TerraSIP, un proyecto patrocinado entre la NASA y la UMN y un consorcio de intereses en el manejo de la tierra.
MapServer es un motor de representación de datos geográficos de codigo abierto escrito en C. Además de navegar por los datos SIG, MapServer permite
crear "mapas de imágenes geográficas", es decir, mapas que pueden dirigir a los usuarios al contenido. Por ejemplo, Minnesota DNR RecreationCompass 
proporciona a los usuarios más de 10,000 páginas web, informes y mapas a través de una sola aplicación. La misma aplicación sirve como un "motor de mapa" 
para otras partes del sitio, proporcionando un contexto espacial donde sea necesario. 

MapServer es uno de los proyectos fundadores de la fundación OSGeo , y es mantenido por un número creciente de desarrolladores (cerca de 20) de todo 
el mundo. Es apoyado por un grupo diverso de organizaciones que financia mejoras y mantenimiento, y administrado dentro de OSGeo por el Comité Directivo
del Proyecto MapServer compuesto por desarrolladores y otros colaboradores. Todo el código fuente está disponible de forma abierta a través de GitHub .

Se diferencia mucho en el trabajo que voy a hacer, por ser mas complejo como mencioné antes y porque es destinado a una cantidad mayor de usuarios. 
Mi trabajo va a ser destinado especialmente a los que participan en el Programa Munigestion, ya que en el mapa solo van a estar marcadas las localidades 
vinculadas al programa.

Parte de mi proyecto se va a basar en el proceso de desarrollo de MapServer solo para usarlo de referencia ya que contiene mucho mas herramientas  y 
paquetes. 


#### **Objetivos** 

**General:**

Este trabajo tiene como objetivo general mostrar la influencia del programa Munigestion en toda la Provincia de Santa Fe, mediante un mapa georreferencial alojado en un servidor local y en un servidor web o nube  que contenga todas las localidades adheridas marcadas. Con esto se pretende mejorar y facilitar el acceso a la informacion del programa, mostrando todas las localidades adheridas con sus datos de participaciones en las distintas modalidades del programa y sus estados de situacion, a fin de impactar a los gobiernos locales con el alcance del mismo. Ademas de promover y difundir para trasmitir interes a las localidades no adheridas. 

**Especificos:**
 
* Mostrar el alcance del programa en la Provincia de Santa Fe
* Informar a los agentes de los gobiernos locales y a las autoridades de las localidades adheridas de su estado de situacion en el programa
* Mostrar a los agentes de los gobiernos locales y a las autoridades de las localidades adheridas sus participaciones en las distintas modalidades del programa
* Difundir el mapa en las diferentes paginas oficiales de las universidades y en las redes sociales
* Promover y transmitir interes a las localidades no adheridas

#### **Metodologia:**

En principio procedo a instalar el Leaflet en la maquina y descargar los archivos necesarios para desplegar el codigo. Leaflet es una librería open-source JavaScript que permite crear mapas interactivos para la web y para entorno móvil de manera fácil. Con esta biblioteca se puede usar mapas base de Google, ESRI, OpenStreetMap, entre otros, agregar marcadores, polígonos, líneas, realizar zoom y extender su funcionalidad con una buena cantidad de plugins, entre ellos, muchos desarrollados por ESRI.
Una vez instalado procedo a desarrollar el codigo html, la hoja de estilo .css y los archivos .js (Javascript) con Notepad++. Los archivos seran los siguientes:
* index.html : Aqui se desplegará el codigo para poder visualizar el mapa con Leaflet donde tambien irá añadido el archivo localidades.js y la hoja de estilo map.css
* map.css : Hoja de estilo 
* map.js : Aqui se desplegará la capa base y la funcion para los popups o marcadores. Tambien irá añadida la capa con L.geoJson y la variable del objeto geoJSON añadida en el archivo js
* localidades.js : Este va a ser el archivo GeoJSON con la informacion de los popups o marcadores 

En el archivo localidades.js van a estar los marcadores de las localidades de la Provincia de Santa Fe vinculadas al Programa Munigestion. Estos marcadores o popups van con una descripcion a modo de etiqueta o ventana con los datos de cada una, tales como el nombre de la localidad, cant. de habitantes, tipo de gobierno local, autoridad actual, partido politico de la autoridad, que gobierno local tiene convenio firmado con el programa, coordenadas, entre otros. Para hacer esto voy a utilizar GeoJSON. GeoJSON es un formato estándar abierto diseñado para representar elementos geográficos sencillos, junto con sus atributos no espaciales, basado en JavaScript Object Notation. El formato es ampliamente utilizado en aplicaciones de cartografía en entornos web al permitir el intercambio de datos de manera rápida, ligera y sencilla. La gramática del formato está basada en el estándar WKT del Open Geospatial Consortium, con unas geometrías que pueden ser de tipo punto (direcciones, ubicaciones, puntos de interés, etc.), líneas (calles, carreteras, fronteras, etc.), polígonos (países, provincias, parcelas catastrales, etc.) y colecciones de estos tipos. GeoJSON usa un sistema de referencia de coordenadas geográficas, WGS84 y unidades en grados decimales.

En resumen, el codigo html va a contener la libreria Leaflet para poder visualizar el mapa de OpenStreetMaps, va a estar vinculada la hoja de estilo  y los archivos .js (Javascript) necesarios. Tambien habrá una lista de las localidades.
El desarrollo de la pagina web toma un tiempo aproximado de 7 dias. 

Cuando ya tenga el mapa ,desde la Universidad procedo a alojarlo en un servidor local usando XAMPP. Asi se podrá compartir a cualquier persona que esté conectada a la misma red. Se podrá usar en reuniones por ejemplo. Tambien lo alojaria en GitLab, ya que conviene mas que alojarlo en un servidor web. GitLab tiene una herramienta llamada GitLab Pages, que te permite publicar el código del sitio en vivo en la Web. Esto es para compartirlo publicamente a cualquier persona de la Provincia que este interesada en ver el alcance del programa. Otra forma de compartirlo en la web es embeberlo en la pagina oficial del Programa. 
El tiempo aproximado de este ultimo paso es de 2 dias.







#### **Licenciamiento y Publicacion:** 

Este proyecto será publicado en Gitlab bajo GNU GENERAL PUBLIC LICENSE v3.0

#### **Documentación:**

La documentacion del proyecto se llevara acabo en este mismo proyecto de Gitlab.

https://gitlab.com/emanueladriancastillo/Trabajo-Final-Tec.SL

