module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './src',

          '@ui': './src/shared/ui',
          '@components': './src/shared/components',
          '@utils': './src/shared/utils',
          '@hooks': './src/shared/hooks',
          '@constants': './src/shared/constants',

          '@core': './src/core',
          '@modules': './src/modules',
          '@role': './src/role',
          '@config': './src/config',
          '@assets': './src/assets',
        },
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      },
    ],
    'react-native-reanimated/plugin',
    ['module:react-native-dotenv', { moduleName: '@env', path: '.env' }],
  ],
};
