import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import type { ColDef, ICellRendererParams } from "ag-grid-community";

import { showToast } from "@components/Toast";

type RowData = {
  id: number;
  name: string;
  status: string;
};

function Dashboard() {
  const [rowData, setRowData] = useState<RowData[]>([
    { id: 1, name: "John", status: "Active" },
    { id: 2, name: "Sara", status: "Inactive" },
    { id: 3, name: "Ali", status: "Active" },
  ]);

  const deleteRow = (id: number) => {
    setRowData((prev) => prev.filter((row) => row.id !== id));
    showToast("success", "Row deleted successfully");
  };

  const toggleStatus = (id: number) => {
    setRowData((prev) =>
      prev.map((row) =>
        row.id === id
          ? {
              ...row,
              status: row.status === "Active" ? "Inactive" : "Active",
            }
          : row
      )
    );

    showToast("success", "Status updated");
  };

  const columnDefs: ColDef<RowData>[] = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
    { field: "status", headerName: "Status" },

    {
      headerName: "Actions",
      cellRenderer: (params: ICellRendererParams<RowData>) => {
        const data = params.data;

        if (!data) return null;

        return (
          <div style={{ display: "flex", gap: "8px" }}>

            <button
              onClick={() => toggleStatus(data.id)}
              style={{
                padding: "4px 8px",
                background: "#f59e0b",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Toggle
            </button>

            <button
              onClick={() => deleteRow(data.id)}
              style={{
                padding: "4px 8px",
                background: "#dc2626",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>

          </div>
        );
      },
    },
  ];

  return (
    <div style={{ padding: "20px" }}>

      <h1 style={{ marginBottom: "20px" }}>Dashboard</h1>

      <div className="ag-theme-alpine" style={{ height: 420, width: "100%" }}>
        <AgGridReact<RowData>
          rowData={rowData}
          columnDefs={columnDefs}
        />
      </div>

    </div>
  );
}

export default Dashboard;