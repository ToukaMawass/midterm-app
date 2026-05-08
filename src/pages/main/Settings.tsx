function Settings() {
  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">
        Settings
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="text-lg font-semibold mb-3">
          Theme Settings
        </h2>

        <p className="text-gray-600 mb-4">
          This page uses the global theme from Material UI + Tailwind consistency.
        </p>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Save Settings
        </button>

      </div>

    </div>
  );
}

export default Settings;