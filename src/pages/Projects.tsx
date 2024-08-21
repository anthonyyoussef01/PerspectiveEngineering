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
      const paths = await Promise.all(
        Object.keys(images).map(async (path) => {
          const module = await images[path]() as { default: string };
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
          slides={imagePaths.map(src => ({ src }))}
          index={currentImageIndex} // Pass the current image index to Lightbox
        />
      )}
    </div>
  );
};

export default Projects;