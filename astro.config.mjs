// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://namsu-lee.github.io/",
  integrations: [
    starlight({
      title: "이남수의 블로그",
      description: "이남수의 블로그",
      tableOfContents: { maxHeadingLevel: 5 },
      sidebar: [
        {
          label: "옵시디언",
          autogenerate: { directory: "옵시디언" },
        },
      ],
    }),
  ],
});
