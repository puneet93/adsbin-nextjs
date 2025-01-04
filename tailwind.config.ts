import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
			black: '#415B41',
			'green-text': '#17412D',
			green: '#4DBB18',
			approved: '#64A446',
			approvedBg: '#E4FCDC',
			unpaid: '#FF6E6E',
			unpaidBg: '#FCDCDC',
			running: '#C9C9C9',
			runningBg: '#F0F0F0',
			body: '#606060',
			'gray-light': '#ECECEC',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		boxShadow:{
			container: "0px 0px 44px 0px rgba(0,0,0,0.1)"
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
