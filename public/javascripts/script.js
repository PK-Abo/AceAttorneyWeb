import { allCharacters } from '/javascripts/allCharacters.js';
import { allGames } from '/javascripts/allCharacters.js';
import { GAMES } from '/javascripts/allCharacters.js';
import { COLLECTIONS } from '/javascripts/allCharacters.js';
import { categorias } from '/javascripts/categorias.js';
import { nombresCategorias } from '/javascripts/categorias.js';

$(document).ready(function() {

    let subventanaAbierta = null;

    let collectionsStatus = {
        showAAT: true,
        showAJT: true,
        showAAI: true,
        showTGAA: true
    };

    const collections = Object.values(COLLECTIONS);
    const titleGames = Object.values(GAMES);

    const selectedCharacters = {};

    const toggleImage = (collection, toggleId) => {
        switch (collection) {
            case 'AAT':
                collectionsStatus.showAAT = !collectionsStatus.showAAT;
                break;
            case 'AJT':
                collectionsStatus.showAJT = !collectionsStatus.showAJT;
                break;
            case 'AAI':
                collectionsStatus.showAAI = !collectionsStatus.showAAI;
                break;
            case 'TGAA':
                collectionsStatus.showTGAA = !collectionsStatus.showTGAA;
                break;
        }
        $(`#${toggleId}`).toggleClass('inactive'); // Cambia el estado visual
        toggleCharacters(); //cambia las cosas que mostrar
    };
    
    // Evento para las imágenes de colección
    $('.toggle-image').on('click', function() {
        let collection = $(this).attr('alt');
        toggleImage(collection, $(this).attr('id'));
    });


    const toggleCollectionsVisibility = (item) => {
        // Verificar si el item (personaje o juego) pertenece a alguna colección habilitada
        const isVisible = collections.some(collection => 
            item.collection.includes(collection) && collectionsStatus[`show${collection}`]
        );
    
        return isVisible;
    };

    const getCategoryKey = (character) => {
        for (const catKey in selectedCharacters) {
            if (selectedCharacters[catKey].character === character.name) {
                return catKey;  // Retorna la clave de la categoría
            }
        }
        return null;
    };
    
    const toggleCharacters = () => {
        $('.opcion').each(function() {
            const alt = $(this).attr('alt');
            const character = allCharacters.find(c => c.name === alt);
            const game = allGames.find(g => g.name === alt);

            if (character) {
                const cat = getCategoryKey(character); // Obtener la clave de la categoría (suponiendo que tienes alguna forma de obtener esto)
                const selectedCharacter = selectedCharacters[cat];

                if (selectedCharacter && selectedCharacter.character === character.name) {
                    // Solo mostramos el botón cancel para este personaje si pertenece a una colección activa
                    const isCharacterInActiveCollection = toggleCollectionsVisibility(character);
                    
                    // Selector específico para el botón cancel en la categoría actual
                    const cancelButton = $(`#subventana${cat} img[alt='cancel'][class*='${character.name}']`);
                    
                    if (isCharacterInActiveCollection) {
                        cancelButton.show();  // Mostrar el cancel solo en esta categoría
                        $(this).show();
                        $(`#subventana${cat} .opcion[alt='${alt}']`).hide();
                    } else {
                        cancelButton.hide();  // Ocultar el cancel solo en esta categoría
                        $(this).hide();
                    }                    
                }
                else {
                    const isCharacterVisible = toggleCollectionsVisibility(character);
                    $(this).toggle(isCharacterVisible);
                    
                    // Verificar si el 'cancel' asociado a este personaje no está oculto
                    const cancelElement = $(`img[alt='cancel'][class*='${character.name}']`);
                    if (cancelElement.length && cancelElement.css('display') !== 'none') {
                        // Si el cancel está visible y el personaje no pertenece a colecciones activas, ocultarlo
                        if (!isCharacterVisible) {
                            $(this).hide();  // Ocultar el personaje
                        }
                    }
                }
            } else if (game) {
                // Si el juego pertenece a una colección activa, mostrarlo; de lo contrario, ocultarlo
                $(this).toggle(toggleCollectionsVisibility(game));
            }
        });
    };


    // Función para generar cada ventana
    const generarVentanas = () => {
        Object.keys(categorias).forEach(catKey => {
            const { items: cat, isSplit } = categorias[catKey];
    
            const ventanaHTML = `
            <div class="col-auto">
                <label class="switch mb-2 mt-5">
                    <input type="checkbox" ${isSplit ? 'checked' : ''} id="switch-${catKey}">
                    <span class="slider round"></span>
                </label>
                <div class="position-relative" style="width: 160px;">
                    <div class="d-flex align-items-center justify-content-center" style="height: 50px; border: solid 2px grey; border-radius: 10px; margin-bottom: 10px; background-color: white;">
                        ${nombresCategorias[catKey]}
                    </div>
                    <div id="cuadrado${catKey}" class="cuadrado" style="height: 200px; background-color: lightgray; cursor: pointer;"></div>
                    <div id="nombrePersonaje${catKey}" class="d-flex align-items-center justify-content-center" style="height: 50px; border: solid 2px grey; border-radius: 10px; margin-top: 10px; background-color: white;">
                        -
                    </div>
                </div>
                <div id="subventana${catKey}" class="card position-absolute" style="display: none;">
                    <div class="card-body d-flex flex-wrap justify-content-start">
                        ${generarContenidoSubventana(catKey, isSplit)}
                    </div>
                </div>
            </div>
            `;
    
            $('#ventanasContainer').append(ventanaHTML);
    
            // Agregar el evento 'change' al switch
            $(`#switch-${catKey}`).on('change', (event) => {
                categorias[catKey].isSplit = event.target.checked;
                // Actualizar el contenido de la subventana 
                $(`#subventana${catKey} .card-body`).html(generarContenidoSubventana(catKey, categorias[catKey].isSplit));
                toggleCharacters();
            });
        });
    };
    
    // Función para generar el contenido de la subventana según el valor de isSplit
    const generarContenidoSubventana = (catKey, isSplit) => {
        if (isSplit) {
            return titleGames.map(name => `
                <img src='/images/specials/${name}.png' alt="${name}" class="opcion img-thumbnail" style="width: 70px; height: 70px; cursor: pointer;" />
            `).join('');
        } else {
            const cat = categorias[catKey].items;
            const bgAlt = obtenerBgAlt(catKey);

            return cat.map(character => {
                // Verificar si el alt del fondo coincide con el nombre del personaje
                if (bgAlt && bgAlt === character.name) {
                    // Si coincide, mostrar la imagen de cancelación y ocultar la miniatura
                    return `
                        <img src='/images/characters/${character.name} Mini.png' alt="${character.name}" class="${character.className} opcion img-thumbnail" style="width: 70px; height: 70px; cursor: pointer; display: none" />
                        <img src='/images/others/cancel.png' alt="cancel" class="${character.name} opcion img-thumbnail" style="width: 70px; height: 70px; cursor: pointer;" />
                    `;
                } else {
                    // Si no coincide, mostrar la miniatura normalmente
                    return `
                        <img src='/images/characters/${character.name} Mini.png' alt="${character.name}" class="${character.className} opcion img-thumbnail" style="width: 70px; height: 70px; cursor: pointer;" />
                        <img src='/images/others/cancel.png' alt="cancel" class="${character.name} opcion img-thumbnail" style="width: 70px; height: 70px; cursor: pointer; display: none" />
                    `;
                }
            }).join('');
        
        }
    };
    
    
    // Delegación de eventos para los clicks en los cuadrados
    $('#ventanasContainer').on('click', '.cuadrado', function() {
        const catKey = $(this).attr('id').replace('cuadrado', '');

        if (subventanaAbierta !== `#subventana${catKey}`) {
            $(".card").hide();
        }

        $(`#subventana${catKey}`).toggle();
        subventanaAbierta = $(`#subventana${catKey}`).is(":visible") ? `#subventana${catKey}` : null;
    });


    // Delegación de eventos para los clicks en las opciones de imágenes
    $('#ventanasContainer').on('click', '.opcion', function() {

        if ($(this).attr('src').includes("specials")) {
            seleccionarJuego(this);
        }
        else {
            seleccionarPersonaje(this);
        }
        
    });


    function obtenerBgAlt(cat) {
        // Verificar si hay imagen de fondo en `#cuadrado${catKey}`
        const bgImageUrl = $(`#cuadrado${cat}`).css("background-image");
        let bgAlt = bgImageUrl ? bgImageUrl.split('/').pop().split('.')[0] : null;
    
        // Decodificar URI y eliminar " Art" si está presente
        if (bgAlt) {
            bgAlt = decodeURIComponent(bgAlt); // Convierte %20 en espacios
            if (bgAlt.endsWith(" Art")) {
                bgAlt = bgAlt.replace(" Art", ""); // Elimina " Art" al final
            }
        }
    
        return bgAlt;
    }


    function seleccionarJuego(el) {
        const clickedImgSrc = $(el).attr('src'); // Obtener la fuente de la imagen clickeada
        const gameName = clickedImgSrc.split('/').pop().split('.')[0]; // "AA1"

        // Obtener la clave de categoría actual
        const cat = $(el).closest('.card').attr('id').replace('subventana', '');

        // Extraer la parte relevante de `catKey` para la comparación
        const categoryName = cat.replace('favorite', '').toLowerCase();

        let filteredCharacters;
        if (['favoriteDefense', 'favoriteProsecutor', 'favoriteAssistant', 'favoriteDetective', 'favoriteVictim', 'favoriteCulprit', 'favoriteDefendant', 'favoriteWitness'].includes(cat)) {
            // Lógica especial para las categorías 1 y 2
            filteredCharacters = allCharacters.filter(character => 
                character.game.includes(gameName) && character.className.includes(categoryName) // Reemplaza 'specialCondition' con tu lógica
            );
        } else {
            // Filtrado normal para otras categorías
            filteredCharacters = allCharacters.filter(character => character.game.includes(gameName));
        }

        const bgAlt = obtenerBgAlt(cat);
        
        const goBackImage = `
            <img src='/images/others/badge.png' alt="back" class="opcion img-thumbnail" style="width: 70px; height: 70px; cursor: pointer;" />
        `;

        // Generar HTML para las imágenes filtradas
        const imagesHTML = filteredCharacters.map(character => {
            // Comprobar si el alt del fondo coincide con el nombre del personaje
            if (bgAlt && bgAlt === character.name) {
                return `
                    <img src='/images/characters/${character.name} Mini.png' alt="${character.name}" class="${character.className} opcion img-thumbnail" style="width: 70px; height: 70px; cursor: pointer; display: none" />
                    <img src='/images/others/cancel.png' alt="cancel" class="${character.name} opcion img-thumbnail" style="width: 70px; height: 70px; cursor: pointer;" />
                `;
            } else {
                return `
                    <img src='/images/characters/${character.name} Mini.png' alt="${character.name}" class="${character.className} opcion img-thumbnail" style="width: 70px; height: 70px; cursor: pointer;" />
                    <img src='/images/others/cancel.png' alt="cancel" class="${character.name} opcion img-thumbnail" style="width: 70px; height: 70px; cursor: pointer; display: none" />
                `;
            }
        }).join('');

        const completeHTML = goBackImage + imagesHTML;
        
        // Reemplaza el contenido de la subventana actual con imagesHTML
        const catKey = $(el).closest('.card').attr('id').replace('subventana', '');
        $(`#subventana${catKey} .card-body`).html(completeHTML);
    }


    function seleccionarPersonaje(ele) {
        const catKey = $(ele).closest('.card').attr('id').replace('subventana', '');
        const imgUrl = $(ele).attr('src').replace("Mini", "Art");

        // Verificar si se ha hecho clic en la imagen "back"
        if ($(ele).attr('alt') === 'back') {
            // Mostrar las imágenes de los juegos y ocultar las imágenes de los personajes
            const gamesHTML = titleGames.map(name => `
                <img src='/images/specials/${name}.png' alt="${name}" class="opcion img-thumbnail" style="width: 70px; height: 70px; cursor: pointer;" />
            `).join('');
            
            $(`#subventana${catKey} .card-body`).html(gamesHTML);
            toggleCharacters();
            return; // Salir de la función para no ejecutar el resto del código
        }

        if (selectedCharacters[catKey]) {
            const previousCharacter = selectedCharacters[catKey].character;
            // Ocultar la imagen de cancelar del personaje anterior
            $(`#subventana${catKey} .opcion[alt="cancel"]`).hide();
            // Mostrar la imagen mini del personaje anterior
            $(`#subventana${catKey} .opcion[alt="${previousCharacter}"]`).show();
        }

        $(ele).hide(); // Ocultar la imagen mini
        const cancelImg = $(ele).next('.opcion'); // Obtener la imagen de cancelar
        cancelImg.show(); // Mostrar la imagen de cancelar

        $(`#cuadrado${catKey}`).css({
            "background-image": `url('${imgUrl}')`,
            "background-size": "cover",
            "background-position": "top center",
            "background-repeat": "no-repeat"
        });
        
        const nombre = $(ele).attr('alt').replace(" Mini", "").replace(" Art", "");
        $(`#nombrePersonaje${catKey}`).text(nombre);
        $(`#subventana${catKey}`).hide();


        // Guardar la selección en selectedCharacters
        selectedCharacters[catKey] = {
            character: nombre,
            window: `subventana${catKey}`
        };
    }


    // Delegación de eventos para los clicks en las imágenes de cancelar
    $('#ventanasContainer').on('click', '.opcion[alt="cancel"]', function() {
        const catKey = $(this).closest('.card').attr('id').replace('subventana', '');

        $(this).hide(); // Ocultar la imagen de cancelar
        const miniImg = $(this).prev('.opcion'); // Obtener la imagen mini que está inmediatamente antes
        miniImg.show(); // Mostrar la imagen mini

        // Limpiar el fondo del cuadrado
        $(`#cuadrado${catKey}`).css({
            "background-image": 'none'
        });
        
        // Limpiar el nombre del personaje
        $(`#nombrePersonaje${catKey}`).text('-');

        // Limpiar la selección en selectedCharacters
        delete selectedCharacters[catKey];
    });


    generarVentanas();
    
});
