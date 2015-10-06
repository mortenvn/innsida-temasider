// When the 'change OS' link is clicked, show the OS select box
$('.getting-online-module .change-os-button').click(function(event) {
  event.preventDefault();
  $(this).hide();
  $(".getting-online-module .change-os-select").show();
});

// When an OS is selected from the select box, change what guide is being shown
$('.getting-online-module .change-os-select').change(function() {
  var $selected_os = $('.getting-online-module .change-os-select option:selected');
  $('.getting-online-module .os-name').text($selected_os.text());
  $('.getting-online-module .instructions').hide();
  $('.getting-online-module .instructions.' + $selected_os.val()).show();
});

// -------------------------------------------------
// OS DETECTION
// -------------------------------------------------
// The instruction_os variable determines which guide should be shown to the user.
// For example, if platform.js detects that you are running Windows 7, "instruction_os"
// will be set to "win-7". To find what the value of instruction_os should be,
// check the values in the select box .change-os-select
var instruction_os;

if (platform.os.family.match(/Windows/g) && !platform.os.family.match(/Windows Phone/g)) {
  var windows_version = platform.os.version.substring(0, 1); // Only get the first number
  if      (windows_version.match(/6/g))         { instruction_os = 'win-vista'; }
  else if (windows_version.match(/7/g))         { instruction_os = 'win-7'; }
  else if (windows_version.match(/8/g))         { instruction_os = 'win-8'; }
  else                                          { instruction_os = 'win-8'; }  // Newest Windows guide
}
else if (platform.os.family === 'OS X')         { instruction_os = 'osx'; }
else if (platform.os.family === 'iOS')          { instruction_os = 'ios'; }
else if (platform.os.family === 'Android')      { instruction_os = 'android'; }
else if (platform.os.family === 'CentOS' ||
         platform.os.family === 'Debian' ||
         platform.os.family === 'Fedora' ||
         platform.os.family === 'FreeBSD' ||
         platform.os.family === 'Kubuntu' ||
         platform.os.family === 'Linux Mint' ||
         platform.os.family === 'Red Hat' ||
         platform.os.family === 'SuSE' ||
         platform.os.family === 'Ubuntu' ||
         platform.os.family === 'Xubuntu' ||
         platform.os.family === 'Linux')        { instruction_os = 'linux'; }
else                                            { instruction_os = 'general'; }

// When the page loads, show the guide for the detected OS
$('.getting-online-module .change-os-select').val(instruction_os);
$('.getting-online-module .instructions.' + instruction_os).show();
$('.getting-online-module .os-name').text($('.getting-online-module .change-os-select option:selected').text());