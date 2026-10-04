// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://fonijbuild.github.io",
  base: "/product-builder-handbook",
  integrations: [
    starlight({
      title: "Product Builder Handbook",
      customCss: ["./src/styles/custom.css"],
      components: {
        // Header: "./src/components/overrides/Header.astro",
        Footer: "./src/components/overrides/Footer.astro",
        // Optional, if you used the Pagination override approach:
        // Pagination: "./src/components/overrides/Pagination.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/FonijBuild/product-builder-handbook",
        },
      ],
    }),
  ],
});
