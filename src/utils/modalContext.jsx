"use client";

import { createContext, useContext, useState, useEffect } from "react";

import { Modal } from "@/components/Modal/page";

const ModalContext = createContext();

export default function ModalContextProvider({ children, data = null }) {
  const [modal, setModal] = useState({ active: false, index: 0 });

  const value = { modal, setModal };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {data && <Modal modal={modal} projects={data} />}
    </ModalContext.Provider>
  );
}

export function ModalToggle({ children, toggle }) {
  const { modal, setModal } = useContext(ModalContext);

  useEffect(() => {
    setModal(() => toggle);
  }, [toggle]);

  return children;
}
