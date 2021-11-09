module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
        themeColor: '#b93838',
        background_color: '#b93838',
        msTileColor: '#b93838',
        iconPaths: {
            msTileImage: 'img/icons/mstile-150x150.png'
        },

        workboxOptions: {
            skipWaiting: true,
            clientsClaim: true,
            exclude: [/_redirects/],
        }
    }
}