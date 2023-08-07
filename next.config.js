/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/center',
        destination: 'https://sca.rutgers.edu/student-centers/esports-center',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
