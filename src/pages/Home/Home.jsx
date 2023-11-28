import Banner from "./Banner";
import HealthNutritionSection from "./HealthNutritionSection";
import MealsByCategory from "./MealsByCategory";
import MembershipSection from "./MembershipSection";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MealsByCategory></MealsByCategory>
            <MembershipSection></MembershipSection>
            <HealthNutritionSection></HealthNutritionSection>
            
        </div>
    );
};

export default Home;