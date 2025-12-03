import crypto from 'crypto';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
    // Optimize CSS loading for mobile - disabled due to critters dependency issues
    // optimizeCss: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' }
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    minimumCacheTTL: 60,
    // Optimize images for mobile
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compress: true,
  poweredByHeader: false,
  // Optimize fonts with font-display: swap
  optimizeFonts: true,
  // Enable SWC minification
  swcMinify: true,
  // Target modern browsers to remove legacy JavaScript polyfills
  // This removes polyfills for: Array.at, Array.flat, Array.flatMap, 
  // Object.fromEntries, Object.hasOwn, String.trimEnd (ES2021+ features)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  // Configure webpack to target modern browsers (removes legacy JS polyfills)
  // This targets browsers that support ES2022+ features natively
  webpack: (config, { isServer, dev }) => {
    if (!isServer && !dev) {
      // Target modern browsers - removes polyfills for ES2021+ features
      // Supports: Chrome 92+, Firefox 90+, Safari 15.4+, Edge 92+
      // Mobile: iOS 15.4+, Chrome Android 92+
      config.target = ['web', 'es2022'];
      
      // Ensure no polyfills are added for modern features
      config.resolve.fallback = {
        ...config.resolve.fallback,
        // Prevent polyfills for modern features
      };
      
      // Disable automatic polyfill injection
      if (config.resolve.alias) {
        config.resolve.alias = {
          ...config.resolve.alias,
        };
      }
      
      // Optimize code splitting to reduce unused chunks and improve mobile performance
      config.optimization = {
        ...config.optimization,
        // Minimize CSS for mobile
        minimize: true,
        // Use moduleIds for better caching
        moduleIds: 'deterministic',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Group vendor libraries - React core
            framework: {
              name: 'framework',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
              priority: 40,
              enforce: true,
            },
            // Split large libraries into separate chunks
            radix: {
              name: 'radix-ui',
              test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
              priority: 35,
              chunks: 'async', // Load on demand
              reuseExistingChunk: true,
            },
            tanstack: {
              name: 'tanstack',
              test: /[\\/]node_modules[\\/]@tanstack[\\/]/,
              priority: 34,
              chunks: 'async', // Load on demand
              reuseExistingChunk: true,
            },
            // Large libraries that might not be used on initial load
            largeLibs: {
              test(module) {
                return module.size() > 80000 && /node_modules[/\\]/.test(module.identifier()) &&
                  !/[\\/]node_modules[\\/](react|react-dom|@radix-ui|@tanstack)[\\/]/.test(module.identifier());
              },
              name(module) {
                const packageName = module.identifier().match(/node_modules[/\\]([^/\\]+)/)?.[1];
                return `lib-${packageName || 'unknown'}`;
              },
              priority: 30,
              chunks: 'async', // Load on demand to reduce initial bundle
              minChunks: 1,
              reuseExistingChunk: true,
            },
            // Smaller shared libraries
            lib: {
              test(module) {
                return module.size() > 20000 && module.size() <= 80000 && /node_modules[/\\]/.test(module.identifier()) &&
                  !/[\\/]node_modules[\\/](react|react-dom|@radix-ui|@tanstack)[\\/]/.test(module.identifier());
              },
              name(module) {
                const hash = crypto.createHash('sha1');
                hash.update(module.identifier());
                return `lib-${hash.digest('hex').substring(0, 8)}`;
              },
              priority: 25,
              chunks: 'async', // Load on demand
              minChunks: 1,
              reuseExistingChunk: true,
            },
            // Commons - only for code shared by 3+ chunks to reduce unused code
            commons: {
              name: 'commons',
              minChunks: 3, // Increased from 2 to reduce unused code
              priority: 20,
              chunks: 'async', // Load on demand instead of initial
            },
            shared: {
              name(module, chunks) {
                const hash = crypto.createHash('sha1');
                hash.update(chunks.reduce((acc, chunk) => acc + chunk.name, ''));
                return `shared-${hash.digest('hex').substring(0, 8)}`;
              },
              priority: 10,
              minChunks: 2,
              chunks: 'async', // Load on demand
              reuseExistingChunk: true,
            },
          },
          // Reduce max initial requests for mobile (better for slower connections)
          maxInitialRequests: 15, // Reduced from 20
          minSize: 20000,
          maxSize: 244000, // Split chunks larger than 244KB to reduce long tasks
        },
      };
    }
    return config;
  },
  // Headers for caching and performance optimization
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/lovable-uploads/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Optimize CSS loading for mobile
        source: '/_next/static/css/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'text/css; charset=utf-8',
          },
        ],
      },
    ];
  },
};

export default nextConfig;


