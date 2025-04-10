import { useState } from "react";
import "./App.css";

function App() {
  const [showName, setShowName] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowName(true);
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Full Name Display</h1>
      <form onSubmit={handleSubmit} className="space-y-2 w-full max-w-sm mx-auto">
        <div>
          <label htmlFor="name" className="block ml-2 text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="border border-gray-400 rounded w-full h-10 p-2 px-3"
            required
          />
        </div>
        <div>
          <label htmlFor="name" className="block ml-2 text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="border border-gray-400 rounded w-full h-10 p-2 px-3"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>

      {showName && (
        <div className="mt-4 text-center">
          <h2>
            Full Name: {formData.firstName} {formData.lastName}
          </h2>
        </div>
      )}
    </section>
  );
}

export default App;
