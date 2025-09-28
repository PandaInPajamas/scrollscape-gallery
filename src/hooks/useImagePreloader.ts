import { useEffect, useState } from 'react';

// Import all images that need to be preloaded
import sample1 from "@/assets/sample1.jpg";
import sample2 from "@/assets/2020_MORETHANVIZ_OPERA_15_HQ.jpg";
import sample3 from "@/assets/sample3.jpg";
import sample4 from "@/assets/sample4.jpg";
import sample5 from "@/assets/sample5.jpg";
import sample6 from "@/assets/sample6.jpg";
import bench1 from "@/assets/2020_MORETHANVIZ_BENCH_1_HQ.jpg";
import bench3 from "@/assets/2020_MORETHANVIZ_BENCH_3_HQ.jpg";
import opera01 from "@/assets/2020_MORETHANVIZ_OPERA_01_HQ.jpg";
import opera07 from "@/assets/2020_MORETHANVIZ_OPERA_07_HQ.jpg";
import opera09 from "@/assets/2020_MORETHANVIZ_OPERA_09_LQ.jpg";
import opera13 from "@/assets/2020_MORETHANVIZ_OPERA_13_HQ.jpg";
import opera18 from "@/assets/2020_MORETHANVIZ_OPERA_18_HQ.jpg";
import opera21 from "@/assets/2020_MORETHANVIZ_OPERA_21_HQ.jpg";
import sherbourne from "@/assets/2020_MORETHANVIZ_SHERBOURNE_2_LQ.jpg";
import treehouse from "@/assets/2020_MORETHANVIZ_TREEHOUSE_1_LQ.jpg";
import ch3 from "@/assets/2021_MORETHANVIZ_CH_3_LQ.jpg";
import musicianHouse1 from "@/assets/2021_MORETHANVIZ_MUSICIANHOUSE_HQ_1.jpg";
import musicianHouse2 from "@/assets/2021_MORETHANVIZ_MUSICIANHOUSE_HQ_2.jpg";
import cb2 from "@/assets/2022_MORETHANVIZ_CB_2_HQ.jpg";
import yaleBp from "@/assets/2023_MORETHANVIZ_YALEBP2023_1_LQ.jpg";
import yaleDsr from "@/assets/2023_MORETHANVIZ_YALE_DSR_13_LQ.jpg";
import studyAh from "@/assets/2024_MORETHANVIZ_STUDY_AH_01_HQ.png";
import gsdInt from "@/assets/2025_MORETHANVIZ_GSD_INT1.jpg";

const imageUrls = [
  sample1,
  sample2,
  sample3,
  sample4,
  sample5,
  sample6,
  bench1,
  bench3,
  opera01,
  opera07,
  opera09,
  opera13,
  opera18,
  opera21,
  sherbourne,
  treehouse,
  ch3,
  musicianHouse1,
  musicianHouse2,
  cb2,
  yaleBp,
  yaleDsr,
  studyAh,
  gsdInt,
];

export const useImagePreloader = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    let loadedImages = 0;
    const totalImages = imageUrls.length;

    const preloadImage = (src: string) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => {
          loadedImages++;
          setLoadedCount(loadedImages);
          if (loadedImages === totalImages) {
            setImagesLoaded(true);
          }
          resolve();
        };
        img.onerror = () => {
          loadedImages++;
          setLoadedCount(loadedImages);
          if (loadedImages === totalImages) {
            setImagesLoaded(true);
          }
          resolve();
        };
        img.src = src;
      });
    };

    // Preload all images
    Promise.all(imageUrls.map(preloadImage));

  }, []);

  return {
    imagesLoaded,
    loadedCount,
    totalImages: imageUrls.length,
    progress: Math.round((loadedCount / imageUrls.length) * 100)
  };
};