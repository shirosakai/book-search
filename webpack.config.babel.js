/**
 * webpack v4 の設定ファイル
 *
 * webpack のドキュメントは https://webpack.js.org/concepts/ で読めますが、
 * 設定項目が多岐にわたり、説明を探すのが面倒なため、コメントに必要な情報を詳しく書きました。
 * 詳細については、各項目の URL のページを参照してください。
 */

import path from 'path';

/**
 * plugin 項目で使用するプラグインをインポート
 */
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

/**
 * postcss で使用するプラグインをインポート
 */
import cssnext from 'postcss-cssnext';
import stylelint from 'stylelint';


import VueLoaderPlugin from 'vue-loader/lib/plugin';

// Webstorm で警告を抑止する
// noinspection JSUnusedGlobalSymbols
export default {
    /**
     * ブラウザでのデバッグに必須のソースマップを出力するように設定します。
     *
     */
    devtool: 'source-map',

    /**
     * エントリーポイントを設定します。
     * https://webpack.js.org/concepts/#entry
     */
    entry: {
        BookSearch: './src/BookSearch/main.js',
    },

    /**
     * 出力ファイルの名前を設定します。
     * https://webpack.js.org/concepts/#output
     *
     * [name] は、上の `entry` 設定のキーに指定したアプリの名前で置換されます。(例: `sample1.bundle.js`、`timecard.bundle.js`)
     */
    output: {
        filename: '[name].bundle.js',
        chunkFilename: 'common.bundle.js',
        path: path.resolve(__dirname, 'docs'),
    },

    /**
     * webpack の追加の処理を行うプラグインを追加します。
     */
    plugins: [
        /**
         * clean-webpack-plugin は、`dist/` ディレクトリに残っている古いファイルを自動的に削除します
         *
         * johnagan/clean-webpack-plugin: A webpack plugin to remove your build folder(s) before building
         * - https://github.com/johnagan/clean-webpack-plugin
         */
        new CleanWebpackPlugin(['docs/*.*']),

        /**
         * copy-webpack-plugin は、webpack で変換を行わない静的なファイルなどを
         * `src/` から `dist/` に名前変更してコピーします。
         *
         * webpack-contrib/copy-webpack-plugin: Copy files and directories with webpack
         *  - https://github.com/webpack-contrib/copy-webpack-plugin
         */
        new CopyWebpackPlugin([
            {
                from: './src/**/*.html',
                to: '[name].html',
            },
            {
                from: './src/**/*.php',
                to: '[name].php',
            },
        ]),
        /**
         * vue-loader を使用するために必要なプラグイン。このプラグインを読み込まないと vue-loader が使用できない。
         *
         * Vue Loader | Getting Started
         * - https://vue-loader.vuejs.org/guide/#manual-configuration
         */
        new VueLoaderPlugin(),
    ],

    /**
     * webpack でファイルの種類別に変換を行う loader の設定を行います
     * https://webpack.js.org/concepts/#loaders
     */
    module: {
        /**
         * 変換対象とするファイル名と、そのファイルに適用する loader のマッチルールを書きます。
         */
        rules: [
            /**
             * Babel を使って、ES6+ で書かれた JavaScript を古いブラウザでも実行できる ES5 に変換します。
             * 変換の設定は `.babelrc.js` ファイルに書かれています。
             */
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },

            /**
             * Vuejs のコンポーネントファイル .vue を変換して Babel を適用するための設定。上と同様。
             */
            {
                test: /\.vue$/,
                use: ['vue-loader'],
                exclude: /node_modules/,
            },

            /**
             * TypeScript を変換して Babel を適用するための設定。上と同様。
             */
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader', 'tslint-loader'],
                exclude: /node_modules/,
            },

            /**
             * CSS を webpack で処理するための設定。
             *
             * postcss-loader は postcss の仕様で書かれた .css を通常の .css に変換する。
             * css-loader は css ファイルを JavaScript のモジュールに変換する。
             * style-loader はロードしたモジュールを html に後から挿入するコードを追加する。
             */
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader', options: { sourceMap: true } },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true, importLoaders: 1 },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            ident: 'postcss',
                            plugins: [cssnext()],
                        },
                    },
                ],
            },

            /**
             * SCSS を webpack で処理するための設定。
             *
             * sass-loader は .scss ファイルを .css 形式に変換する。
             * css-loader は .css ファイルを JavaScript のモジュールに変換する。
             * style-loader はロードしたモジュールを html に後から挿入するコードを追加する。
             */
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader', options: { sourceMap: true } },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true, importLoaders: 1 },
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true },
                    },
                ],
            },
        ],
    },

    /**
     * モジュールの import 時の名前解決の設定を行います。
     * https://webpack.js.org/configuration/resolve/
     */
    resolve: {
        /**
         * ここに拡張子が書かれたファイルは、import 文で拡張子を省略して記述できるようになります。
         * https://webpack.js.org/configuration/resolve/#resolve-extensions
         */
        extensions: ['.js', '.json', '.ts', '.vue'],

        alias: {
            /**
             * Vue.js のためのエイリアス
             *
             * import Vue from 'vue/dist/vue';
             * -> import Vue from 'vue';
             * と書けるようになる。
             */
            vue$: 'vue/dist/vue.min.js',
        },
    },

    /**
     * 複数のアプリから共通に使用されているパッケージ等のコードを common.bundle.js にまとめて出力するための設定。
     *
     * これにより、アプリごとのファイルサイズを削減することができます。
     * https://webpack.js.org/configuration/optimization/
     */
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'common',
        },
    },

    /**
     * ファイルサイズのチェックなどの設定。
     * Performance - https://webpack.js.org/configuration/performance/
     */
    performance: {
        maxEntrypointSize: 100000000,
        maxAssetSize: 100000000,
    },

    /**
     * webpack の出力などの設定
     */
    stats: {
        /**
         * warning の抑止。
         *
         * postcss で表示される warning を抑止。
         * 現在はエラーを検出できれば十分なので、改行やスペースなどの細かいエラーは無視しておく。
         * Stats - https://webpack.js.org/configuration/stats/
         */
        warningsFilter: 'postcss',
    },
};
