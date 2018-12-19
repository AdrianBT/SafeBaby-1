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

  log('Requesting Bluetooth Device...');
  log('with ' + JSON.stringify(options));
  navigator.bluetooth.requestDevice(options)
  .then(device => {
    log('-> BLE Device Name:             ' + device.name);
    log('-> BLE Id:               ' + device.id);
    log('-> BLE Connection Status:        ' + device.gatt.connected);
  })
  .catch(error => {
    log('Argh! ' + error);
  });
}
