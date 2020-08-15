# SHERLOCK
## Description

Sherlock is an expectation maximization (EM) library it uses gaussian mixture models.

This library allows data clustering of n-dimensional datasets given the amount of clusters wanted.

### How does it work ?

In short, we admit that each data cluster is distributed over a gaussian distribution. 
Our EM model will then infer the mean and covariance of each distribution.

How do we do that ? 

First, let's say, given a dataset we want to infer parameters for k clusters.

For starters, we initialize k gaussian distributions with random parameters (mean and covariance).

Then we estimate the probability of each data point of belonging to this or that distribution.

Afterwards, we compute new parameters for each distribution given the confidence of each point belonging to a cluster.

We run the EM algorithm until we hit a candidate response given a threshold.

### Maths 
![equation](http://www.plantuml.com/plantuml/svg/SoWkIImgoKqioU1AqoZHjDL8Z3VGr3TIq5OeBisDryYpDTICoyzFZCzBpY_MqCWho2pHrFVHr4QML4YApujHACxCGyXpEQJcfO0D1G00)


### Pseudo code 

## Overview
### Directory structure
```bash
TBA
```
### How to build the library to be used in production-ready projects?
```bash
TBA
```
### How to use?
__Example:__

```typescript
import Sherlock from '@guihardbastien/sherlock';

```
### Features
TBA
## NPM custom commands

- `build`: Build the JavaScript files.
- `build:watch`: Build the JavaScript files in watch mode.
- `test`: Run jest in test mode.
- `test:watch`: Run jest in interactive test mode.
- `docs`: Generate the docs directory.
- `lint`: Runs linter on the whole project.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

*Bastien GUIHARD*
