const PROXY_CONFIG = [
  {
    context: [
      "/warehouse",
    ],
    target: "https://localhost:7271",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
