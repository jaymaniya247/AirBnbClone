"use client";

import { useState, useEffect } from "react";

type ClientOnlyPropTypes = {
  children: React.ReactNode;
};

const ClientOnly: React.FC<ClientOnlyPropTypes> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
