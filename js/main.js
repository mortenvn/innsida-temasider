$('.change-os-button').click(function(event) {
  event.preventDefault();
  $(this).hide();
  $(".change-os-select").show();
});

$('.change-os-select').change(function() {
  var os = $('.change-os-select option:selected').val();
  $('.instructions').hide();
  $('.instructions.' + os).show();
});

var detected_os = platform.os;
var instruction_os;

console.log(detected_os);

if (detected_os.family === 'Windows') {
  var os_version = detected_os.version;
  if (os_version.match(/10.7/g)) { // Lion
    instruction_os = 'osx-10.7';
  }
  else if (os_version.match(/10.8/g)) { // Mountain Lion
    instruction_os = 'osx-10.8';
  }
  else {
    instruction_os = 'osx-10.10'; // Show newest
  }
}

else if (detected_os.family === 'OS X') {
  var os_version = detected_os.version;
  if (os_version.match(/10.7/g)) { // Lion
    instruction_os = 'osx-10.7';
  }
  else if (os_version.match(/10.8/g)) { // Mountain Lion
    instruction_os = 'osx-10.8';
  }
  else if (os_version.match(/10.9/g)) { // Mavericks
    instruction_os = 'osx-mavericks';
  }
  else if (os_version.match(/10.10/g)) { // Yosemite
    instruction_os = 'osx-yosemite';
    console.log(instruction_os);
  }
  else {
    instruction_os = 'osx-10.10'; // Show newest
  }
}


$('.change-os-select').val(instruction_os);
$('.instructions.' + instruction_os).show();
// $('.instructions.' + 'win-7').show();
$('.os-name').text($('.change-os-select option:selected').text());