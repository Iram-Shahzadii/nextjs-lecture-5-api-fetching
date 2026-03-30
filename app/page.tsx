"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(""); // Search state
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Filter logic: Jo naam search se match karein sirf wahi dikhayen
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <h1 className="text-center mt-20 font-bold text-xl animate-bounce">Loading...</h1>;
  if (error) return <h1 className="text-center mt-20 text-red-500 font-bold">{error}</h1>;

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-4 text-gray-800">
          Users Directory 🚀
        </h1>
        <p className="text-center text-gray-500 mb-8 text-lg">Lecture 5: Fetching & Filtering</p>

        {/* 🔍 Search Input Field */}
        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full max-w-md px-5 py-3 rounded-full border-2 border-blue-200 focus:border-blue-500 focus:outline-none shadow-sm transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* 2-2 Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div
                key={user.id}
                className="bg-white border border-gray-100 shadow-md p-8 rounded-3xl text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  {user.name.charAt(0)}
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                <p className="text-blue-600 mb-6 font-medium">{user.email}</p>
<Link href={`/user/${user.id}`}>
  <button className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all">
    View Details
  </button>
</Link>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-400 text-xl font-medium italic">Koi user nahi mila! 🔍</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}