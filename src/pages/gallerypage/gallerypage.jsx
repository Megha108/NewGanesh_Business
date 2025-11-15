import React from "react";
import Gallery3D from "./gallery3d.jsx";

export default function Gallerypage() {
  return (
    <div className="pt-20"> {/* offset for fixed navbar */}
      <Gallery3D />
    </div>
  );
}
