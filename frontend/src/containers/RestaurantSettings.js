import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

function RestaurantSettings() {
  const user = useSelector((state) => state.auth.user);
  // Change name state
  const [name, setName] = useState(user.user.name);
  // Change phone Number state
  const [phoneNumber, setPhoneNumber] = useState(user.user.phoneNumber);
  // Change Address
  const [address, setAddress] = useState(user.user.address);
  return (
    <div className="container mx-auto px-4 py-8">
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <h1 className="text-3xl font-bold mb-8">Edit Profile</h1>

      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <ul className="list-disc list-inside">
            <li>
              <span className="font-semibold">Name:</span>{" "}
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </li>
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href={`mailto:${user.user.email}`}
                className="text-blue-600 hover:underline"
              >
                {user.user.email}
              </a>
            </li>
            <li>
              <span className="font-semibold">Phone:</span>{" "}
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="form-control"
              />
            </li>
            <li>
              <span className="font-semibold">Address:</span>{" "}
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
              />
            </li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-xl font-bold mb-4">Account Information</h2>
          <ul className="list-disc list-inside">
            <li>
              <span className="font-semibold">Username:</span>{" "}
              {user.user.username}
            </li>
            <li>
              <span className="font-semibold">Password:</span> *****
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RestaurantSettings;
