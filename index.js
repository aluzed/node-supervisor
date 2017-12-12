// https://www.npmjs.com/package/systeminformation
const si = require('systeminformation');

// callback style
si.cpu(function(data) {
    console.log('CPU-Information:');
    console.log(data);
});

si.cpuTemperature(d => {
  console.log('Temp');
  console.log(d);
})

si.mem(d => {
  console.log('Memory');
  console.log(d);
});

// promises style - new in version 3
si.cpu()
    .then(data => console.log(data))
    .catch(error => console.error(error));
