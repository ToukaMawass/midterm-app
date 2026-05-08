import { useState } from "react";
import { showToast } from "@components/Toast";

type RowData = {
  id: number;
  name: string;
  status: string;
};

function Dashboard() {
  const [data, setData] = useState<RowData[]>([
    { id: 1, name: "John", status: "Active" },
    { id: 2, name: "Sara", status: "Inactive" },
    { id: 3, name: "Ali", status: "Active" },
  ]);

  // DELETE
  const deleteItem = (id: number) => {
    setData((prev) => prev.filter((item) => item.id !== id));
    showToast("success", "Deleted successfully");
  };

  // TOGGLE
  const toggleStatus = (id: number) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "Active" ? "Inactive" : "Active",
            }
          : item
      )
    );

    showToast("success", "Status updated");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>Dashboard</h1>

      {/* SIMPLE TABLE UI */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#eee" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id} style={{ textAlign: "center" }}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.status}</td>

              <td>
                <button
                  onClick={() => toggleStatus(item.id)}
                  style={{
                    marginRight: "10px",
                    padding: "5px 10px",
                    background: "orange",
                    color: "white",
                    border: "none",
                  }}
                >
                  Toggle
                </button>

                <button
                  onClick={() => deleteItem(item.id)}
                  style={{
                    padding: "5px 10px",
                    background: "red",
                    color: "white",
                    border: "none",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;