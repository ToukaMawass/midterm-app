import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* HEADER */}
      <div className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">Midterm App</h1>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        {children}
      </div>

    </div>
  );
}

export default MainLayout;