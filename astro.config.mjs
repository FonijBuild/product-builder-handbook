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
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/FonijBuild/product-builder-handbook",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          items: [{ autogenerate: { directory: "reference" } }],
        },
      ],
    }),
  ],
});
