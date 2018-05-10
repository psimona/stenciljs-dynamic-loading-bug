exports.config = {
  namespace: 'component-a',
  outputTargets:[
    { 
      type: 'dist' 
    },
    { 
      type: 'www',
      serviceWorker: false,
      baseUrl: '/component-a'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
