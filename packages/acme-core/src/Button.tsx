import * as React from "react";
import { useTheme } from "@emotion/react"

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  const theme = useTheme()

  console.log(theme, 'eh')
  // @ts-ignore
  return <button style={{background: theme.main}}>{props.children}</button>;
}

Button.displayName = "Button";
