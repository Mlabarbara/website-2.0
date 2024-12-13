/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{html,js,css}",
];

export const darkMode = 'class';

export const theme = {
    extend: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        },
        colors: {
            'nav': {
                light: '#1e40af', // Base color for light mode gradient
                dark: '#141a22',  // rgb(20, 26, 34)
            },
            'card': {
                light: '#ffffff',
                dark: '#141a22',  // rgb(20, 26, 34)
            },
            'profile': {
                light: {
                    start: '#2563eb',
                    middle: '#1e40af',
                    end: '#2563eb'
                },
                dark: {
                    first: 'rgba(34, 25, 162, 0.64)',
                    second: 'rgba(34, 81, 184, 0.4)',
                    third: 'rgba(34, 81, 184, 0.77)',
                    fourth: 'rgba(34, 81, 184, 0.4)',
                    fifth: 'rgba(34, 25, 162, 0.64)'
                }
            }
        },
        backgroundImage: {
            'nav-gradient': 'linear-gradient(135deg, var(--nav-start), var(--nav-middle), var(--nav-end))',
            'profile-gradient-light': 'linear-gradient(135deg, var(--profile-start), var(--profile-middle), var(--profile-end))',
            'profile-gradient-dark': 'linear-gradient(30deg, var(--profile-d1), var(--profile-d2), var(--profile-d3), var(--profile-d4), var(--profile-d5))'
        }
    },
};

export const plugins = [
    function({ addComponents, theme }) {
        addComponents({
            '.nav-header': {
                '--nav-start': theme('colors.nav.light'),
                '--nav-middle': theme('colors.nav.light'),
                '--nav-end': theme('colors.nav.light'),
                '@apply bg-nav-gradient': {},
                '.dark &': {
                    '@apply bg-nav-dark': {}
                }
            },
            '.profile-section': {
                '--profile-start': theme('colors.profile.light.start'),
                '--profile-middle': theme('colors.profile.light.middle'),
                '--profile-end': theme('colors.profile.light.end'),
                '@apply bg-profile-gradient-light rounded-xl shadow-md': {},
                '.dark &': {
                    '--profile-d1': theme('colors.profile.dark.first'),
                    '--profile-d2': theme('colors.profile.dark.second'),
                    '--profile-d3': theme('colors.profile.dark.third'),
                    '--profile-d4': theme('colors.profile.dark.fourth'),
                    '--profile-d5': theme('colors.profile.dark.fifth'),
                    '@apply bg-profile-gradient-dark': {}
                }
            },
            '.content-card': {
                '@apply bg-card-light rounded-xl shadow-md transition-all duration-300': {},
                '.dark &': {
                    '@apply bg-card-dark': {}
                },
                '&:hover': {
                    '@apply transform -translate-y-2 shadow-xl': {}
                }
            }
        });
    }
];
  