import DOMPurify from 'dompurify';
import Layout from "../../Layout/Layout"
import Title from "../../ui/Typography/Title/Title"
import LidersCard from "../../ui/LidersCard/LidersCard"
import {enum_liders} from "../../../types/liders"


const Liders = () => {
    return (
        <Layout id='liders'>
            <Title>Наши лидеры</Title>
            <div className="flex flex-wrap justify-around gap-x-36 gap-y-12 ">
                {enum_liders.map((item) => (
                    <LidersCard
                        key={item.id}
                        img={item.img}
                        name={item.name}
                        lastname={item.lastname}
                        position={item.position}
                        position2={item.position2}
                    />
                ))}
            </div>
        </Layout>
    )
}

export default Liders