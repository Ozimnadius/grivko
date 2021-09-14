<?php
header('Content-Type: application/json');

echo json_encode(array(
    'status' => true,
    'html' => getHtml()
));
exit();

function getHtml(){
    ob_start();
    ?>
        <div class="test">
            <h1>Тест</h1>
        </div>
    <?
    $html = ob_get_contents();
    ob_end_clean();
    return $html;
}