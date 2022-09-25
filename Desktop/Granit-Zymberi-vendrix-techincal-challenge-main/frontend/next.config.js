/**
 * ! !!!!!!! ATTENTION !!!!!!!!
 *
 * TODO: Adjust the configuration below
 *
 * ! !!!!!!!!!!!!!!!!!!!!!!!!!!
 */

/**
 * @docs    https://nextjs.org/docs/api-reference/next.config.js/rewrites
 */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        
        destination: 'http://localhost:3000',

      },
    ];
  },
  async headers(){
    return [
      {
        source: '/api/:path*',
        headers: [
          // { key: "Access-Control-Allow-Credentials", value: "true" },
          // { key: "Access-Control-Allow-Origin", value: "http://localhost:3000" }
        ]
      }
    ]
  }
};
