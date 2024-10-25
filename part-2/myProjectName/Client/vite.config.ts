
/**
 * Name: vite.config.ts
 * Description: Vite configuration file
 */

import { UserConfig, defineConfig } from "vite";

// Pattern for image files
const imagePattern = /\.(png|jpe?g|gif|svg|webp|avif)$/;

// Export Vite configuration
export default defineConfig(async () => {
  // Ensure the certificate and key exist
  // Define Vite configuration
  const config: UserConfig = {
    clearScreen: true,
    appType: "mpa",
    root: "Client",
    publicDir: "public",
    build: {
      emptyOutDir: true,
      outDir: "../../wwwroot/components",
      assetsDir: "",
      rollupOptions: {
        input: ["src/main.ts"],
        // remove hashing, but I could add it back in
        output: {
          // Save entry files to the appropriate folder
          entryFileNames: "js/[name].js",
          // Save chunk files to the js folder
          chunkFileNames: "js/[name]-chunk.js",
          // Save asset files to the appropriate folder
          assetFileNames: (info) => {
            if (info.name) {
              // If the file is an image file, save it to the images folder
              if (imagePattern.test(info.name)) {
                return "images/[name][extname]";
              }

              // If the file is any other type of file, save it to the assets folder
              return "assets/[name][extname]";
            } else {
              // If the file name is not specified, save it to the output directory
              return "[name][extname]";
            }
          },
        },
      },
    },
  };

  return config;
});
