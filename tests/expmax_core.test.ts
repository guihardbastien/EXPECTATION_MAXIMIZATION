import * as Chai from 'chai';
import * as EmCore from '../lib/core/expmax_core';

const should = Chai.should();
const opts = {    
    'clusterQt':2, // Quantity of clusters you want to fit
    'maxEpochs':1000, // Maximum training cycles
    'threshold': 2e-16 // Threshold (epsilon) used to define convergence
}
const clusters = [
        {
          mu: [ 0.255483457286539, 0.717174117928097 ],
          sigma: [
              [ 0.37918586653140296, 0.9473365713168331 ],
              [ 0.036596727922838745, 0.8357720590130724 ]
          ],
          pi: 0.5,
          vectorSpaceDim: 2,
          gamma: [
            0.5720863786470161,
            0.9849934185604607,
            0.6807754934338666,
            0.4921113474208707
          ]
        },
        {
          mu: [ 0.9606696213069283, 0.36703270383370756 ],
          sigma: [
              [ 0.8129709325824281, 0.7953961223617247 ],
              [ 0.7412864744059586, 0.2267046330135567 ]
          ],
          pi: 0.5,
          vectorSpaceDim: 2,
          gamma: [
            0.29755074555470284,
            0.8762508004598817,
            0.9798174307956591,
            0.8197043889022146
          ]
        }
];
const data = {
            points: [
                [1,2],
                [2,1],
                [7,8],
                [8,7],
            ]
        };


describe('expmax_core#maximization', () => {
    it('should maximize cluster', () => {
        const maxClusters = EmCore.maximization(clusters, data);
        maxClusters.should.eql(      [
        {
          pi: 0.6824916595155536,
          mu: [ 4.275622239402234, 4.350227813189431 ],
          sigma: [
              [ 8.4682382984165, 8.622577130167333 ],
              [ 8.622577130167333, 9.794738344925038 ]
          ],
          vectorSpaceDim: 2,
          label: undefined,
          gamma: [
            0.5720863786470161,
            0.9849934185604607,
            0.6807754934338666,
            0.4921113474208707
          ]
        },
        {
          pi: 0.7433308414281146,
          mu: [ 5.437975201137521, 5.533444884895091 ],
          sigma: [
              [ 8.067955097736291, 8.46800053751492 ],
              [ 8.46800053751492, 9.904041045697165 ]
          ],
          vectorSpaceDim: 2,
          label: undefined,
          gamma: [
            0.29755074555470284,
            0.8762508004598817,
            0.9798174307956591,
            0.8197043889022146
          ]
        }
      ]);
    });
});

describe('expmax_core#expectation', () => {
    it('should assign gammas correctly', () => {
        const exp = EmCore.expectation(clusters, data);
        exp[0].gamma.should.eql(
            [0.031910990841275653,
            0.25123034799527744,
            0.9999999999999105, 1]);
        exp[1].gamma.should.eql([
            0.9680890091587243,
            0.7487696520047226,
            8.946447452280038e-14,
            3.3099346335618843e-19
          ]);
    });
});
describe('expmax_core#createRandomClusters', () => {
    it('should assign gammas correctly', () => {
        const randomClusters = EmCore.createRandomClusters(data, 2, data.points[0].length);
        randomClusters.length.should.equal(2);
        randomClusters[0].mu.length.should.equal(2);
    });
});

describe('expmax_core#train', () => {
    it('should train model', () => {
        const model = EmCore.train(clusters, data, opts);
        model.should.eql(
        [
   {
      "mu":[
         4.275622239402234,
         4.350227813189431
      ],
      "sigma":[
         [
            1,
            0.11808831598267527
         ],
         [
            1,
            0.8819116840173247
         ]
      ],
      "vectorSpaceDim":2,
      "pi":0.6824916595155536,
      "gamma":[
         0.6536687349030893,
         0.9854136269012214,
         0.038085099604213156,
         0.046334008152942134
      ]
   },
   {
      "mu":[
         5.437975201137521,
         5.533444884895091
      ],
      "sigma":[
         [
            1,
            0.12394714495629508
         ],
         [
            1,
            0.8760528550437049
         ]
      ],
      "vectorSpaceDim":2,
      "pi":0.7433308414281146,
      "gamma":[
         0.34633126509691065,
         0.014586373098778617,
         0.9619149003957868,
         0.9536659918470579
      ]
   }
])
    });
});

