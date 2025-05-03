import React from "react";

function SocialIcon({ id, path }) {
  const svgContent = `<svg id="${id}" layer-name="Frame" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="social-icon" style="width: 16px; height: 16px"> <path d="${path}" fill="white"></path> </svg>`;

  return (
    <a href="#" aria-label="Social media link">
      <div dangerouslySetInnerHTML={{ __html: svgContent }} />
    </a>
  );
}

export default SocialIcon;
