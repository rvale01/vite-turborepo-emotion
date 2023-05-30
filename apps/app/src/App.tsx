import React, { useRef } from "react"
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
  const iframeRef = useRef(null);

  //TODO: postMessage => provare con * => controllare se in termini di sicurezza e' meno sicuro o meno.
  const sendMessage = () => {
    iframeRef.current.contentWindow.postMessage('ciao ciao bambinaaaaa lalala....', 'http://localhost/mop/index.php?dbName=tt_istanza_1#login');
  }
  return (
    <ThemeProvider theme={theme}>
      <Component />
      <button onClick={sendMessage}>Send Message</button>
      <iframe ref={iframeRef} src="http://localhost/mop/index.php?dbName=tt_istanza_1#login" title="Iframe Example"></iframe>
    </ThemeProvider>
  );
}

export default App
