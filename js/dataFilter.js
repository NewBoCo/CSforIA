/* Globals Papa */

/*function loadDistricts(districts) {
  var dataEl = document.querySelector('#teachesCs');
  for(var i = 0; i<districts.length; i++){
    var district = districts[i];
    var optionEl = document.createElement('option');
    if(district['% Teaches CS']!== '0%'){
      optionEl.value = 'No';
    } else {
      optionEl.value = 'Yes';
    }
    dataEl.appendChild(optionEl);
  }
}*/

var selectYesNo = document.querySelector('#teachesCs');
if(selectYesNo.option.value === 'Yes')

function loadData(){
  var csvUrl = 'data/DataBySchoolDistrict.csv';
  Papa.parse(csvUrl, {
    download: true,
    header: true,
    complete: function(results){
      console.log('CSV loaded: ', results.data);
      loadDistricts(results.data);
    }
  });
}

window.addEventListener('load', loadData);