import Accordion from '../../components/Accordion/Accordion'
import Banner from '../../components/Banner/Banner'
import SliderC from '../../components/Slider/SliderC'

export default function Start () {
    return(
        <>
            <Banner/>
            <SliderC/>
            <Accordion title="Вопрос 1" content="пвпав волвпиолваиоав ваипваолипаволав" />
            <Accordion title="Вопрос 2" content="пыпаапв вваолвп ваотоавлтвлп" />
            <Accordion title="Вопрос 3" content="Статья оыктплтаволтол оатолвптлпв" />
        </>
    )
}