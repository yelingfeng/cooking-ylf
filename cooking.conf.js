const cooking = require("cooking")
const path = require("path")
const pkg = require('./package')
const vendorPlugin = Object.keys(pkg.dependencies)

const config = {
    use: 'vue',
    entry: {
        app: './src/index.js',
        vendor:vendorPlugin
    },
    dist:"./static",
    template: [
        {
            filename: 'index.html',
            template:  'src/template/index.html',
        }
    ],
    devServer: { // 开启 webpack-dev-server
        port: 8100, // 端口为 8888
        publicPath: '/' // 开启 dev-server 时默认打包的资源文件路径是和 index.html 同级的
    },

    // production
    sourceMap : false,
    hash : true,
    clear :true,
    assetsPath: 'static',
    publicPath:"/static/",
    urlLoaderLimit: 10000,
    extractCSS: 'css/[hash:7].[name].css', // 提取 CSS 文件
    extends: ['vue2','saladcss'],
    chunk: [
        'vendor', // entry 里定义的入口文件，也就是会将 vue 单独打包
        'manifest' // 这个并没有在 entry 里声明的会将所有公用部分打包，也就是 webpack runtime
    ],
    alias: {
        src: path.resolve(__dirname, './src'),
        components: path.resolve(__dirname, './src/components'),
        views: path.resolve(__dirname, './src/views'),
    },

    postcss: [
        require('postcss-salad')({
            browser: ['ie > 9', 'last 2 version'],
            features: {
                'bem': {
                    'shortcuts': {
                        'component': 'b',
                        'modifier': 'm',
                        'descendent': 'e'
                    },
                    'separators': {
                        'descendent': '__',
                        'modifier': '--'
                    }
                }
            }
        })
    ],
}

cooking.set(config)



if (process.env.NODE_ENV === 'production') {
    cooking.add('output.filename', '[hash:7].[name].js')
}


module.exports = cooking.resolve();