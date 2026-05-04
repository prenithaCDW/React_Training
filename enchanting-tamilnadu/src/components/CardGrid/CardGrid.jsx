import Card from "../Card/Card.jsx";
import { images } from "../../constants/image.js";
import { normalizeKey } from "../../utils/stringLower.js";
import styles from "./CardGrid.module.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const CardGrid = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.cardGrid}>
      {data.map((item) => {
        const imageKey = normalizeKey(item.city);
        const imageSrc = images[imageKey];

        return (
          <Card
            key={item.city}
            imageSrc={imageSrc}
            place={item.place}
            city={item.city}
            description={item.shortDescription}
            onReadMore={() =>
              navigate(`/destination/${item.city}`)
            }
          />
        );
      })}
    </div>
  );
};
CardGrid.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
      shortDescription: PropTypes.string,
    })
  ).isRequired,
};
export default CardGrid;