//Scan for services
if('bluetooth' in navigator){
  navigator.bluetooth.requestDevice({
  });
}
.then(device => {
  document.getElementById("test").innerHTML = device.name;
});
//   acceptAllDevices: true,
//   optionalServices: ['battery_service']
// })
// .then(device => { /* ... */ })
// .catch(error => { console.log(error); });

function onButtonClick() {
  let filters = [];

  let filterService = document.querySelector('#service').value;
  if (filterService.startsWith('0x')) {
    filterService = parseInt(filterService);
  }
  if (filterService) {
    filters.push({services: [filterService]});
  }

  let filterName = document.querySelector('#name').value;
  if (filterName) {
    filters.push({name: filterName});
  }

  let filterNamePrefix = document.querySelector('#namePrefix').value;
  if (filterNamePrefix) {
    filters.push({namePrefix: filterNamePrefix});
  }

  let options = {};
  if (document.querySelector('#allDevices').checked) {
    options.acceptAllDevices = true;
  } else {
    options.filters = filters;
  }

  console.log('Requesting Bluetooth Device...');
  console.log('with ' + JSON.stringify(options));
  navigator.bluetooth.requestDevice(options)
  .then(device => {
    document.getElementById("devName").innerHTML = device.name;
    document.getElementById("idNum").innerHTML = device.id;
    document.getElementById("conct").innerHTML = device.gatt.connected;
  })
  .catch(error => {
    log('Argh! ' + error);
  });
}
