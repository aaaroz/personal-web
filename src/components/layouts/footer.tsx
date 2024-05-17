import * as React from "react";

export const Footer = (): React.ReactElement => {
  return (
    <footer className="flex flex-col justify-end items-start">
      <div className="group-[[data-collapsed=true]]:space-x-1 space-x-2 text-sm">
        <span>©</span>
        <span>{new Date().getFullYear()}</span>
      </div>
      <div className="group-[[data-collapsed=true]]:hidden space-x-1 text-sm">
        <span>Created</span>
        <span>by</span>
      </div>
      <div className="group-[[data-collapsed=true]]:hidden space-x-1 text-sm">
        <span>Ardiansyah</span>
        <span>A.K.A</span>
        <span>Zora</span>
      </div>
    </footer>
  );
};
