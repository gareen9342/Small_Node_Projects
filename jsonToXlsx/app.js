const xlsx = require("xlsx");

/**
 * For writing, the first step is to generate output data.
 * The helper ** functions write and writeFile ** will produce the data in various formats suitable for dissemination.
 * The second step is to actual share the data with the end point.
 * Assuming workbook is a workbook object
 */

const workbook = xlsx.utils.book_new();

const imsiData = [
    { name : "AA", age: 22 },
    { name : "BB", age: 33 },
    { name : "CC", age: 44 },
    { name : "DD", age: 55 },
];


// 가장 직접적으로 접근할 수 있는 방법은 HTTP event handler를 이요해서 데이터를 직접 접근하는 방법이다.
// XLSX.read와  XLSX.write는 http 모듈과 그리고 express와 잘 작동.

function send_aoa_to_client(req, res, data, bookType) {
    /* generate workbook */
    var ws = xlsx.utils.aoa_to_sheet(data); // array in array (이차원 배열의 형태를 저장하는)
    var wb = xlsx.utils.book_new(); // create a new workbook
    xlsx.utils.book_append_sheet(wb, ws, "SheetJS");

    /* generate buffer */
    var buf = xlsx.write(wb, {type:'buffer', bookType:bookType || "xlsx"});

    /* send to client */
    res.status(200).send(buf);
}
// 이걸 사용하려면 CURL 요청 보내기

function saveFile(data){
    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(workbook, worksheet, 'new Sheet');
    xlsx.writeFile(workbook, 'output.xlsx');
}

saveFile(imsiData);

