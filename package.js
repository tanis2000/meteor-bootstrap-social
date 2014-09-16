Package.describe({
  name: "tanis:bootstrap-social",
  summary: "Social buttons for Bootstrap packaged for Meteor",
  version: "0.1.0",
  git: "https://github.com/tanis2000/meteor-bootstrap-social.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.1');
  
  var path = Npm.require('path');
  var asset_path = path.join('bootstrap-social');
  api.addFiles(path.join(asset_path, 'bootstrap-social.css'), 'client');
});

