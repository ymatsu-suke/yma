// Google Analytics initialization
window.ga = window.ga || function() {
  (ga.q = ga.q || []).push(arguments);
};
ga.l = +new Date;
ga('create', 'UA-XXXXX-Y', 'auto');
ga('send', 'pageview');

// Font loading
WebFont.load({
  google: {
    families: ['Noto+Serif+JP:400,700', 'Libre+Baskerville']
  }
});
