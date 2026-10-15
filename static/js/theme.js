// Thème partagé : remappe les palettes Tailwind existantes vers noir + vert néon.
// ponytail: on remappe les couleurs au lieu de réécrire les classes dans chaque page.
(function () {
    const neon = { 50: '#f9ffe0', 100: '#f2ffc2', 200: '#e8ff8a', 300: '#dcff57', 400: '#d4ff3f', 500: '#c8f52e', 600: '#a6cc1f', 700: '#7a9a14', 800: '#56700d', 900: '#2f3d07' };
    const ink = { 50: '#fafafa', 100: '#f2f2f2', 200: '#e0e0e0', 300: '#c4c4c4', 400: '#9a9a9a', 500: '#6b6b6b', 600: '#333333', 700: '#1f1f1f', 800: '#111111', 900: '#0a0a0a' };
    tailwind.config = {
        theme: {
            extend: {
                fontFamily: { mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'] },
                colors: {
                    gray: ink, slate: ink,
                    amber: neon, orange: neon, yellow: neon,
                    pink: neon, rose: neon, purple: neon, violet: neon
                }
            }
        }
    };
})();
