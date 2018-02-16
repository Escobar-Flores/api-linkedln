'use strict';

// Setup an event listener to make an API call once auth is complete
function onLinkedInLoad() {
  IN.Event.on(IN, 'auth', getResult);
};

var onSuccess = function onSuccess(data) {
  localStorage.firstName = data.firstName;
  localStorage.lastName = data.lastName;
  localStorage.headline = data.lastName;
  localStorage.siteStandardProfileRequest = data.siteStandardProfileRequest.url;
};

var getData = function getData(data) {
  localStorage.numConnections = data.numConnections;
  window.location.href = 'views/home.html';
};

var onError = function onError(error) {
  alert(error);
};

var getResult = function getResult() {
  IN.API.Raw('/people/~').result(onSuccess).error(onError);
  IN.API.Raw('people/~:(id,num-connections,picture-url)').result(getData).error(onError);
};