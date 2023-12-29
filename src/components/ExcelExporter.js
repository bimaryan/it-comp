// ExcelExporter.js
import * as XLSX from 'xlsx';

export const exportExcel = (data) => {
    // Define the order of columns
    const columnOrder = ['id', 'fullName', 'address', 'school', 'department', 'competitionCategory', 'studentCardImages'];

    // Rearrange the data properties to match the defined order
    const orderedData = data.map(item => {
        const orderedItem = {};
        columnOrder.forEach(column => {
            orderedItem[column] = item[column];
        });

        // Format hyperlinks for image files
        orderedItem['studentCardImages'] = item['studentCardImages'].map(image => `=HYPERLINK("${image}", "Link")`);

        return orderedItem;
    });

    const ws = XLSX.utils.json_to_sheet(orderedData);

    // Customizing appearance (optional)
    ws['!cols'] = [
        { width: 25 }, // ID column
        { width: 25 }, // Name column
        { width: 25 }, // Email column
        { width: 40 }, // School column
        { width: 20 }, // Department column
        { width: 30 }, // Competition Category column
        { width: 50 }, // Student Card Images column
    ];

    // Creating a style object for bold text
    const boldStyle = { bold: true };

    // Adding headers with bold style
    ws['A1'] = { v: 'ID', t: 's', s: boldStyle };
    ws['B1'] = { v: 'Nama', t: 's', s: boldStyle };
    ws['C1'] = { v: 'Alamat', t: 's', s: boldStyle };
    ws['D1'] = { v: 'Sekolah', t: 's', s: boldStyle };
    ws['E1'] = { v: 'Jurusan', t: 's', s: boldStyle };
    ws['F1'] = { v: 'Kategori lomba', t: 's', s: boldStyle };
    ws['G1'] = { v: 'Foto peserta & pembayaran', t: 's', s: boldStyle };

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Registrations');
    XLSX.writeFile(wb, 'daftar_peserta_itcomp.xlsx');
};
