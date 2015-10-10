<?php

//$data = array();
//$data['mes'] = 'OK';


$name = $_POST['name-project'];
$projecturl = $_POST['project-url'];
$data = array();

if ($name === '' || $projecturl==='') {
    $data['status'] = 'error';
    //$data['text'] = 'Fill fields, please';
} else {
    $data['status'] = 'OK';
    //$data['text'] = 'All good';
}

header("Content-type: application/json");
echo json_encode($data);
exit;

//echo 'Input data: ';
//echo $_POST['name-project']." ";
//echo "path to file ";
//echo $_POST['url-project']." ";
//echo $_POST['addproject-textarea'];
?>