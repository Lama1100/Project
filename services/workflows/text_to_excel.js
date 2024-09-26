const fs = require('fs');
const xlsx = require('xlsx');

// Read text from the .txt file
const readTextFile = (filePath) => {
    return fs.readFileSync(filePath, 'utf8');//why 'utf8'? This ensures that any special characters are read correctly  
};

// Convert text to array based on a delimiter
const convertTextToArray = (text, delimiter = '\n') => {
    return text.split(delimiter).map(line => line.split(','));
};
// Write array to Excel file
const writeToExcel = (data, outputFilePath) => {
    const worksheet = xlsx.utils.aoa_to_sheet(data);//This method converts the two-dimensional array data into a worksheet format.
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    xlsx.writeFile(workbook, outputFilePath);
};
// Main function
const main = () => {
    const inputFilePath = 'input.txt'; 
    const outputFilePath = 'output.xlsx'; 

    // Read the text file
    const text = readTextFile(inputFilePath);

    // Convert text to array 
    const data = convertTextToArray(text);

    // Write data to Excel
    writeToExcel(data, outputFilePath);

    console.log('Data has been written to Excel file:', outputFilePath);
};
// Run the main function
main();