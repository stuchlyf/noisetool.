"use client";
import React, { useCallback, useEffect, useState } from "react";
import { type BeforeInstallPromptEvent } from "@/types/BeforeInstallPromptEvent";

export const InstallButton: React.FC = () => {
  const [beforeInstallPrompt, setBeforeInstallPrompt] = useState<BeforeInstallPromptEvent>();

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      if (e.type === 'beforeinstallprompt') {
        const event = e as BeforeInstallPromptEvent;
        setBeforeInstallPrompt(event);
      }
    })
  }, []);

  const handleInstallButtonClick = useCallback(() => {
    if (beforeInstallPrompt) {
      beforeInstallPrompt.prompt()
        .then(() => {
          console.debug('User accepted the install prompt');
        })
        .catch(e => console.error(e));
    }
  }, [beforeInstallPrompt])

  return (
    <button
      onClick={handleInstallButtonClick}
      className={`btn ${!beforeInstallPrompt ? 'btn-disabled' : ''}`}
      disabled={!beforeInstallPrompt}
    >
      Install
    </button>
  )
}