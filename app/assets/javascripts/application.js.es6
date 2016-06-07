// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require react
//= require react_ujs
//= require components
//= require_tree

function sendRequest(method, route, callback) {
  let request = new XMLHttpRequest();
  let response;

  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        response = request.response;
        callback(null, response);
      } else {
        callback(request.response);
        throw new Error(request.response);
      }
    }
  };

  request.open(method,route);
  request.send();

  return response;
}
