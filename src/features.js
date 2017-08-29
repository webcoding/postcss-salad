export default {
  /**
   * REMINDER:
   * ******************
   * order is important
   * ******************
   */

  // https://npmjs.com/package/saladcss-bem
  bem: (options) => require("postcss-plugin-bem")(options),

  // https://npmjs.com/package/postcss-plugin-color-functions（webcoding）
  sassColor: (options) => require("postcss-plugin-color-functions")(options),

  // https://npmjs.com/package/saladcss-partial-import
  partialImport: (options) => require("saladcss-partial-import")(options),

  // https://npmjs.com/package/precss
  precss: (options) => require("precss")(options),
    // 包含
    // postcss-partial-import
    // postcss-mixins
    // postcss-advanced-variables
    // postcss-custom-media
    // postcss-custom-properties
    // postcss-media-minmax
    // postcss-color-function
    // postcss-nesting
    // postcss-nested
    // postcss-custom-selectors
    // postcss-atroot
    // postcss-property-lookup
    // postcss-extend
    // postcss-selector-matches
    // postcss-selector-not

  // https://npmjs.com/package/postcss-css-reset
  reset: (options) => require("postcss-css-reset")(options),

  // https://npmjs.com/package/postcss-utils
  utils: (options) => require("postcss-utils")(options),

  // https://npmjs.com/package/postcss-calc
  calc: (options) => require("postcss-calc")(options),

  // https://npmjs.com/package/postcss-initial
  initial: (options) => require("postcss-initial")(options),

  // https://npmjs.com/package/postcss-inline-svg
  inlineSvg: (options) => require("postcss-inline-svg")(options),

  // https://npmjs.com/package/postcss-short
  short: (options) => require("postcss-short")(options),

  // https://npmjs.com/package/postcss-shape
  shape: (options) => require("postcss-shape")(options),

  // https://npmjs.com/package/pixrem
  // rem: (options) => require("pixrem")(options),

  // // https://npmjs.com/package/autoprefixer
  // autoprefixer: (options) => require("autoprefixer")(options),

  // https://npmjs.com/package/postcss-neat
  neat: (options) => require("postcss-neat")(options)
}
