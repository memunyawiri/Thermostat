$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving').text('on')
    updateTemperature();
  });

  $('#powersaving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving').text('off')
    updateTemperature();
  });

  $('#current-city').change(function() {
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=5179136c2531a43420fd64958fec4323&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp)
  })
})

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemperature());
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  function updateEnergyUsage() {
    $('#energy-usage').text(thermostat.energyUsage());
    $('#energy-usage').attr('class', thermostat.energyUsage());
  };
});
