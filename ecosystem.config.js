module.exports = {
  apps: [
    {
      name: "ti-api",
      script: "npm",
      args: 'start --prefix packages/api',
      watch: true,
      env: {
        PORT: 8081,
        NODE_ENV: "production"
      },
    },

    {
      name: "ti-site",
      script: "npm",
      args: 'start --prefix packages/site',
      watch: true,
      env: {
        PORT: 8082,
        NODE_ENV: "production"
      },
    }
  ]
};
