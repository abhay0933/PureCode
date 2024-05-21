import { createContext, useContext, useState, useMemo, useEffect } from "react";

//=============== useScrollEvent===================


const useScrollEvent = () => {
    const [scrollPassed, setScrollPassed] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(0);
  
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrollPassed(
        ((window.scrollY + window.innerHeight) * 100) / document.body.offsetHeight
      );
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });
      setScrollY(window.scrollY);
      setScrollHeight(document.body.offsetHeight);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return {
      scrollPassed,
      scrollY,
      scrollHeight,
    };
  };

// ================= Layout Context =================

const LayoutContext = createContext(undefined);

function useLayoutContext() {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error("useLayoutContext must be used within an LayoutProvider");
  }
  return context;
}


function LayoutProvider({ children }) {
  const INIT_STATE = {
    theme: "light",
  };

  const [settings, setSettings] = useState(INIT_STATE);

  const themeMode = settings.theme;

  // update settings
  const updateSettings = (_newSettings) => {
    setSettings({ ...settings, ..._newSettings });
  };

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    if (themeMode == "dark") html.classList.add("dark");
    else html.classList.remove("dark");
  }, [themeMode]);

  const updateTheme = (newTheme) => {
    updateSettings({ ...settings, theme: newTheme });
  };

  const resetSettings = () => {
    setSettings(INIT_STATE);
  };

  return (
    <LayoutContext.Provider
      value={useMemo(
        () => ({
          settings,
          themeMode,
          updateTheme,
          resetSettings,
        }),
        [settings, themeMode]
      )}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export { useLayoutContext, LayoutProvider, useScrollEvent };
