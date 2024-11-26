import React, { useState } from "react";
import { Briefcase, Calendar, DollarSign, User } from "lucide-react";

const Dashboard = () => {
  // Dummy data for Guests and Room Types
  const [guests, setGuests] = useState([
    { id: 1, name: "John Doe", roomType: "Suite", status: "Checked-in" },
    { id: 2, name: "Jane Smith", roomType: "Standard", status: "Checked-out" },
  ]);

  const [roomTypes, setRoomTypes] = useState([
    { id: 1, name: "Suite", price: 150, available: 10 },
    { id: 2, name: "Standard", price: 100, available: 5 },
    { id: 3, name: "Deluxe", price: 200, available: 3 },
  ]);

  const [showAddGuestForm, setShowAddGuestForm] = useState(false);
  const [showAddRoomForm, setShowAddRoomForm] = useState(false);

  // Form state for adding guest and room type
  const [newGuest, setNewGuest] = useState({ name: "", roomType: "Standard" });
  const [newRoom, setNewRoom] = useState({ name: "", price: 0, available: 0 });

  // Functions for managing guests and room types
  const handleAddGuest = () => {
    if (!newGuest.name) return; // Validate if name is provided
    const addedGuest = { id: guests.length + 1, ...newGuest, status: "Checked-in" };
    setGuests([...guests, addedGuest]);
    setShowAddGuestForm(false);
    setNewGuest({ name: "", roomType: "Standard" });
  };

  const handleAddRoom = () => {
    if (!newRoom.name || newRoom.price <= 0 || newRoom.available <= 0) return; // Validate if fields are filled properly
    const addedRoom = { id: roomTypes.length + 1, ...newRoom };
    setRoomTypes([...roomTypes, addedRoom]);
    setShowAddRoomForm(false);
    setNewRoom({ name: "", price: 0, available: 0 });
  };

  const handleToggleGuestStatus = (guestId) => {
    setGuests(
      guests.map((guest) =>
        guest.id === guestId
          ? { ...guest, status: guest.status === "Checked-in" ? "Checked-out" : "Checked-in" }
          : guest
      )
    );
  };

  const handleDeleteGuest = (guestId) => {
    setGuests(guests.filter((guest) => guest.id !== guestId));
  };

  const handleDeleteRoom = (roomId) => {
    setRoomTypes(roomTypes.filter((room) => room.id !== roomId));
  };

  return (
    <div className="p-6 bg-white min-h-screen w-full text-black">
      {/* Header Section */}
      <h1 className="text-3xl font-extrabold text-center sm:text-left mb-8">Welcome Hotel Admin</h1>

      {/* Stats Section */}
      <div className="bg-gray-100 p-6 mt-8 rounded-xl shadow-lg w-full">
        <div className="pb-6">
          <h2 className="text-2xl font-semibold">Hotel Status</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Rooms */}
          <div className="flex flex-col items-center justify-center bg-black text-white py-6 px-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
            <Briefcase className="text-white text-4xl mb-4" />
            <h3 className="text-lg font-medium">Total Rooms</h3>
            <p className="text-2xl font-bold mt-2">{roomTypes.length}</p>
          </div>

          {/* Total Revenue */}
          <div className="flex flex-col items-center justify-center bg-black text-white py-6 px-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
            <DollarSign className="text-white text-4xl mb-4" />
            <h3 className="text-lg font-medium">Total Revenue</h3>
            <p className="text-2xl font-bold mt-2">₹{roomTypes.reduce((acc, room) => acc + room.price * room.available, 0)}</p>
          </div>

          {/* Total Guests */}
          <div className="flex flex-col items-center justify-center bg-black text-white py-6 px-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
            <User className="text-white text-4xl mb-4" />
            <h3 className="text-lg font-medium">Total Guests</h3>
            <p className="text-2xl font-bold mt-2">{guests.length}</p>
          </div>

          {/* Available Rooms */}
          <div className="flex flex-col items-center justify-center bg-black text-white py-6 px-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
            <Calendar className="text-white text-4xl mb-4" />
            <h3 className="text-lg font-medium">Available Rooms</h3>
            <p className="text-2xl font-bold mt-2">{roomTypes.reduce((acc, room) => acc + room.available, 0)}</p>
          </div>
        </div>
      </div>

      {/* Guest Management Section */}
      <div className="bg-gray-100 border-t-4 border-black p-6 mt-8 rounded-xl shadow-lg w-full">
        <h2 className="text-xl font-semibold">Guest Management</h2>
        <button
          className="bg-black text-white px-4 py-2 rounded-lg mt-4"
          onClick={() => setShowAddGuestForm(true)}
        >
          Add Guest
        </button>

        {/* Add Guest Form */}
        {showAddGuestForm && (
          <div className="mt-4 p-4 bg-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold">Add New Guest</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddGuest();
              }}
            >
              <div className="mt-2">
                <label className="block text-gray-800">Name</label>
                <input
                  type="text"
                  value={newGuest.name}
                  onChange={(e) => setNewGuest({ ...newGuest, name: e.target.value })}
                  className="w-full p-2 mt-1 border border-gray-500 rounded-md bg-white text-black"
                  required
                />
              </div>
              <div className="mt-2">
                <label className="block text-gray-800">Room Type</label>
                <select
                  value={newGuest.roomType}
                  onChange={(e) => setNewGuest({ ...newGuest, roomType: e.target.value })}
                  className="w-full p-2 mt-1 border border-gray-500 rounded-md bg-white text-black"
                >
                  {roomTypes.map((room) => (
                    <option key={room.id} value={room.name}>
                      {room.name}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="mt-4 bg-black text-white px-4 py-2 rounded-lg">
                Add Guest
              </button>
            </form>
          </div>
        )}

        {/* Guest Table */}
        <div className="mt-4">
          <h3 className="text-lg font-medium">Guests List</h3>
          <table className="min-w-full mt-4 border-collapse table-auto text-black">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Name</th>
                <th className="py-2 px-4 border-b text-left">Room Type</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
                <th className="py-2 px-4 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {guests.map((guest) => (
                <tr key={guest.id}>
                  <td className="py-2 px-4 border-b">{guest.name}</td>
                  <td className="py-2 px-4 border-b">{guest.roomType}</td>
                  <td className="py-2 px-4 border-b">{guest.status}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleToggleGuestStatus(guest.id)}
                      className="bg-black text-white px-3 py-1 rounded-lg mr-2"
                    >
                      Toggle Status
                    </button>
                    <button
                      onClick={() => handleDeleteGuest(guest.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Room Management Section */}
      <div className="bg-gray-100 border-t-4 border-black p-6 mt-8 rounded-xl shadow-lg w-full">
        <h2 className="text-xl font-semibold">Room Management</h2>
        <button
          className="bg-black text-white px-4 py-2 rounded-lg mt-4"
          onClick={() => setShowAddRoomForm(true)}
        >
          Add Room Type
        </button>

        {/* Add Room Form */}
        {showAddRoomForm && (
          <div className="mt-4 p-4 bg-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold">Add New Room</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddRoom();
              }}
            >
              <div className="mt-2">
                <label className="block text-gray-800">Room Name</label>
                <input
                  type="text"
                  value={newRoom.name}
                  onChange={(e) => setNewRoom({ ...newRoom, name: e.target.value })}
                  className="w-full p-2 mt-1 border border-gray-500 rounded-md bg-white text-black"
                  required
                />
              </div>
              <div className="mt-2">
                <label className="block text-gray-800">Price</label>
                <input
                  type="number"
                  value={newRoom.price}
                  onChange={(e) => setNewRoom({ ...newRoom, price: e.target.value })}
                  className="w-full p-2 mt-1 border border-gray-500 rounded-md bg-white text-black"
                  required
                />
              </div>
              <div className="mt-2">
                <label className="block text-gray-800">Available Rooms</label>
                <input
                  type="number"
                  value={newRoom.available}
                  onChange={(e) => setNewRoom({ ...newRoom, available: e.target.value })}
                  className="w-full p-2 mt-1 border border-gray-500 rounded-md bg-white text-black"
                  required
                />
              </div>
              <button type="submit" className="mt-4 bg-black text-white px-4 py-2 rounded-lg">
                Add Room
              </button>
            </form>
          </div>
        )}

        {/* Room Table */}
        <div className="mt-4">
          <h3 className="text-lg font-medium">Room Types</h3>
          <table className="min-w-full mt-4 border-collapse table-auto text-black">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Room Name</th>
                <th className="py-2 px-4 border-b text-left">Price</th>
                <th className="py-2 px-4 border-b text-left">Available</th>
                <th className="py-2 px-4 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {roomTypes.map((room) => (
                <tr key={room.id}>
                  <td className="py-2 px-4 border-b">{room.name}</td>
                  <td className="py-2 px-4 border-b">₹{room.price}</td>
                  <td className="py-2 px-4 border-b">{room.available}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleDeleteRoom(room.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
