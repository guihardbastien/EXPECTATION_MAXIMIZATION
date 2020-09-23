# Expmax
| Statements                | Branches                | Functions                |
| ------------------------- | ----------------------- | ------------------------ |
| ![Statements](https://img.shields.io/badge/Coverage-97.32%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Coverage-81.08%25-yellow.svg) | ![Functions](https://img.shields.io/badge/Coverage-95.45%25-brightgreen.svg) |
## Description

Expmax is an expectation maximization (EM) library. It makes use of a gaussian mixture model.

This library allows data clustering of n-dimensional datasets given the amount of clusters wanted.

## Overview
### Directory structure
```bash
.
├── core
│   ├── expmax_core.ts
│   └── gaussian_mixture_core.ts
├── engines
│   └── expmax.ts
├── errors.ts
├── index.ts
├── types.ts
└── utils
    └── math.ts
```
### How to build the library to be used in production-ready projects?
Please refer to the `NPM custom commands` section

### How to use?
First install the library
```bash
npm install expmax
```
__Example:__

```typescript
import {ExpMax} from 'expmax';

// Dataset should have data points with same vector space dimension
const dataset: IDataset = {
    'points': [
        [1.1,1],
        [1,2],
        [2,2],
        [2,1],
        [15,15],
        [15,16],
    ],
    'label':'test',
};

const opts: IEmOptions = {    
    'clusterQt':2, // Quantity of clusters you want to fit
    'maxEpochs':1000, // Maximum training cycles
    'threshold': 2e-16 // Threshold (epsilon) used to define convergence
}

const model = new ExpMax(dataset, opts); // Instanciate the model with random values
const trainedModel = model.train() // Train it
console.log(trainedModel);
/*
Output:
[
  {
    mu: [ 15.55, 16 ],
    sigma: [ [Array], [Array] ],
    vectorSpaceDim: 2,
    pi: 0.3333333333333333,
    gamma: [
      1.8570742387734104e-153,
      3.512200996873401e-50,
      3.128974029587457e-48,
      7.275927146729349e-54,
      1,
      1
    ]
  },
  {
    mu: [ 1.525, 1.5 ],
    sigma: [ [Array], [Array] ],
    vectorSpaceDim: 2,
    pi: 0.6666666666666666,
    gamma: [ 1, 1, 1, 1, 5.362024468745314e-82, 1.955669841306763e-88 ]
  }
]*/
```
### Features

- `.train()`: Trains the model then return clusters
- `.update(newDataset)`: Updates dataset then trains the model and returns new clusters

## NPM custom commands

- `build`: Build the JavaScript files.
- `build:watch`: Build the JavaScript files in watch mode.
- `test`: Run jest in test mode.
- `test:watch`: Run jest in interactive test mode.
- `docs`: Generate the docs directory.
- `lint`: Runs linter on the whole project.


## Ressources
* https://towardsdatascience.com/gaussian-mixture-models-explained-6986aaf5a95
* https://perso.telecom-paristech.fr/bonald/documents/gmm.pdf

## Credit

@lovasoa: https://github.com/lovasoa/expectation-maximization

This lib helped me a great deal, thanks.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

*Bastien GUIHARD*
