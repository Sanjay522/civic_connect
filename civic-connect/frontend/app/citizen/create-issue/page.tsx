"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function LocationMarker({ setAddress, setPosition }: any) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);

      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      )
        .then((res) => res.json())
        .then((data) => {
          setAddress(data.display_name || `${lat}, ${lng}`);
        });
    },
  });
  return null;
}

export default function CreateIssuePage() {
  const [issueType, setIssueType] = useState("Road Infrastructure");
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [address, setAddress] = useState("");

  // Get Current Location
  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);

        fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        )
          .then((res) => res.json())
          .then((data) => {
            setAddress(data.display_name || `${latitude}, ${longitude}`);
          });
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div className="mb-6 flex items-center gap-2">
        <button
          onClick={() => window.history.back()}
          className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1"
        >
          ← Back to Dashboard
        </button>
        <h1 className="flex-1 text-center text-xl font-semibold text-gray-800">
          Report New Issue
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
              <span className="text-green-600 text-xl">📍</span>
              Select Issue Location
            </h2>
            <button
              onClick={handleCurrentLocation}
              className="text-sm px-3 py-1 bg-blue-500 text-white rounded-lg hover:opacity-90"
            >
              Use My Location
            </button>
          </div>

          <div className="w-full h-72 lg:h-96 rounded-lg overflow-hidden">
            <MapContainer
              center={position || [20.5937, 78.9629]} 
              zoom={13}
              style={{ width: "100%", height: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {position && <Marker position={position} icon={markerIcon} />}
              <LocationMarker setAddress={setAddress} setPosition={setPosition} />
            </MapContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="mb-5">
            <label className="block font-medium text-gray-700 mb-1">
              Issue Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your issue title"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="mb-5">
            <label className="block font-medium text-gray-700 mb-2">
              Issue Type <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Road Infrastructure",
                "Waste Management",
                "Environmental Issues",
                "Utilities & Infrastructure",
                "Public Safety",
                "Other",
              ].map((type) => (
                <label
                  key={type}
                  className={`flex items-center gap-2 p-2 border rounded-lg cursor-pointer transition ${
                    issueType === type
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    value={type}
                    checked={issueType === type}
                    onChange={(e) => setIssueType(e.target.value)}
                  />
                  <span className="text-gray-700 text-sm">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <label className="block font-medium text-gray-700 mb-1">
              Issue Location Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter or select location on map"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="mb-5">
            <label className="block font-medium text-gray-700 mb-1">
              Issue Description <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={3}
              placeholder="Describe the issue in detail..."
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            />
          </div>

          <div className="mb-6">
            <label className="block font-medium text-gray-700 mb-1">
              Upload Media
            </label>
            <input
              type="file"
              className="block w-full text-sm text-gray-600 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
            />
          </div>

          <button className="w-full py-2 rounded-lg bg-blue-500 text-white font-semibold shadow-md hover:opacity-90 transition">
            Submit Issue
          </button>
        </div>
      </div>
    </div>
  );
}
