import React, { useState } from "react";
import { getSingleImageUrl } from "@/helper/getImageUrl";

// Define the types for props
interface GalleryImageProps {
  className: string;
  src: string;
  alt: string;
}

interface GalleryModalProps {
  isOpen: boolean;
  onClick: () => void;
  name?: string;
  src: string;
}

interface GalleryProps {
  imgUrls: string[];
}

// Component for gallery image
const GalleryImage: React.FC<GalleryImageProps> = (props) => (
  <img
    className={props.className}
    src={getSingleImageUrl(props.src)}
    alt={props.alt}
  />
);

// Component for gallery modal
const GalleryModal: React.FC<GalleryModalProps> = (props) => {
  if (!props.isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={props.onClick}>
      <div className="modal-body">
        <a className="modal-close" href="#" onClick={props.onClick}>
          <span className="fa fa-times"></span>
        </a>
        <img src={getSingleImageUrl(props.src)} alt="Modal Image" />
      </div>
    </div>
  );
};

// Component for gallery
const Gallery: React.FC<GalleryProps> = ({ imgUrls }) => {
  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState("");

  const openModal = (url: string) => {
    setShowModal(true);
    setUrl(url);
  };

  const closeModal = () => {
    setShowModal(false);
    setUrl("");
  };

  return (
    <div className="container-fluid gallery-container">
      <div className="row">
        {imgUrls?.map((url, index) => (
          <div className="col-sm-12 col-md-6 col-xl-4" key={index}>
            <div className="gallery-card">
              <GalleryImage
                className="gallery-thumbnail"
                src={url}
                alt={`Image number ${index + 1}`}
              />
              <span
                className="card-icon-open fa fa-expand"
                onClick={() => openModal(url)}
              ></span>
            </div>
          </div>
        ))}
      </div>

      <GalleryModal isOpen={showModal} onClick={closeModal} src={url} />
    </div>
  );
};

export default Gallery;
