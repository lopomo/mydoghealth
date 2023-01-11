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
				test: /\.module\.s(a|c)ss$/,
				loader: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							modules: {
								mode: 'local',
								exportGlobals: true,
								localIdentName: '[name]-[local]-[hash:base64:5]'
							  }
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						}
					}
				],
				include: /\.module\.s(a|c)ss$/
			},
			{
				test: /\.s(c|a)ss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: false,
							sourceMap: true 
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				],
				exclude: /\.module\.s(a|c)ss$/
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
				//IMAGE LOADER
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader:'file-loader'
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
		extensions: ['.ts', '.tsx', '.js', '.json', '.scss'],
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
			inject: false
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
