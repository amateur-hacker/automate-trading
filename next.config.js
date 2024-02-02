// @type {import('next').NextConfig}
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
  env: {
    MYSQL_HOST: "localhost",
    MYSQL_PORT: "3306",
    MYSQL_DATABASE: "mysql",
    MYSQL_USER: "root",
    MYSQL_PASSWORD: "st",
  },
};

module.exports = nextConfig;
