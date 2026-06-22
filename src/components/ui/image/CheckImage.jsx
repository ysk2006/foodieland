import React, { useState, useEffect } from "react";
import "./CheckImage.scss";

function CheckImage({
  src,
  alt = "Image",
  className = "",
  width,
  height,
  objectFit = "cover",
  fallbackSrc = "",
  fallbackText = "Изображение недоступно",
  showFallbackText = true,
  onError,
  onLoad,
  ...props
}) {
  const [imageExists, setImageExists] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setImageExists(true);
    setIsLoading(true);

    if (src) {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        setImageExists(true);
        setIsLoading(false);
        if (onLoad) onLoad();
      };

      img.onerror = () => {
        setImageExists(false);
        setIsLoading(false);
        if (onError) onError();
      };
    } else {
      setImageExists(false);
      setIsLoading(false);
    }
  }, [src, onError, onLoad]);

  const containerStyle = {
    width: width || "100%",
    height: height || "100%",
    ...props.style,
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: objectFit,
  };

  const containerClasses = `check-image-container ${className} ${
    !imageExists ? "check-image-container--fallback" : ""
  } ${isLoading ? "check-image-container--loading" : ""}`;

  return (
    <div className={containerClasses} style={containerStyle} {...props}>
      {isLoading && (
        <div className="check-image__loader">
          <div className="check-image__spinner"></div>
        </div>
      )}

      {imageExists && src ? (
        <img
          src={src}
          alt={alt}
          className="check-image"
          style={imageStyle}
          onError={() => {
            setImageExists(false);
            setIsLoading(false);
            if (onError) onError();
          }}
          onLoad={() => {
            setIsLoading(false);
            if (onLoad) onLoad();
          }}
        />
      ) : (
        <div className="check-image__fallback">
          {fallbackSrc ? (
            <img
              src={fallbackSrc}
              alt="Fallback"
              className="check-image__fallback-image"
              style={imageStyle}
            />
          ) : (
            <>
              <svg
                className="check-image__fallback-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              {showFallbackText && (
                <span className="check-image__fallback-text">
                  {fallbackText}
                </span>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default CheckImage;
