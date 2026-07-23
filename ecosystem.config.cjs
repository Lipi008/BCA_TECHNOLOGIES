module.exports = {
  apps: [
    {
      name: "bca-techno",
      script: "server.cjs",
      env: {
        NODE_ENV: "production",
        PORT: 3001,
      },
      watch: false,
      restart_delay: 2000,
      max_restarts: 10,
    },
  ],
};
