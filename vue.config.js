module.exports = {
    publicPath : "./", 
    outputDir: 'dist',
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'https://www.easy-mock.com/mock/5c9f27277277af0a5a109e94',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/api': '/api'
                }
            }
        }
    }
}
  

