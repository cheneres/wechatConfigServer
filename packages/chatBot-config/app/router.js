
'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.redirect('/', '/configPage', 302);
  router.get('/configPage', controller.html.index.simple);
  router.get('/html(/.*)?', controller.html.index.spa);
  router.get('/api/getConfig', controller.html.index.getConfig);

};
