import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    {
                        key: "Content-Security-Policy",
                        value: "default-src 'self'; script-src 'self' 'nonce-googleAnalytics' 'unsafe-inline'",
                    },
                ],
            },
        ]
    },
}

export default nextConfig
