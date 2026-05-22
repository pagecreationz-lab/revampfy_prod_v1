"use client";

import { useMemo, useState } from "react";

type Store = {
  id: string;
  storeName: string;
  state: string;
  city: string;
  address: string;
  phone: string;
  pincode: string;
};

const staticStores: Store[] = [
  {
    id: "blr-1",
    storeName: "Revampfy Bengaluru",
    state: "Karnataka",
    city: "Bengaluru",
    address: "Koramangala",
    phone: "+91 90000 00001",
    pincode: "560034",
  },
  {
    id: "hyd-1",
    storeName: "Revampfy Hyderabad",
    state: "Telangana",
    city: "Hyderabad",
    address: "HITEC City",
    phone: "+91 90000 00002",
    pincode: "500081",
  },
  {
    id: "mum-1",
    storeName: "Revampfy Mumbai",
    state: "Maharashtra",
    city: "Mumbai",
    address: "Andheri East",
    phone: "+91 90000 00003",
    pincode: "400069",
  },
];

export function StateStoreLocator() {
  const [state, setState] = useState("");

  const states = useMemo(
    () => Array.from(new Set(staticStores.map((store) => store.state))).sort((a, b) => a.localeCompare(b)),
    []
  );

  const filtered = useMemo(
    () => staticStores.filter((store) => !state || store.state.toLowerCase() === state.toLowerCase()),
    [state]
  );

  return (
    <section className="container" style={{ padding: "1rem" }}>
      <div className="admin__panel">
        <h2>State-Based Store Locator</h2>
        <p className="hero__subtext">Find store locations by state.</p>
        <div style={{ maxWidth: 360, marginBottom: "1rem" }}>
          <select value={state} onChange={(e) => setState(e.target.value)}>
            <option value="">All states</option>
            {states.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="admin__grid admin__grid--four">
          {filtered.map((store) => (
            <article key={store.id} className="admin__card">
              <h3>{store.storeName}</h3>
              <p>{store.city}, {store.state} - {store.pincode}</p>
              <p>{store.address}</p>
              <p>{store.phone}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
