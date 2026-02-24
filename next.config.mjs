/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/our-food-menu',
        destination: '/menus/food',
        permanent: true,
      },
      {
        source: '/our-drink-menu',
        destination: '/menus/drafts',
        permanent: true,
      },
      {
        source: '/our-cocktail-menu',
        destination: '/menus/cocktails',
        permanent: true,
      },
      {
        source: '/supper-club-menu',
        destination: '/menus/supper-club',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
