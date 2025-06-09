import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const livros = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/livros" }),
    schema: z.object({
        titulo: z.string(),
        autor: z.string(),
        id: z.number(),
        idioma: z.string(),
        ano: z.string(),
        anoDeLeitura: z.number(),
        mesDeLeitura: z.enum([
            "janeiro", "fevereiro", "março", "abril", "maio", "junho",
            "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
          ]),
        slug: z.string(),
        imagemURL: z.string(),
    }),    
})

export const collections = {
    livros,
}