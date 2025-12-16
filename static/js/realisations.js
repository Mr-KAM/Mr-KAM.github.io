/**
 * Données des réalisations - Portfolio A.C. KAMBOU
 * Ce fichier contient toutes les réalisations à afficher dynamiquement
 */

const realisationsData = [
    // ==================== CARTES ====================
    {
        id: 1,
        titre: "Carte topographique de la région de la Nawa",
        description: "Carte topographique détaillée de la région de la Nawa avec relief, hydrographie et infrastructures.",
        image: "static/img crea/cartes/Carte topographique de la région de la nawa 2.png",
        categorie: "cartographie",
        tags: ["QGIS", "Topographie", "Région Nawa"],
        annee: 2023
    },
    {
        id: 2,
        titre: "Carte d'occupation du sol - Abidjan",
        description: "Analyse de l'occupation du sol de la ville d'Abidjan par télédétection et classification supervisée.",
        image: "static/img crea/cartes/Carte d'occupation du sol Abidjan.png",
        categorie: "cartographie",
        tags: ["Télédétection", "Occupation du sol", "Abidjan"],
        annee: 2023
    },
    {
        id: 3,
        titre: "Carte de situation de la Côte d'Ivoire",
        description: "Carte de localisation géographique de la Côte d'Ivoire en Afrique de l'Ouest.",
        image: "static/img crea/cartes/Carte 1- Situation de la Cote d'Ivoire V2.png",
        categorie: "cartographie",
        tags: ["Localisation", "Côte d'Ivoire", "Afrique"],
        annee: 2022
    },
    {
        id: 4,
        titre: "Carte de la pluviométrie",
        description: "Représentation spatiale de la distribution des précipitations annuelles.",
        image: "static/img crea/cartes/Carte de la pluviometrie_V2.png",
        categorie: "cartographie",
        tags: ["Climat", "Pluviométrie", "Isohyètes"],
        annee: 2023
    },
    {
        id: 5,
        titre: "Carte de la ville de Man",
        description: "Cartographie urbaine détaillée de la ville de Man avec ses quartiers et infrastructures.",
        image: "static/img crea/cartes/Carte de la ville de Man V12.png",
        categorie: "cartographie",
        tags: ["Urbanisme", "Man", "Infrastructure"],
        annee: 2023
    },
    {
        id: 6,
        titre: "Prettymaps Yamoussoukro",
        description: "Visualisation artistique de la ville de Yamoussoukro avec le style Prettymaps.",
        image: "static/img crea/cartes/3-objectif carto-prettymaps-yakro.png",
        categorie: "cartographie",
        tags: ["Prettymaps", "Art cartographique", "Yamoussoukro"],
        annee: 2023
    },
    {
        id: 7,
        titre: "Carte des incendies dans le monde",
        description: "Visualisation mondiale des points chauds et incendies détectés par satellite.",
        image: "static/img crea/cartes/Carte des incendies dans le monde.png",
        categorie: "cartographie",
        tags: ["Google Earth Engine", "Incendies", "Global"],
        annee: 2023
    },
    {
        id: 8,
        titre: "Carte de la population mondiale 2021",
        description: "Représentation de la densité de population mondiale par pays en 2021.",
        image: "static/img crea/cartes/carte de la population mondiale en 2021.png",
        categorie: "cartographie",
        tags: ["Population", "Démographie", "Mondial"],
        annee: 2021
    },
    {
        id: 9,
        titre: "Carte Hexagonale",
        description: "Carte utilisant une grille hexagonale pour l'agrégation et la visualisation de données spatiales.",
        image: "static/img crea/cartes/Carte Hexagon 1.png",
        categorie: "cartographie",
        tags: ["Hexbin", "Visualisation", "Analyse spatiale"],
        annee: 2023
    },
    {
        id: 10,
        titre: "Population par village - Côte d'Ivoire",
        description: "Carte de points représentant la population par village sur l'ensemble du territoire ivoirien.",
        image: "static/img crea/cartes/1-Point-Carte de la population par village de cote d'ivoire.png",
        categorie: "cartographie",
        tags: ["Population", "Villages", "Côte d'Ivoire"],
        annee: 2022
    },
    {
        id: 11,
        titre: "Carte topographique de Man-Biankouman",
        description: "Carte topographique de la région montagneuse de Man et Biankouman.",
        image: "static/img crea/cartes/carte topographique de la région de man 2_biankouman.png",
        categorie: "cartographie",
        tags: ["Topographie", "Man", "Montagnes"],
        annee: 2023
    },
    {
        id: 12,
        titre: "Carte topographique du Parc de Taï",
        description: "Cartographie topographique du Parc National de Taï, patrimoine mondial de l'UNESCO.",
        image: "static/img crea/cartes/Carte Topo Taï 1.png",
        categorie: "cartographie",
        tags: ["Parc National", "Taï", "Conservation"],
        annee: 2022
    },
    {
        id: 13,
        titre: "Occupation du sol - Parc de Taï",
        description: "Analyse de l'occupation du sol autour du Parc National de Taï.",
        image: "static/img crea/cartes/Occupation su sol Taï DEsign v3.png",
        categorie: "cartographie",
        tags: ["Occupation du sol", "Taï", "Forêt"],
        annee: 2022
    },
    {
        id: 14,
        titre: "Réseau routier de Koumassi",
        description: "Cartographie du réseau routier de la commune de Koumassi à Abidjan.",
        image: "static/img crea/cartes/Carte du reseau routier de koumassi 2.png",
        categorie: "cartographie",
        tags: ["Transport", "Koumassi", "Réseau routier"],
        annee: 2023
    },
    {
        id: 15,
        titre: "Carte historique de la CI en 1932",
        description: "Reconstitution cartographique de la Côte d'Ivoire coloniale en 1932.",
        image: "static/img crea/cartes/Carte de la CI en 1932 V4.png",
        categorie: "cartographie",
        tags: ["Histoire", "Colonisation", "1932"],
        annee: 2022
    },
    {
        id: 16,
        titre: "Occupation du sol - Site INP-HB",
        description: "Cartographie de l'occupation du sol du campus de l'INP-HB à Yamoussoukro.",
        image: "static/img crea/cartes/Occupation du sol du site de l'INP-HB v2.pdf",
        categorie: "cartographie",
        tags: ["INP-HB", "Campus", "Yamoussoukro"],
        annee: 2023,
        isPdf: true
    },

    // ==================== TABLEAUX DE BORD ====================
    {
        id: 17,
        titre: "Dashboard KPI - Projet PPCA",
        description: "Tableau de bord de suivi des indicateurs clés de performance pour le projet PPCA (Anacarde).",
        image: "static/img crea/tableau de bord/placeholder-dashboard.png",
        categorie: "dashboard",
        tags: ["Power BI", "KPI", "PPCA"],
        annee: 2022,
        placeholder: true
    },
    {
        id: 18,
        titre: "Dashboard Suivi de collecte",
        description: "Tableau de bord dynamique pour le suivi en temps réel des opérations de collecte de données terrain.",
        image: "static/img crea/tableau de bord/placeholder-dashboard.png",
        categorie: "dashboard",
        tags: ["Excel", "Suivi", "Collecte"],
        annee: 2023,
        placeholder: true
    },
    {
        id: 19,
        titre: "Dashboard Assises Jeunesse CEDEAO",
        description: "Tableau de bord de supervision de la mission des assises de la jeunesse CEDEAO en Côte d'Ivoire.",
        image: "static/img crea/tableau de bord/placeholder-dashboard.png",
        categorie: "dashboard",
        tags: ["Power BI", "CEDEAO", "Jeunesse"],
        annee: 2024,
        placeholder: true
    },

    // ==================== APPLICATIONS ====================
    {
        id: 20,
        titre: "Application de gestion des coopératives",
        description: "Application de gestion dynamique pour le suivi des KPIs des coopératives d'anacarde.",
        image: "static/img crea/applications/placeholder-app.png",
        categorie: "application",
        tags: ["Python", "Django", "Coopératives"],
        annee: 2022,
        placeholder: true
    },
    {
        id: 21,
        titre: "Carte interactive des exploitations",
        description: "Application web cartographique interactive pour visualiser les exploitations agricoles.",
        image: "static/img crea/applications/placeholder-app.png",
        categorie: "application",
        tags: ["JavaScript", "Leaflet", "Web"],
        annee: 2021,
        placeholder: true
    },

    // ==================== PACKAGES PYTHON ====================
    {
        id: 22,
        titre: "<a href='https://mr-kam.github.io/cartograpy/'>Cartograpy</a>",
        description: "Package Python pour la création de cartes thématiques et la visualisation de données géospatiales de manière simplifiée.",
        image: "static/img crea/packages et framework/cartograpy.jpg",
        categorie: "package-python",
        tags: ["Python", "Cartographie", "Visualisation"],
        annee: 2023
    },
    {
        id: 23,
        titre: "<a href='https://mr-kam.github.io/pysheetson/'> PySheetson</a>",
        description: "Package Python pour interagir avec l'API Sheetson et manipuler des données Google Sheets comme base de données.",
        image: "static/img crea/packages et framework/pysheetson.png",
        categorie: "package-python",
        tags: ["Python", "API", "Google Sheets"],
        annee: 2023
    },
    {
        id: 24,
        titre: "SolidView",
        description: "Package Python pour la visualisation 3D de modèles solides et la génération de rendus pour l'impression 3D et la CAO.",
        image: "static/img crea/packages et framework/solidview.png",
        categorie: "package-python",
        tags: ["Python", "3D", "Visualisation"],
        annee: 2023
    }
];

// Catégories disponibles pour le filtrage
const categories = [
    { id: "all", label: "Tous", shortLabel: "Tous", icon: "fas fa-th-large" },
    { id: "cartographie", label: "Cartographie", shortLabel: "Cartes", icon: "fas fa-map" },
    { id: "dashboard", label: "Tableaux de bord", shortLabel: "Dashboards", icon: "fas fa-chart-bar" },
    { id: "application", label: "Applications", shortLabel: "Apps", icon: "fas fa-laptop-code" },
    { id: "package-python", label: "Packages Python", shortLabel: "Python", icon: "fab fa-python" }
];

/**
 * Génère le HTML pour une carte de réalisation
 * @param {Object} realisation - Objet contenant les données de la réalisation
 * @returns {string} HTML de la carte
 */
function createRealisationCard(realisation) {
    const tagsHtml = realisation.tags.map(tag => 
        `<span class="bg-gray-700 text-xs py-1 px-2 rounded">${tag}</span>`
    ).join('');

    const imageUrl = realisation.placeholder 
        ? `https://via.placeholder.com/600x400/1f2937/f59e0b?text=${encodeURIComponent(realisation.titre.substring(0, 20))}`
        : realisation.image;

    const pdfBadge = realisation.isPdf 
        ? '<span class="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded"><i class="fas fa-file-pdf mr-1"></i>PDF</span>' 
        : '';

    // Échapper les caractères spéciaux pour les attributs HTML
    const escapedTitle = realisation.titre.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    const escapedImageUrl = imageUrl.replace(/"/g, '&quot;').replace(/'/g, '&#39;');

    return `
        <div class="project-card bg-gray-800 rounded-xl overflow-hidden" data-category="${realisation.categorie}" data-id="${realisation.id}">
            <div class="relative overflow-hidden group cursor-pointer image-zoom-trigger" 
                 data-image="${escapedImageUrl}" 
                 data-title="${escapedTitle}">
                <img src="${imageUrl}" alt="${escapedTitle}" 
                     loading="lazy"
                     class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                     onerror="this.src='https://via.placeholder.com/600x400/1f2937/f59e0b?text=Image+non+disponible'">
                ${pdfBadge}
                <!-- Bouton zoom en bas à droite -->
                <button aria-label="Agrandir l'image" class="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-600 text-gray-900 flex items-center justify-center shadow-lg transition-all transform hover:scale-110 opacity-0 group-hover:opacity-100">
                    <i class="fas fa-expand text-sm"></i>
                </button>
                <!-- Overlay subtil au hover -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
            <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-bold">${realisation.titre}</h3>
                    <span class="text-amber-500 text-sm">${realisation.annee}</span>
                </div>
                <p class="text-gray-400 mb-4 text-sm">${realisation.description}</p>
                <div class="flex flex-wrap gap-2">
                    ${tagsHtml}
                </div>
            </div>
        </div>
    `;
}

/**
 * Génère les boutons de filtre
 * @returns {string} HTML des boutons
 */
function createFilterButtons() {
    return categories.map(cat => `
        <button class="filter-btn px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-full transition-all whitespace-nowrap ${cat.id === 'all' ? 'bg-amber-500 text-gray-900' : 'bg-gray-700 hover:bg-gray-600'}" 
                data-filter="${cat.id}">
            <i class="${cat.icon} mr-1 sm:mr-2"></i>${cat.shortLabel}
        </button>
    `).join('');
}

/**
 * Initialise la section réalisations
 */
function initRealisations() {
    const container = document.getElementById('realisations-container');
    const filterContainer = document.getElementById('realisations-filters');
    
    if (!container) {
        console.error('Container #realisations-container non trouvé');
        return;
    }

    // Générer les boutons de filtre
    if (filterContainer) {
        filterContainer.innerHTML = createFilterButtons();
    }

    // Afficher toutes les réalisations (sauf placeholders au début)
    renderRealisations('all');

    // Ajouter les événements de filtre
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Mise à jour visuelle des boutons
            document.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.remove('bg-amber-500', 'text-gray-900');
                b.classList.add('bg-gray-700');
            });
            this.classList.remove('bg-gray-700');
            this.classList.add('bg-amber-500', 'text-gray-900');

            // Filtrer les réalisations
            const filter = this.getAttribute('data-filter');
            renderRealisations(filter);
        });
    });
}

/**
 * Affiche les réalisations selon le filtre
 * @param {string} filter - Catégorie à afficher ('all' pour tout)
 */
function renderRealisations(filter = 'all') {
    const container = document.getElementById('realisations-container');
    if (!container) return;

    // Filtrer les données (exclure les placeholders sauf si explicitement demandé)
    let filteredData = realisationsData.filter(r => !r.placeholder);
    
    if (filter !== 'all') {
        filteredData = filteredData.filter(r => r.categorie === filter);
    }

    // Trier par année décroissante
    filteredData.sort((a, b) => b.annee - a.annee);

    // Générer le HTML
    container.innerHTML = filteredData.map(r => createRealisationCard(r)).join('');

    // Animation d'apparition
    container.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

/**
 * Compte les réalisations par catégorie
 * @returns {Object} Nombre de réalisations par catégorie
 */
function getRealisationsCount() {
    const counts = { all: 0 };
    categories.forEach(cat => {
        if (cat.id !== 'all') {
            counts[cat.id] = realisationsData.filter(r => r.categorie === cat.id && !r.placeholder).length;
            counts.all += counts[cat.id];
        }
    });
    return counts;
}

// Initialiser quand le DOM est prêt
document.addEventListener('DOMContentLoaded', initRealisations);

// Exporter pour usage externe
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { realisationsData, categories, initRealisations, renderRealisations };
}
