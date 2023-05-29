import { Button } from '@acme/core';
import { ThemeProvider, useTheme } from '@emotion/react';

const theme = {
  main: "#3D83DF",
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
