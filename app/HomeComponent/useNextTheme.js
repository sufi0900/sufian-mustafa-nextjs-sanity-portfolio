import { useTheme } from "next-themes";

const useNextTheme = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const currentTheme = theme ?? resolvedTheme;

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return {
    theme: currentTheme,
    toggleTheme,
  };
};

export default useNextTheme;
