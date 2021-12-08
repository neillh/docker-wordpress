let mode = "development";
let target = "web";
if ( process.env.NODE_ENV === "production" ) {
	mode = "production";
	target = "browserslist";
}

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	mode: mode,
	target: target,

	output: {
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "images/[hash][ext][query]",
	},

	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				type: "asset", //"asset" "asset/resource" "asset/inline",
				// parser: {
				// 	dataUrlCondition: {
				// 		maxSize: 30 * 1024,
				// 	}
				// }
			},
			{
				test: /\.s?css$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: { publicPath: "" },
					},
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				}
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(),
		new HtmlWebPackPlugin({
			template: "./src/index.html",
		}),
	],
	resolve: {
		extensions: [ ".js", ".jsx"],
	},
	devtool: "source-map",
	devServer: {
		static: "./dist",
		hot: true,
	}
}