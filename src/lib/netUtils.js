import { Live2DModelWebGL } from '../../src/lib/live2d';

export function loadBytes(path, type, callback) {
  var request = new XMLHttpRequest();
  request.open('GET',path);
  request.responseType = type;
  if(type === 'json')
    request.overrideMimeType('application/json');
  request.onload = () => {
    if(request.status < 400) {
      callback(request.response);
    } else {
      console.error('Failed to load (' + request.status + ') : ' + path);
    }
  };
  request.send(null);
}
