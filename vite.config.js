import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
	// Other Vite configuration options...
	plugins: [vue()],
	resolve: {
		alias: {
			// Add your aliases here
			"@": "/src", // Example alias for the 'src' directory
			components: "/src/components", // Alias for the 'components' directory
			views: "/src/views", // Alias for the 'views' directory
		},
	},
});
