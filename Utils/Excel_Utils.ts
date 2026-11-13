import * as XLSX from 'xlsx';

export class ExcelUtils {



    //Create a Method select the sheet.
    static getExcelUtils(filepath: string, sheetName: string) {

        //Read the exact path and store it in a workbook.
        const workbook = XLSX.readFile(filepath);
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        return jsonData;


    }

    //for Specific row return 
    static getRowSpecificUtils(filepath: string, sheetName: string, colomnName: string, searchValue: any) {

        //first get all the rows from the exist method, now this below line returns the entire row
        const allRows = ExcelUtils.getExcelUtils(filepath, sheetName);

        for (let allRow of allRows as any) {

            if (allRow[colomnName] === searchValue) {

                return allRow;
            }
        }
    }
}