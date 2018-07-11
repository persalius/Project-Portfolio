const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const devserver = require("./webpack/devserver");
const pug = require("./webpack/pug");
const sass = require("./webpack/sass");
const css = require("./webpack/css");
const extractCSS = require("./webpack/css.extract");
const uglifyJS = require("./webpack/js.uglify");
const images = require("./webpack/images");
const babel = require('./webpack/babel');

const PATHS = {
    source: path.join(__dirname, "src"),
    build: path.join(__dirname, "dist")
};

const common = merge([
    {
    entry: {
        "index": PATHS.source + "/pages/index/index.js",
        "about": PATHS.source + "/pages/about/about.js",
        "works": PATHS.source + "/pages/works/works.js"
    },
    output: {
        path: PATHS.build,
        filename: "js/[name].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            chunks: ["index", "common"],
            template: PATHS.source + "/pages/index/index.pug"
        }),
        new HtmlWebpackPlugin({
            filename: "about.html",
            chunks: ["about", "common"],
            template: PATHS.source + "/pages/about/about.pug"
        }),
        new HtmlWebpackPlugin({
            filename: "works.html",
            chunks: ["works", "common"],
            template: PATHS.source + "/pages/works/works.pug"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common"
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
    },
	pug(),
    images(),
    babel()
]);

module.exports = function(env) {
    if (env === "production") {
        return merge([common, extractCSS(), uglifyJS()]);
    }
    if (env === "development") {
        return merge([common, devserver(), sass(), css()]);
    }
};