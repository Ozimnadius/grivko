<?php
header('Content-Type: application/json');

echo json_encode(array(
    'status' => true,
    'html' => getHtml()
));
exit();

function getHtml()
{
    ob_start();
    ?>
    <div class="sizes fancybox-webcomp">
        <div class="sizes__wrap">
            <div class="sizes__title title">оформление заказа</div>
            <table class="sizes__table">
                <thead>
                <tr>
                    <th>Российский размер</th>
                    <th>Обхват груди, в см</th>
                    <th>обхват талии, в см</th>
                    <th>Обхват бедер, в см</th>
                </tr>
                </thead>
                <tbody>
                <? $list = [
                    [
                        "38",
                        "86-90",
                        "86-90",
                        "86-90",
                    ],
                    [
                        "39",
                        "90-94",
                        "90-94",
                        "90-94",
                    ],
                    [
                        "40",
                        "94-98",
                        "94-98",
                        "94-98",
                    ],
                    [
                        "41",
                        "86-90",
                        "86-90",
                        "86-90",
                    ],
                    [
                        "42",
                        "90-94",
                        "90-94",
                        "90-94",
                    ],
                    [
                        "43",
                        "94-98",
                        "94-98",
                        "94-98",
                    ],
                    [
                        "44",
                        "86-90",
                        "86-90",
                        "86-90",
                    ],
                    [
                        "45",
                        "90-94",
                        "90-94",
                        "90-94",
                    ],
                    [
                        "46",
                        "94-98",
                        "94-98",
                        "94-98",
                    ],
                    [
                        "47",
                        "86-90",
                        "86-90",
                        "86-90",
                    ],
                    [
                        "48",
                        "90-94",
                        "90-94",
                        "90-94",
                    ],
                    [
                        "49",
                        "94-98",
                        "94-98",
                        "94-98",
                    ],
                    [
                        "50",
                        "86-90",
                        "86-90",
                        "86-90",
                    ],
                    [
                        "51",
                        "90-94",
                        "90-94",
                        "90-94",
                    ],
                    [
                        "52",
                        "94-98",
                        "94-98",
                        "94-98",
                    ],

                ]; ?>
                <? foreach ($list as $tr): ?>
                    <tr>
                        <? foreach ($tr as $td): ?>
                            <td><?=$td;?></td>
                        <? endforeach; ?>
                    </tr>
                <? endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>
    <?
    $html = ob_get_contents();
    ob_end_clean();
    return $html;
}