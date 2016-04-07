'use strict';

const Lines = require('../../lib/Lines');
const graphicsComponent = require('../helpers/graphicsComponent');
const linesComponent = require('../helpers/linesComponent');

// TODO:
// - check asAreas proprty

describe('Lines', () => {

    // Lines should be a graphics renderer component
    graphicsComponent(Lines, {
        colorProperty: 'stroke',
        defaultProps: {
            colors: 'category20',
            interpolation: 'monotone',
            seriesVisible: true,
            lineVisible: true,
            lineWidth: 3
        },
        visibleProperties: {
            seriesVisible: ['g', 'series'],
            lineVisible: ['path']
        },
        attributesProperties: {
            seriesAttributes: ['g', 'series'],
            lineAttributes: ['path']
        },
        styleProperties: {
            seriesStyle: ['g', 'series'],
            lineStyle: ['path']
        }
    });
    
    linesComponent(Lines, {
        lineWidth: true,
        lineInterpolations: [
            'linear', 'linear-closed', 'step', 'step-before', 'step-after',
            'basis', 'basis-open', 'basis-closed', 'bundle',
            'cardinal', 'cardinal-open', 'cardinal-closed', 'monotone'
        ]
    });

});