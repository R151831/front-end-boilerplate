// eslint-disable-next-line @typescript-eslint/no-var-requires
const workboxBuild = require('workbox-build')

const buildSW = () =>
  // The build is expected to fail if the
  // sw install rules couldn't be generated.
  // Add a catch block to handle this scenario.
  workboxBuild
    .injectManifest({
      swSrc: 'public/OneSignalSDKWorker.js', // custom sw rule

      swDest: 'build/OneSignalSDKWorker.js', // sw output file (auto-generated)

      globDirectory: 'build',

      globPatterns: [],

      maximumFileSizeToCacheInBytes: 5 * 1024 * 102
    })
    .then(({ count, size, warnings }) => {
      warnings.forEach(console.warn)
      console.info(`${count} files will be precached,
                  totaling ${size / (1024 * 1024)} MBs.`)
    })
    .catch(e => console.log('Workbox Error', e))

buildSW()
