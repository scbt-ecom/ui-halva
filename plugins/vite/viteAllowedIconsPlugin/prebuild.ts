import { join } from 'path'
import { generateFileAssets, generateFileMap } from './utils'
import { type AllowedIconsPluginOptions, OUTPUT_DIR, STATIC_DIR } from './viteAllowedIconsPlugin'

function generatePrebuildAssets(options?: AllowedIconsPluginOptions) {
  const { inputPath = STATIC_DIR, outputPath = OUTPUT_DIR } = options ?? {}

  const staticDir = join(process.cwd(), inputPath)
  const outputDir = join(process.cwd(), outputPath)

  generateFileAssets(staticDir, outputDir)
  generateFileMap(staticDir, outputDir)
}

generatePrebuildAssets()
