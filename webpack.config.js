const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    entry: path.join(__dirname,'src/index.ts'),
    mode:'development',
    resolve:{
        extensions:['*','.js','.ts']
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            },
            {
                test:/\.ts/,
                loader:'ts-loader'
            }
        ]
    },
    plugins:[
       new htmlWebpackPlugin({
           template:path.join(__dirname,'src/index.temp.html'),
           favicon:path.join(__dirname,'src/img/yanyunchangfeng.png'),
       })
    ],
    devServer:{
        port:3001,
        open: true,
        contentBase:path.join(__dirname,'dist')
    }
}