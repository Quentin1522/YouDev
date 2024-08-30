import React, { useState } from 'react';
import Cross from '../assets/circle-cross.svg';
import ArrowLeft from '../assets/chevron-left-solid.svg';
import ArrowRight from '../assets/chevron-right-solid.svg';

interface ItemDetails {
    id: string;
    title: string;
    cover: string;
    link: string;
    description: string;
    pictures?: string[];
}

const Carrousel: React.FC<{ pictures: string[] }> = ({ pictures }) => {
    const [currentImageIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className='carrouselWrapper'>
            <div className='imgContent'>
                <img className='arrowLeft' src={ArrowLeft} alt="Previous" onClick={goToPreviousSlide} />
                <img className='imgCarrousel' src={pictures[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
                <img className='arrowRight' src={ArrowRight} alt="Next" onClick={goToNextSlide} />
            </div>
        </div>
    );
};

const Modal: React.FC<{ item: ItemDetails; onClose: () => void }> = ({ item, onClose }) => {
    return (
        <div className='modal'>
            <div className='modalContent'>
                <div className='close' onClick={onClose}><img className='cross' src={Cross}/></div>
                <h2>{item.title}</h2>
                {item.pictures && item.pictures.length > 0 ? (
                    <>
                        {item.pictures.length === 1 ? (
                            <img src={item.pictures[0]} alt={item.title} />
                        ) : (
                            <Carrousel pictures={item.pictures} />
                        )}
                    </>
                ) : (
                    <img src={item.cover || 'default-image.png'} alt={item.title} />
                )}
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">Voir le projet</a>
            </div>
        </div>
    );
};

const Items: React.FC<{ data: ItemDetails[] }> = ({ data }) => {
    const [selectedItem, setSelectedItem] = useState<ItemDetails | null>(null);

    const openModal = (item: ItemDetails) => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    return (
        <div className='wrapperItems'>
            {data.map(item => (
                <div key={item.id} className='item-card' onClick={() => openModal(item)}>
                    <img src={item.cover || 'default-image.png'} alt={item.title} />
                    <h3>{item.title}</h3>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">Voir le projet</a>
                </div>
            ))}
            {selectedItem && <Modal item={selectedItem} onClose={closeModal} />}
        </div>
    );
};

export default Items;
