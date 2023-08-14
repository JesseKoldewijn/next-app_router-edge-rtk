"use client";

import { useEffect } from "react";

const PWA_Provider = ({
  children,
  isEnabled,
}: {
  children: React.ReactNode;
  isEnabled: boolean;
}) => {
  useEffect(() => {
    if (!isEnabled) return;
    const navigator = window.navigator;
    if (navigator && navigator.serviceWorker) {
      navigator.serviceWorker.register("/sw-pwa.js").catch((err) => {
        if (!String(err).includes("bad-precaching-response")) console.log(err);
      });
    }
  });
  return <>{children}</>;
};

export default PWA_Provider;
