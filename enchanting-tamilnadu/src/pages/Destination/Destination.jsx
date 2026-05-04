import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import Form from "../../components/Form/Form.jsx";
import CardGrid from "../../components/CardGrid/CardGrid.jsx";
import FallbackImage from "../../components/FallbackImage/FallbackImage.jsx";
import { useAllPlaces } from "../../hooks/useAllPlace.js";
import { useSinglePlace } from "../../hooks/useSinglePlace.js";
import { images } from "../../constants/image.js";
import { normalizeKey } from "../../utils/stringLower.js";
import { SUB_HEADING } from "../../constants/subHeading.js";
import styles from "./Destination.module.css";


const Destination = () => {
  const { placeId } = useParams();
  const normalizedPlaceId = normalizeKey(placeId);
  const { data: allData } = useAllPlaces();
  const placeData = useSinglePlace(normalizedPlaceId);

  if (!placeData) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  const imageSrc = images[normalizedPlaceId];
  const splitPara = placeData.fullDescription.replace(/\\n/g, "\n").split("\n");
  const relatedPlacesData = allData.filter(item => placeData.relatedPlaces.includes(item.city));

  return (
    <>
      {/* header */}
      <Header />

      {/* promo */}
      <section className={styles.destinationContainer}>
        <div className={styles.destinationLeft}>
          <h1 className={styles.destinationCity}>{placeData.city}</h1>
          <h2 className={styles.destinationPlace}>{placeData.place}</h2>
          <p className={styles.destinationTemp}> 32<span>°</span>C</p>
        </div>

        <div className={styles.destinationRight}>
          <figure className={styles.destinationImageWrapper}>
            <FallbackImage src={imageSrc} alt={placeData.city} className={styles.destinationImage} />
          </figure>
        </div>
      </section>

      {/* content */}
      <section className={styles.destinationContentContainer}>
        {splitPara.map((paragraph, index) => (
          <p key={index} className={styles.destinationPara}>{paragraph}</p>
        ))}
      </section>

      {/* sub heading */}
      <section className={styles.destinationHeadingContainer}>
                        <h2 className={styles.subHeadingHeader}>{SUB_HEADING.destination.heading} </h2>
                <p className={styles.subHeadingContent}>{`${SUB_HEADING.destination.content} ${placeId}`} </p>
      </section>

      {/* grid */}
      <section className={styles.destinationRelatedPlacesContainer} >
        <CardGrid data={relatedPlacesData} />
      </section>

      {/* form */}
      <Form places={allData.map(item => item.city)} />
    </>
  );
};

export default Destination;