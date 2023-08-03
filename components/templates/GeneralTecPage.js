import FirstBanner from "../modules/GeneralTecPage/FirstBanner";
import TeachesRow from "../modules/GeneralTecPage/TeachesRow";

const GeneralTecPage = ({generalTecs}) => {
    return (
        <div>
            <FirstBanner />
            <TeachesRow generalTecs={generalTecs} />
        </div>
    );
};

export default GeneralTecPage;

