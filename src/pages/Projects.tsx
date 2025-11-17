import { useState, useEffect } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Dynamically import all images from the projects directory
const images = import.meta.glob('/src/assets/projects/*.{jpg,png,jpeg,gif}');

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagePaths, setImagePaths] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      // Define priority images in desired order
      const priorityImages = [
        'one-key-1.jpg',
        'one-key-2.jpg',
        'one-key-3.jpg',
        'st-george-1.jpg',
        'st-george-2.jpg',
        'st-george-3.jpg',
      ];

      const allKeys = Object.keys(images).sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
      );

      // Separate priority images (in priority order) and other images (in normal order)
      const prioritySortedKeys = allKeys.filter(key => {
        const fileName = key.split('/').pop() || '';
        return priorityImages.includes(fileName);
      }).sort((a, b) => {
        const fileA = a.split('/').pop() || '';
        const fileB = b.split('/').pop() || '';
        return priorityImages.indexOf(fileA) - priorityImages.indexOf(fileB);
      });

      const otherSortedKeys = allKeys.filter(key => {
        const fileName = key.split('/').pop() || '';
        return !priorityImages.includes(fileName);
      });

      const finalKeys = [...prioritySortedKeys, ...otherSortedKeys];

      const paths = await Promise.all(
        finalKeys.map(async (path) => {
          const module = (await images[path]()) as { default: string };
          return module.default;
        })
      );

      setImagePaths(paths);
    };

    loadImages();
  }, []);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="container py-24 sm:py-32">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Our Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {imagePaths.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Project ${index + 1}`}
            className="w-full h-auto cursor-pointer rounded-lg shadow-lg transition-all duration-500 hover:brightness-125"
            onClick={() => openModal(index)}
          />
        ))}
      </div>
      {modalIsOpen && (
        <Lightbox
          open={modalIsOpen}
          close={closeModal}
          slides={imagePaths.map((src) => ({ src }))}
          index={currentImageIndex} // Pass the current image index to Lightbox
        />
      )}
    </div>
  );
};

export default Projects;