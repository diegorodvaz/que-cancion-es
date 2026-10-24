// =============================================================
//  LISTA DE CANCIONES DEL JUEGO
// =============================================================
//  Por cada canción completá:
//    titulo     → el nombre de la canción (es lo que se ve en el botón)
//    interprete → quién la canta (se ve en letra más chica; puede quedar vacío "")
//
//  Y después UNA de estas dos cosas:
//    itunes     → el número de la canción en Apple Music / iTunes.
//                 Suena la muestra de 30 segundos de internet.
//                 También podés pegar el enlace entero de la canción
//                 (el que termina en ...?i=123456789).
//    archivo    → el nombre exacto de un mp3 tuyo que esté en la carpeta
//                 "canciones". Si ponés archivo, se usa el mp3 y no internet.
//
//    inicio     → el segundo desde donde arranca el fragmento.
//                 Con mp3 propios: por ejemplo 45 si el estribillo está en el 0:45.
//                 Con muestras de iTunes (duran 30 segundos):
//                   - en 0, cada vez arranca en un segundo al azar entre el 0 y el 10;
//                   - con un número (por ejemplo 9), arranca siempre ahí. Conviene
//                     no pasar de 10, para que entre el pedazo más largo (20 s).
//
//    pais       → "uy" (Uruguay) o "ar" (Argentina). Sirve para elegir al empezar
//                 qué canciones escuchar. Si lo dejás vacío, la canción sale solo
//                 al elegir "De los dos países".
//
//  Cuidado: cada canción va entre llaves { }, separada por una coma.
// =============================================================

const CANCIONES = [
  // ---------- Uruguay ----------
  { pais: "uy", titulo: "Doña Soledad",            interprete: "Alfredo Zitarrosa",    itunes: "1502769272", archivo: "", inicio: 0 },
  { pais: "uy", titulo: "Recordándote",            interprete: "Alfredo Zitarrosa",    itunes: "1336919563", archivo: "", inicio: 0 },
  { pais: "uy", titulo: "Milonga para una niña",   interprete: "Alfredo Zitarrosa",    itunes: "1336919309", archivo: "", inicio: 0 },
  { pais: "uy", titulo: "Crece desde el pie",      interprete: "Alfredo Zitarrosa",    itunes: "263550276",  archivo: "", inicio: 0 },
  { pais: "uy", titulo: "Stéfanie",                interprete: "Alfredo Zitarrosa",    itunes: "1644486334", archivo: "", inicio: 0 },
  { pais: "uy", titulo: "El violín de Becho",      interprete: "Alfredo Zitarrosa",    itunes: "1502769271", archivo: "", inicio: 0 },
  { pais: "uy", titulo: "Guitarra negra",          interprete: "Alfredo Zitarrosa",    itunes: "263550865",  archivo: "", inicio: 0 },
  { pais: "uy", titulo: "Pa'l que se va",          interprete: "Alfredo Zitarrosa",    itunes: "1644486332", archivo: "", inicio: 0 },
  { pais: "uy", titulo: "Adagio en mi país",       interprete: "Alfredo Zitarrosa",    itunes: "1644486336", archivo: "", inicio: 0 },
  { pais: "uy", titulo: "A Don José",              interprete: "Los Olimareños",       itunes: "1092810117", archivo: "", inicio: 0 },
  { pais: "uy", titulo: "Orejano",                 interprete: "Los Olimareños",       itunes: "951597155",  archivo: "", inicio: 0 },
  { pais: "uy", titulo: "Isla Patrulla",           interprete: "Los Olimareños",       itunes: "1104746252", archivo: "", inicio: 0 },
  { pais: "uy", titulo: "Los orientales",          interprete: "Los Olimareños",       itunes: "262314921",  archivo: "", inicio: 0 },
  { pais: "uy", titulo: "Cielo del 69",            interprete: "Los Olimareños",       itunes: "262313876",  archivo: "", inicio: 0 },
  { pais: "uy", titulo: "Adiós mi barrio",         interprete: "Los Olimareños",       itunes: "262313719",  archivo: "", inicio: 0 },
  { pais: "uy", titulo: "Techos de cartón",        interprete: "Los Zucará",           itunes: "956020053",  archivo: "", inicio: 0 },
  { pais: "uy", titulo: "Sueltapájaros",           interprete: "Los Zucará",           itunes: "956020061",  archivo: "", inicio: 0 },
  { pais: "uy", titulo: "Leyenda del palmar",      interprete: "Los Zucará",           itunes: "1174480878", archivo: "", inicio: 0 },
  { pais: "uy", titulo: "Lamento de febrero",      interprete: "Los Zucará",           itunes: "960709575",  archivo: "", inicio: 0 },
  { pais: "uy", titulo: "Río de los pájaros",      interprete: "Aníbal Sampayo",       itunes: "960877538",  archivo: "", inicio: 0 },

  // ---------- Argentina ----------
  { pais: "ar", titulo: "Zamba de mi esperanza",   interprete: "Jorge Cafrune",        itunes: "1030803151", archivo: "", inicio: 0 },
  { pais: "ar", titulo: "Luna tucumana",           interprete: "Atahualpa Yupanqui",   itunes: "1019754979", archivo: "", inicio: 0 },
  { pais: "ar", titulo: "Alfonsina y el mar",      interprete: "Mercedes Sosa",        itunes: "1444063237", archivo: "", inicio: 0 },
  { pais: "ar", titulo: "Merceditas",              interprete: "Los Chalchaleros",     itunes: "1613885890", archivo: "", inicio: 0 },
  { pais: "ar", titulo: "Kilómetro 11",            interprete: "Tránsito Cocomarola",  itunes: "680592049",  archivo: "", inicio: 0 },
  { pais: "ar", titulo: "La López Pereyra",        interprete: "Los Chalchaleros",     itunes: "1613884591", archivo: "", inicio: 0 },
  { pais: "ar", titulo: "Los ejes de mi carreta",  interprete: "Atahualpa Yupanqui",   itunes: "1336452817", archivo: "", inicio: 0 },
  { pais: "ar", titulo: "Piedra y camino",         interprete: "Atahualpa Yupanqui",   itunes: "1019754144", archivo: "", inicio: 0 },
  { pais: "ar", titulo: "Balderrama",              interprete: "Mercedes Sosa",        itunes: "1443421999", archivo: "", inicio: 0 },
  { pais: "ar", titulo: "Zamba de Vargas",         interprete: "Los Chalchaleros",     itunes: "1613884817", archivo: "", inicio: 0 },
  { pais: "ar", titulo: "Zamba de la candelaria",  interprete: "Los Chalchaleros",     itunes: "538843795",  archivo: "", inicio: 0 },
  { pais: "ar", titulo: "El arriero",              interprete: "Atahualpa Yupanqui",   itunes: "1157990780", archivo: "", inicio: 0 },
  { pais: "ar", titulo: "Paisaje de Catamarca",    interprete: "Jorge Cafrune",        itunes: "477002349",  archivo: "", inicio: 0 },
  { pais: "ar", titulo: "Gracias a la vida",       interprete: "Mercedes Sosa",        itunes: "992104648",  archivo: "", inicio: 0 },
  { pais: "ar", titulo: "Zamba para olvidarte",    interprete: "Daniel Toro",          itunes: "1503343082", archivo: "", inicio: 0 },
  { pais: "ar", titulo: "Luna cautiva",            interprete: "Soledad",              itunes: "1160065973", archivo: "", inicio: 0 },
  { pais: "ar", titulo: "Añoranzas",               interprete: "Los Manseros Santiagueños", itunes: "321890480", archivo: "", inicio: 0 },
  { pais: "ar", titulo: "Al jardín de la República", interprete: "Los Fronterizos",    itunes: "332682408",  archivo: "", inicio: 0 },
  { pais: "ar", titulo: "El cosechero",            interprete: "Ramona Galarza",       itunes: "1056572439", archivo: "", inicio: 0 },
  { pais: "ar", titulo: "Puente Pexoa",            interprete: "Horacio Guarany",      itunes: "1056896459", archivo: "", inicio: 0 },
];
