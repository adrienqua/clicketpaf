// Read the products data from the JSON file using fs
import { productsDatas } from "./datas/products.js"
import { articlesDatas } from "./datas/articles.js"
// Export the products data

/** @type {import('next-sitemap').IConfig} */
const sitemap = {
    siteUrl: process.env.SITE_URL || "http://localhost:3000",
    generateRobotsTxt: true,
    priority: 1,

    transform: async (config, path) => {
        let changefreq = "monthly"
        let priority = 0.7

        if (path === "/") {
            changefreq = "daily"
            priority = 1
        }

        if (path.startsWith("/blog") || path.startsWith("/produits")) {
            changefreq = "daily"
            priority = 0.9
        }

        return {
            loc: path,
            changefreq,
            priority,
        }
    },

    additionalPaths: async (config) => {
        const products = productsDatas.map((product) => ({
            loc: `/produits/${product.slug}`,
            changefreq: "daily",
            priority: 0.9,
        }))
        const articles = articlesDatas.map((article) => ({
            loc: `/blog/${article.category}/${article.slug}`,
            changefreq: "daily",
            priority: 0.9,
        }))

        return [...products, ...articles]
    },
}

export default sitemap
