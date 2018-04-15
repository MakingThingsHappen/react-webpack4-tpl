const path = require('path');

module.exports = {
    entry: {
        app: './src/app.jsx'
    },
    output: {
        filename: 'bundle.[name].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {test: /\.jsx$/, use: 'babel-loader'}
        ]
    },
    plugins: []
};
