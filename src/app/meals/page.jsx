import styles from './styles.module.css'
import Meals from "@/Components/Meals";

const MealsPage = () => {
    return (
        <div className="p-12">
            <h2 className={styles.text_color}>Choose your meals</h2>
            <p>Choose meals of your coise by searching....</p>
            <Meals />
        </div>
    );
};

export default MealsPage;