import Header from "../../components/Header/Header.jsx";
import Promo from "../../components/Promo/Promo.jsx";
import SubHeading from "../../components/Subheading/SubHeading.jsx";
import Form from "../../components/Form/Form.jsx";
import CardGrid from '../../components/CardGrid/CardGrid.jsx';
import { useAllPlaces } from "../../hooks/useAllPlace.js";
import { SUB_HEADING } from "../../constants/subHeading.js";
import styles from "./Home.module.css";

const Home = () => {
    const { data } = useAllPlaces();
    return (
        <>
            {/* header */}
            <Header />

            {/* promo */}
            <Promo places={data.map(item => item.city)} />

            {/* subheading */}
            <section className={styles.subHeadingContainer}>
                <SubHeading heading={SUB_HEADING.promo.heading} content={SUB_HEADING.promo.content} />
            </section>

            {/* card */}
            <section className={styles.cardContainer}>
                <CardGrid data={data} />
            </section>

            {/* form */}
            <Form places={data.map(item => item.city)} />
        </>
    )
}

export default Home;