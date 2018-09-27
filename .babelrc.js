module.exports = {
    presets: [
        [
            '@babel/env',
            {
                targets: {
                    browsers: ['last 2 versions'],
                },
            },
        ],
    ],
    plugins: ['@babel/plugin-transform-runtime'],
};
