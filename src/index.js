// Setup an event listener to make an API call once auth is complete
function onLinkedInLoad() {
  IN.Event.on(IN, 'auth', getResult);
};

let onSuccess = (data) => {
  localStorage.firstName = data.firstName;
  localStorage.lastName = data.lastName;
  localStorage.headline = data.headline;
  localStorage.siteStandardProfileRequest = data.siteStandardProfileRequest.url;
};

let getData = (data) => {
  localStorage.numConnections = data.numConnections;
  localStorage.pictureUrl = data.pictureUrl;  
  window.location.href = 'views/home';
};

let onError = (error) => {
  alert(error);
};

let getResult = () => {
  IN.API.Raw('/people/~').result(onSuccess).error(onError);
  IN.API.Raw('people/~:(id,num-connections,picture-url)').result(getData).error(onError);
};