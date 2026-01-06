'use client';

import { createContext, useContext, useState } from 'react';
import AppointmentModal from './AppointmentModal';

const ModalContext = createContext<{ open: () => void }>({
  open: () => {},
});

export const useModal = () => useContext(ModalContext);

export default function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <AppointmentModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ModalContext.Provider>
  );
}
