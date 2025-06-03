exports = {
  apps: [
    {
      name: "bookmysticket",
      script: "dist/server.js",       // compiled JS entry point
      instances: 1,                   // or 'max' for all CPU cores
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,                   // or any port your app uses
      },
    },
  ],
};
