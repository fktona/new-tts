"use client";
import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  use,
} from "react";

interface AppState {
  home: boolean;
  about: boolean;
  talk: boolean;
  token: boolean;
}

interface AppContextProps {
  state: AppState;
  toggleState: (key: keyof AppState) => void;
  show: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

export const AppContext = createContext<AppContextProps>({
  show: false,
  state: {
    home: true,
    about: false,
    talk: false,
    token: false,
  },
  toggleState: () => {},
  handleMouseEnter: () => {},
  handleMouseLeave: () => {},
});

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState({
    home: true,
    about: false,
    talk: false,
    token: false,
  });

  const audio1ref = useRef<HTMLAudioElement>(null);
  const audio2ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Set the maximum volume to 50% when the components mount
    if (audio1ref.current) {
      audio1ref.current.volume = 0.5;
    }
    if (audio2ref.current) {
      audio2ref.current.volume = 0.5;
    }
  }, []);

  const [show, setShow] = useState(false);
  useEffect(() => {
    state.home ? setShow(false) : setShow(true);
  }, [state]);
  const toggleState = (key: keyof AppState) => {
    if (audio2ref.current) {
      audio2ref.current.play();
    }

    console.log(state);
    setState({
      home: false,
      about: false,
      talk: false,
      token: false,
      [key]: true, // Ensure only the clicked state is true
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      audio1ref.current?.play();
    } else {
      audio1ref.current?.pause();
    }
    if (audio1ref.current) {
      audio1ref.current.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <AppContext.Provider
      value={{ state, toggleState, show, handleMouseEnter, handleMouseLeave }}
    >
      <audio ref={audio1ref} src="/audio1.mp3" />

      <audio ref={audio2ref} src="/audio2.mp3" />
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};
