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
            <div class="sizes__title title">Таблица размеров</div>
            <table class="sizes__table">
                <thead>
                <tr>
                    <th>Размер</th>
                    <th>Объем груди</th>
                    <th>Объем талии</th>
                    <th>Объем бедер</th>
                </tr>
                </thead>
                <tbody>
                <? $list = [
                    [
                        "B",
                        "80",
                        "60/64",
                        "88",
                    ],
                    [
                        "C",
                        "84",
                        "63/67",
                        "92",
                    ],
                    [
                        "D",
                        "88",
                        "68/72",
                        "96",
                    ],
                    [
                        "E",
                        "92",
                        "71/75",
                        "100",
                    ],
                    [
                        "F",
                        "96",
                        "74/78",
                        "104",
                    ],
                    [
                        "G",
                        "100",
                        "77/82",
                        "108",
                    ],
                    [
                        "H",
                        "104",
                        "82/86",
                        "112",
                    ],
                    [
                        "I",
                        "108",
                        "86/90",
                        "116",
                    ],
                    [
                        "J",
                        "112",
                        "90/94",
                        "120",
                    ],
                    [
                        "K",
                        "116",
                        "94/98",
                        "124",
                    ],
                    [
                        "L",
                        "120",
                        "98/102",
                        "128",
                    ],
                    [
                        "M",
                        "124",
                        "102/106",
                        "132",
                    ],
                    [
                        "N",
                        "128",
                        "106/110",
                        "136",
                    ]

                ]; ?>
                <? foreach ($list as $tr): ?>
                    <tr>
                        <? foreach ($tr as $td): ?>
                            <td><?= $td; ?></td>
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