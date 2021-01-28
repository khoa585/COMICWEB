const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')
const webpack = require('webpack');
module.exports = withCSS(withSass({
    webpack: (config) => {
        config.plugins.push(
            new FilterWarningsPlugin({
                exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
            }),
        )
        return config
    }
}))