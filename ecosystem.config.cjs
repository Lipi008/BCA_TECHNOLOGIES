module.exports = {
  apps: [
    {
      name: "bca-techno-api",
      script: "server.cjs",
      env: {
        NODE_ENV: "production",
        PORT: 3007,
      },
      watch: false,
      restart_delay: 2000,
      max_restarts: 10,
    },
  ],
};
