exports.config = {
  namespace: 'component-b',
  outputTargets:[
    { 
      type: 'dist' 
    },
    { 
      type: 'www',
      serviceWorker: false,
      baseUrl: '/component-b'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
