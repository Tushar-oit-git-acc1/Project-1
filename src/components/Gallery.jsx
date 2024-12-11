// Import React and CSS styles
import React from 'react';
import '../styles/gallery.css';

// Import images from src/assets/
import lalmahal from '../assets/lalmahal.jpg';
import vishrambaug from '../assets/vishrambaug.jpg';
import patal from '../assets/patal.jpg';
import shahid from '../assets/shahid.jpg';
import sinhgad from '../assets/sinhgad.jpg';
import mandir from '../assets/mandir.jpg';
import tamhini from '../assets/tamhini.jpg';
import bhimashankar from '../assets/bhimashankar.jpg';
import darshan from '../assets/darshan.jpg';
import iskcon from '../assets/iskcon.jpg';
import phinix from '../assets/phinix.jpg';
import balaji from '../assets/balaji.jpg';

// Array of local images with import paths
const localImages = [
    { src: lalmahal, alt: 'Lal Mahal' },
    { src: vishrambaug, alt: 'Vishrambaug Wada' },
    { src: patal, alt: 'Patal' },
    { src: shahid, alt: 'Shahid' },
    { src: sinhgad, alt: 'Sinhgad' },
    { src: mandir, alt: 'Mandir' },
    { src: tamhini, alt: 'Tamhini' },
    { src: bhimashankar, alt: 'Bhimashankar' },
    { src: darshan, alt: 'Darshan' },
    { src: iskcon, alt: 'ISKCON' },
    { src: phinix, alt: 'Phinix' },
    { src: balaji, alt: 'Balaji' },
];

// Array of public images from public/assets/
const publicImages = [
    '/assets/lalmahal.jpg',
    '/assets/vishrambaug.jpg',
    '/assets/sinhgad.jpg',
    '/assets/shahid.jpg',
    '/assets/patal.jpg',
    '/assets/mandir.jpg',
    '/assets/tamhini.jpg',
    '/assets/bhimashankar.jpg',
    '/assets/darshan.jpg',
    '/assets/iskcon.jpg',
    '/assets/phinix.jpg',
    '/assets/driver.jpg',
    '/assets/balaji.jpg',
    '/assets/umesh.jpg',
];

// Limit the number of images rendered (e.g., to 12 images)
const MAX_IMAGES = 12;

const Gallery = () => {
    return (
        <section id="gallery" className="gallery">
            <h2>Gallery</h2>
            <div className="gallery-images">
                {/* Render images imported from src/assets/ */}
                {localImages.slice(0, MAX_IMAGES).map((image, index) => (
                    <img
                        key={`local-${index}`}
                        src={image.src}
                        alt={image.alt}
                        className="gallery-image"
                    />
                ))}

                {/* Render images from public/assets/ */}
                {publicImages
                    .slice(0, MAX_IMAGES - localImages.length)
                    .map((image, index) => (
                        <img
                            key={`public-${index}`}
                            src={image}
                            alt={`Gallery Image ${index + 1}`}
                            className="gallery-image"
                        />
                    ))}
            </div>
        </section>
    );
};

export default Gallery;
