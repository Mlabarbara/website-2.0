import { navigationConfig } from '../js/config/navigationConfig.js';

class Navigation extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <nav class="nav-header">
                <div class="max-w-6xl mx-auto px-4">
                    <div class="flex justify-between h-16">
                        <!-- Brand -->
                        <div class="flex items-center">
                            <a href="${navigationConfig.brand.href}" class="nav-link text-white font-bold text-xl">
                                ${navigationConfig.brand.text}
                            </a>
                        </div>

                        <!-- Desktop Navigation -->
                        <div class="hidden md:flex items-center space-x-8">
                            ${navigationConfig.items.map(item => `
                                <a href="${item.href}" class="nav-link">
                                    ${item.text}
                                </a>
                            `).join('')}
                            <button id="theme-toggle" class="p-2 text-white hover:bg-blue-800 dark:hover:bg-gray-700 rounded-lg">
                                <svg class="w-6 h-6 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
                                    </path>
                                </svg>
                                <svg class="w-6 h-6 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z">
                                    </path>
                                </svg>
                            </button>
                        </div>

                        <!-- Mobile Menu Button -->
                        <div class="md:hidden flex items-center space-x-4">
                            <button id="theme-toggle-mobile" class="p-2 text-white hover:bg-blue-800 dark:hover:bg-gray-700 rounded-lg">
                                <svg class="w-6 h-6 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
                                    </path>
                                </svg>
                                <svg class="w-6 h-6 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z">
                                    </path>
                                </svg>
                            </button>
                            <button id="mobile-menu-button" class="text-white">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Mobile Menu -->
                    <div id="mobile-menu" class="hidden md:hidden pb-4">
                        ${navigationConfig.items.map(item => `
                            <a href="${item.href}" class="block px-4 py-2 text-white hover:bg-blue-800 dark:hover:bg-gray-700">
                                ${item.text}
                            </a>
                        `).join('')}
                    </div>
                </div>
            </nav>
        `;
    }

    setupEventListeners() {
        const mobileMenuButton = this.shadowRoot.getElementById('mobile-menu-button');
        const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
        const themeToggle = this.shadowRoot.getElementById('theme-toggle');
        const themeToggleMobile = this.shadowRoot.getElementById('theme-toggle-mobile');

        mobileMenuButton?.addEventListener('click', () => {
            mobileMenu?.classList.toggle('hidden');
        });

        const handleThemeToggle = () => {
            const html = document.documentElement;
            html.classList.toggle('dark');
            localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
        };

        themeToggle?.addEventListener('click', handleThemeToggle);
        themeToggleMobile?.addEventListener('click', handleThemeToggle);
    }
}

customElements.define('site-navigation', Navigation);