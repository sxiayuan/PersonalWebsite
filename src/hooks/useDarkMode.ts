// Hook for managing dark/light mode
// Currently set to dark mode by default per the context
// Can be extended to toggle between modes

export const useDarkMode = () => {
  const isDarkMode = true; // Always dark per design spec

  return {
    isDarkMode,
    // Future: add toggle functionality when needed
  };
};
