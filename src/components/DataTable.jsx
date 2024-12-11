import React, { useState } from 'react';
import {
    useReactTable,
    createColumnHelper,
    getCoreRowModel,
} from '@tanstack/react-table';
import axios from 'axios';
import '../Styles/dataTable.css';

const DataTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showTable, setShowTable] = useState(false); // State to toggle table visibility

    // Define columns using column helper
    const columnHelper = createColumnHelper();
    const columns = [
        columnHelper.accessor('id', {
            header: 'ID',
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor('title', {
            header: 'Title',
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor('body', {
            header: 'Body',
            cell: (info) => info.getValue(),
        }),
    ];

    // Fetch data from the API
    const fetchData = async () => {
        setLoading(true); // Start loading state
        setError(null); // Reset error state
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/posts'
            );
            setData(response.data); // Set fetched data
            setShowTable(true); // Show the table
        } catch (err) {
            setError(err); // Set error
        } finally {
            setLoading(false); // Stop loading state
        }
    };

    // Create the table instance
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="data-table">
            <h1>API Data Table</h1>
            <button onClick={fetchData}>Load Data</button> {/* Trigger data fetch */}
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {showTable && !loading && !error && (
                <table>
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : header.column.columnDef.header}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}>{cell.column.columnDef.cell(cell)}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default DataTable;
