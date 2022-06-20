/* @noodom / Automatic widget creation
	- tag widgetName : name of the widget to install (folders from https://github.com/noodom/jeedom_widgets)
	
	- Download widget files and folders

Widgets list : 
- widgets OK : nooChart, nooCheckBox, nooCircleProgress, nooClockPicker, nooClockTimePicker, nooGlowingButton, nooImgProgress, nooLedScroller, nooNeonButton, nooPickAColor, nooSlider
- widgets KO : -

Widget installation details :
	- https://github.com/noodom/jeedom_widgets/blob/master/installation/nooWidgetsAutomaticInstallation.php

- Pensez au café pour les nuits blanches de codage ;) https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=noodom.fr%40gmail.com&currency_code=EUR&source=url

*/

$tags = $scenario->getTags();
(!isset($tags['#widgetName#'])) ? $tags['#widgetName#'] = 'nooNeonButton' : null;
$widgetName = $tags['#widgetName#']; 

$scenario->setLog('## Noodom widget automatic installation : ' . $widgetName . ' ##');

$widgetFound = false;

// Origin folder and filenames
$originDir = 'https://raw.githubusercontent.com/noodom/jeedom_widgets/master/' . $widgetName;
// Zip widget file
$widgetZipFile = $originDir . '/' . $widgetName . '.zip';
// Destination folder
$destinationDir = '/var/www/html/data/customTemplates';

// Get widget files
// unzip files in tmp dir // widgets folder
if (is_dir($destinationDir)) {
  $scenario->setLog('** Get files for widget ' . $widgetName);
  $scenario->setLog('- Get widget zip file : ' . $widgetZipFile);
  $destinationZipFile = $destinationDir . '/temp.zip';
  $scenario->setLog('- Destination widget zip file : ' . $destinationZipFile);
  if (!copy($widgetZipFile, $destinationZipFile)) {
    $scenario->setLog('/!\ Widget zip file download failed !');
  }
  else {
    $zip = new ZipArchive();
    if ($zip->open($destinationZipFile) === TRUE) {
      $scenario->setLog('- Extract files from widget : ' . $widgetName);
      $zip->extractTo($destinationDir . '/');
      $zip->close();
      unlink($destinationZipFile);
    }
  }
}

$scenario->setLog('==> Widget added : ' . $widgetName);

$msg = 'new widget ' . $widgetName . ' created';
$actionMsg = '';
message::add('Génération de widget Noodom', $msg, $actionMsg, null);
