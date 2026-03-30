"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserDetail() {
  const { id } = useParams(); // URL se ID lega (1, 2, 3 etc.)
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <div className="p-10 text-center">Loading User Profile...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-xl p-8 rounded-2xl max-w-sm w-full text-center border">
        <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
        <p className="text-blue-600 mb-4">{user.email}</p>
        <div className="text-left border-t pt-4 text-gray-600">
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>Company:</strong> {user.company?.name}</p>
        </div>
        <button 
          onClick={() => window.history.back()}
          className="mt-6 text-sm text-gray-400 hover:text-black"
        >
          ← Go Back
        </button>
      </div>
    </div>
  );
}