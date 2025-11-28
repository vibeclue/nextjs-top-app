import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
      rules: {
        '*.svg': {
          loaders: [
            {
              loader: '@svgr/webpack',
              options: {
                typescript: true, // Поддержка TypeScript
                ext: 'tsx', // Генерация TSX-компонентов
              },
            },
          ],
          as: '*.js', // Вывод как JS/TSX (Turbopack преобразует в компонент)
        },
      },
    },

};

export default nextConfig;
