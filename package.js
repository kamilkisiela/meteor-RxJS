Package.describe({
  name: "mys:rx",
  summary: "Library for composing asynchronous and event-based operations in JavaScript",
  version: "4.0.7_1",
  documentation: 'readme.md',
  git: 'https://github.com/kamilkisiela/meteor-RxJS.git'
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  api.addFiles([
    'dist/rx.all.js'
  ], 'client');

  api.export('Rx', ['client', 'server']);

});
