import CallUsRow from "../modules/Home Page Modules/CallUsRow";
import CommonMistakesRow from "../modules/Home Page Modules/CommonMistakesRow";
import FirstBanner from "../modules/Home Page Modules/FirstBanner";
import GrammersRow from "../modules/Home Page Modules/GrammersRow";
import PlacementTestRow from "../modules/Home Page Modules/PlacementTestRow";
import YoutubeRow from "../modules/Home Page Modules/YoutubeRow";

const HomePage = ({grammerCategories , commonMistakes}) => {
    return (
        <div>
            <FirstBanner />
            <GrammersRow grammerCategories={grammerCategories} />
            <PlacementTestRow />
            <CommonMistakesRow commonMistakes = {commonMistakes} />
            <YoutubeRow />
            <CallUsRow />
        </div>
    );
};

export default HomePage;