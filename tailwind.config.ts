
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/routes/**/*.{js,ts,jsx,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				dataops: {
					50: '#F0F7FF',
					100: '#E0EFFE',
					200: '#BAE0FD',
					300: '#7AC4FB',
					400: '#47A8F5',
					500: '#1A8AEB',
					600: '#0D6AC7',
					700: '#0E55A1',
					800: '#0F4786',
					900: '#0F3C70',
					950: '#0F172A',
				},
				brand: {
					saffron: '#FBB03B',
					navy: '#14213D', 
					lightBlue: '#8CC7E3',
					gray: '#E6E6E6',
					black: '#000000'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				'roboto': ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
				'rubik': ['Rubik', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
				'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
				'sans': ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-out': 'fade-out 0.5s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
	// Enhanced purging for production builds
	...(process.env.NODE_ENV === 'production' && {
		purge: {
			enabled: true,
			content: [
				"./src/**/*.{js,ts,jsx,tsx}",
				"./index.html"
			],
			options: {
				safelist: [
					// Dynamic classes that might be missed
					/^(text|bg|border)-(dataops|brand)-/,
					/^hover:/,
					/^focus:/,
					/^active:/,
					/^md:/,
					/^lg:/,
					// Component-specific classes
					'hero-section',
					'hero-content',
					'hero-headline',
					'table-of-contents-container',
					'pillar-content',
					'blog-content-enhanced',
					// Animation classes
					'fade-in',
					'fade-out',
					'accordion-down',
					'accordion-up'
				],
			}
		}
	})
} satisfies Config;
