module.exports = {
  apps: [
    {
      name: "bookticketapp",
      script: "dist/server.js",  // Ensure this file exists
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
