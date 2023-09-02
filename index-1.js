const fs = require('fs');
const xl = require('excel4node');


let oData_v4 = fs.readFileSync('APIHub_oDataV4.json');
let v4_api_names = JSON.parse(oData_v4);
let workbook = new xl.Workbook();

// Add Worksheets to the workbook
let ws_v2 = workbook.addWorksheet('OData V2');
let ws_v4 = workbook.addWorksheet('OData V4');

// let data = oData_v4.;
console.log(v4_api_names)



let rowIndex = 2;
oData_v4.forEach(api => {
    let column_idx = 1;
    Object.keys(api);
    // console.log(Object.keys(api))
});

// const cols = [
//     "Name",
//     "Description"
// ] 



workbook.write('API_V4.xlsx', function (error, stats){
    if (error) {
        console.log("Error writing to excel");
    } else {
        console.log("Updated excel");
    }
})



// console.log(v4_api_names);