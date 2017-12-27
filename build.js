const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const multiEntry = require('rollup-plugin-multi-entry');

process.env.NODE_ENV = 'production';

const external = [
    'styled-components',
    'react',
    'prop-types',
    'polished',
    'moment',
    'react-custom-scrollbars',
    'react-styled-flexboxgrid',
    'react-router-dom',
    'react-text-mask',
    'react-input-autosize',
    'text-mask-addons/dist/createAutoCorrectedDatePipe',
    'text-mask-addons/dist/createNumberMask',
    'lodash',
    'downshift',
    'i18next',
    'react-day-picker/DayPickerInput',
    'react-day-picker/moment',
    'react-onclickoutside',
    'react-textarea-autosize',
    // TODO: use `external` as function and Regex this shit
    'typeface-roboto/files/roboto-latin-300.woff2',
    'typeface-roboto/files/roboto-latin-400.woff2',
    'typeface-roboto/files/roboto-latin-500.woff2',
    'typeface-roboto/files/roboto-latin-700.woff2',
];

rollup
    .rollup({
        input: ['./src/index.js', './src/general/icon/index.js'],
        external,
        plugins: [
            multiEntry(),
            babel({
                exclude: 'node_modules/**',
                babelrc: false,
                presets: ['@volst/babel-preset-react-app'],
                plugins: ['external-helpers']
            }),
        ],
    })
    .then(bundle => {
        bundle.write({
            format: 'es',
            file: 'dist/volst-ui-components.es.js',
        });
        bundle.write({
            format: 'cjs',
            file: 'dist/volst-ui-components.cjs.js',
        });
    })
    .catch(err => {
        console.log(String(err));
        process.exit(1);
    });
