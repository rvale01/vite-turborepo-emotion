import { Button } from '@acme/core';
import { ThemeProvider, useTheme } from '@emotion/react';

const theme = {
  main: "#3D83DF",
  black: "#000000",
  blue: "#3D83DF",
  blueLight: "#EEF4FD",
  red: "#E74C3C",
  white: "#FFFFFF",
  gray100: "#F7F9FA",
  gray200: "#EDEFF2",
  gray300: "#DCDFE3",
  gray500: "#98A1AB",
  gray600: "#627282",
  gray900: "#1B2734",
  green: "#3fd071"
}
function Component() {
  const theme = useTheme();
  console.log(theme);

  // @ts-ignore
  return <Button>Main</Button>;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>
  );
}

export default App
