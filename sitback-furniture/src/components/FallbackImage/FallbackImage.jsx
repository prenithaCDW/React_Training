import React, { useState } from 'react';
import fallbackimage from "../../assets/fallback.png";

const FallbackImage = ({ src, alt, className }) => {
    const [imageSrc, setImageSrc] = useState(src);
    const handleError = () => {
        setImageSrc(fallbackimage);
    }
    return (
        <img src={imageSrc} alt={"image"} className={className} onError={handleError} />
    )
}

export default FallbackImage;