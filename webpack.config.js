const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LinkTypePlugin = require('html-webpack-link-type-plugin').HtmlWebpackLinkTypePlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const WebpackBar = require('webpackbar');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
	entry: {
		code: path.resolve(__dirname, 'src/main.tsx')
	},
	mode: 'development',
	context: path.resolve(__dirname, ''),
	optimization: {
		splitChunks: {
		cacheGroups: {
			commons: {
			test: /[\\/]node_modules[\\/]/,
			name: 'vendors',
			chunks: 'all'
			}
		}
		}
	},
	stats: {
		assets: false,
		modules: false,
		children: false,
		timings: false,
		hash: false
	},
	devServer: {
		port: 3005
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '',
		filename: '[name].js',
		chunkFilename: '[name].js',
		pathinfo: false,
		devtoolFallbackModuleFilenameTemplate: 'webpack-internal:///[resource-path]?[hash]'
	},
	performance: {
		hints: false
	},
	module: {
		rules: [
		{
			test: /\.tsx?$/,
			exclude: /node_modules/,
			use: [{
			loader: 'happypack/loader',
			options: {
				transpileOnly: true,
				appendTsSuffixTo: [/\.vue$/],
			}
			}]
		},
		{
			test: /\.s(c|a)ss$/,
			use: [
			// Creates `style` nodes from JS strings
			'style-loader',
			// Translates CSS into CommonJS
			{
				loader: 'css-loader',
				options: {
					sourceMap: false,
					url: false,
					importLoaders: 2
				}
			},
			// Compiles Sass to CSS
			'sass-loader',
			],
			},
			{
				test: /\.(woff|woff2|ttf|svg|eot)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'fonts',
							name: '[name].[ext]'
						}
					}
				]
			},
		{
			test: /\.(svg)(\?.*)?$/,
			use: [
			{
				loader: 'file-loader',
				options: {
				name: 'img/[name].[ext]'
				}
			}
			]
		}
		]
	},
	resolve: {
		modules: ['node_modules'],
		alias: {
		'react-native': 'react-native-web'
		},
		extensions: ['.ts', '.tsx', '.js', '.json'],
		plugins: [
		new TsconfigPathsPlugin({
			configFile: path.resolve(__dirname, 'tsconfig.json')
		})
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
		template: path.resolve(__dirname, 'public/index.html'),
		filename: 'index.html',
		inject: true
		}),
		new CopyWebpackPlugin({
		patterns: [
			{
			from: path.resolve(__dirname, 'public'),
			toType: 'dir',
			globOptions: {
				ignore: [
				'index.html'
				]
			}
			}
		]
		}),
		new HappyPack({
		id: '1',
		threads: 2,
		verbose: false,
		loaders: [
			{
			path: 'ts-loader',
			query: { happyPackMode: true }
			}
		]
		}),
		new MiniCssExtractPlugin({
		filename: 'styles.css'
		}),
		new LinkTypePlugin(),
		new ForkTsCheckerWebpackPlugin({

		}),
		new WriteFilePlugin({
		test: /^(?!.*(hot\-update)).*/
		}),
		new CleanWebpackPlugin({
		root: path.resolve(__dirname, '')
		}),
		new WebpackBar({
		name: 'My dog health client',
		color: 'yellow'
		})
	],
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	}
}
