import React from "react";
import Menu, { MenuProps } from "@material-ui/core/Menu";

export default function BreadMenu(props: MenuProps) {
  return (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  );
} 