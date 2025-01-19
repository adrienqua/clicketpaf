import { productsDatas } from "./datas/products.js"
import { articlesDatas } from "./datas/articles.js"

import fs from "fs"
import path from "path"

const getLastModifiedDate = (filePath) => {
    try {
        const stats = fs.statSync(filePath)
        return stats.mtime.toISOString()
    } catch (error) {
        console.error("Error retrieving file stats for", filePath, error)
        return null
    }
}

/** @type {import('next-sitemap').IConfig} */
const sitemap = {
    siteUrl: process.env.SITE_URL || "http://localhost:3000",
    generateRobotsTxt: true,
    sitemapSize: 7000,
    generateIndexSitemap: false,
    priority: 1,

    transform: async (config, pagePath) => {
        let changefreq = "monthly"
        let priority = 0.7

        console.log("PAAAAAAAAAAAAAAAAATH", pagePath)

        const splitPath = pagePath.split("/")
        const filePath = path.join(process.cwd(), "app", splitPath[0], splitPath[1], "page.tsx")

        const lastModified = getLastModifiedDate(filePath)

        console.log("LAST MODIFIED", lastModified)

        if (pagePath === "/") {
            changefreq = "daily"
            priority = 1
        }

        if (pagePath.startsWith("/blog") || pagePath.startsWith("/produits")) {
            changefreq = "daily"
            priority = 0.9
        }

        return {
            loc: pagePath,
            changefreq,
            priority,
            lastmod: lastModified,
        }
    },

    additionalPaths: async (config) => {
        const products = productsDatas.map((product) => ({
            loc: `/produits/${product.slug}`,
            changefreq: "daily",
            priority: 0.9,
            lastmod: new Date().toISOString(),
        }))
        const articles = articlesDatas.map((article) => ({
            loc: `/blog/${article.category}/${article.slug}`,
            changefreq: "daily",
            lastmod: new Date().toISOString(),
        }))

        return [...products, ...articles]
    },
}

export default sitemap
