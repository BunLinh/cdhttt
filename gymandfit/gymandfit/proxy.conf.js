const PROXY_CONFIG = [{
    context: [
        "/xch",
    ],
    target: "http://localhost:8080",
    secure: false,
    "changeOrigin": true,
    "logLevel": "debug",
    headers: { host: 'localhost:8080' },
    cookieDomainRewrite: {
        ".localhost:8080": "localhost:4200"
    }
}];

module.exports = PROXY_CONFIG;