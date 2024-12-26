import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetAttributify(), presetUno(), presetIcons()],
  cli: {
    entry: [
      {
        patterns: ['src/**/*.html'],
        outFile: 'src/css/uno.css',
      },
    ],
  },
})
