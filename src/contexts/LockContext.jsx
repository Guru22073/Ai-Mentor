import React, { createContext, useContext, useState, useEffect } from 'react';

const LockContext = createContext();

export const useLock = () => {
  const context = useContext(LockContext);
  if (!context) {
    throw new Error('useLock must be used within a LockProvider');
  }
  return context;
};

export const LockProvider = ({ children }) => {
  const [isLocked, setIsLocked] = useState(false);
  const [windowId, setWindowId] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const isDetached = urlParams.get('detached') === 'true';
    const storedWindowId = urlParams.get('windowId');
    
    if (isDetached) {
      setIsLocked(true);
      setWindowId(storedWindowId);
    }

    if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.local.get(['isLocked'], (result) => {
        if (result.isLocked && !isDetached) {
          setIsLocked(result.isLocked);
        }
      });
    }
  }, []);

  const toggleLock = async () => {
    if (!isLocked) {
      await lockExtension();
    } else {
      await unlockExtension();
    }
  };

  const lockExtension = async () => {
    try {
      const currentWindow = await chrome.windows.getCurrent();
      const currentTab = await chrome.tabs.query({ active: true, currentWindow: true });
      
      await chrome.storage.local.set({ 
        isLocked: true,
        originalTabId: currentTab[0]?.id 
      });

      const newWindow = await chrome.windows.create({
        url: chrome.runtime.getURL(`index.html?detached=true&windowId=${Date.now()}`),
        type: 'popup',
        width: 600,
        height: 500,
        focused: true
      });

      setWindowId(newWindow.id);
      setIsLocked(true);

      if (window.location.search === '') {
        window.close();
      }
    } catch (error) {
      console.error('Failed to lock extension:', error);
    }
  };

  const unlockExtension = async () => {
    try {
      await chrome.storage.local.set({ isLocked: false });
      
      if (windowId) {
        await chrome.windows.remove(windowId);
      }
      
      setIsLocked(false);
      setWindowId(null);

      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('detached') === 'true') {
        window.close();
      }
    } catch (error) {
      console.error('Failed to unlock extension:', error);
    }
  };

  const value = {
    isLocked,
    toggleLock,
    windowId
  };

  return (
    <LockContext.Provider value={value}>
      {children}
    </LockContext.Provider>
  );
};
