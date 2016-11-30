var webpack = require('webpack');

module.exports = {
    //script! is the script-loader plugin
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: '/public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
           Main: 'app/components/Main.jsx',
           applicationStyles: 'app/styles/app.scss',
           Nav: 'app/components/Nav.jsx',
           Timer: 'app/components/Timer.jsx',
           Countdown: 'app/components/Countdown.jsx',
           Clock: 'app/components/Clock.jsx',
           CountdownForm: 'app/components/CountdownForm.jsx',
           Controls: 'app/components/Controls.jsx'

        },
        extensions: ['', '.js', 'jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    //Used a source map so debuggin in chrome with debugger; doesn't convert all the code through webpack first
    devtool: 'inline-source-map'
};