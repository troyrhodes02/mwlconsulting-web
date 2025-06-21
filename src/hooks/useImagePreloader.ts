import { useState, useEffect } from 'react';

const useImagePreloader = (imageUrls: string[]) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (!imageUrls.length) {
      setImagesLoaded(true);
      return;
    }

    let loadedImages = 0;
    const totalImages = imageUrls.length;

    const preloadImage = (url: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          loadedImages++;
          if (loadedImages === totalImages) {
            setImagesLoaded(true);
          }
          resolve(url);
        };
        img.onerror = () => {
          loadedImages++;
          if (loadedImages === totalImages) {
            setImagesLoaded(true);
          }
          reject(url);
        };
      });
    };

    Promise.all(imageUrls.map((url) => preloadImage(url))).catch((error) => {
      console.error('Error preloading images:', error);
      setImagesLoaded(true); // Continue showing content even if some images fail to load
    });

    return () => {
      // Cleanup if component unmounts
      setImagesLoaded(false);
    };
  }, [imageUrls]);

  return imagesLoaded;
};

export default useImagePreloader;
