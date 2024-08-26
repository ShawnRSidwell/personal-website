import {
  createContext,
  useContext,
  useEffect,
  ReactNode,
  useState,
} from "react";

interface MobileContextType {
  isMobile: boolean;
}

const MobileContext = createContext<MobileContextType | undefined>(undefined);

function MobileProvider({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 480);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 480);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MobileContext.Provider value={{ isMobile }}>
      {children}
    </MobileContext.Provider>
  );
}

function useMobile() {
  const context = useContext(MobileContext);
  if (context === undefined)
    throw new Error("MobileContext used outside of Provider");
  return context;
}

export { useMobile, MobileProvider };
