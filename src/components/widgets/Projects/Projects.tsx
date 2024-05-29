import "./Projects.css"
import ColWork from "../../ui/ColWork/ColWork";
import Layout from "../../Layout/Layout";
import Title from "@/components/ui/Typography/Title/Title";
import { enum_works } from '../../../types/works';

const Projects = () => {
    return (
        <Layout id="projects">
            <div className="title_section flex flex-col gap-3">
                <Title>Наши последние проекты</Title>
                <p className="font-inter font-normal text-[17px] max-sm:text-base max-[360px]:text-sm text-[#4D4D4D]">Чтобы <span className='font-semibold text-[#624AFF] relative'>просмотреть</span> все работы <span className='font-semibold text-[#624AFF] relative'>свяжитесь</span> с нашим <span className='font-semibold text-[#624AFF] relative'>менеджером</span></p>
            </div>
                <div className='flex justify-between flex-wrap lg:flex-nowrap gap-5'>
                    {[0, 3, 6, 9].map((startIndex, index) => (
                        <ColWork key={index} startIndex={startIndex} enum_works={enum_works} />
                    ))}
                </div>
        </Layout>
    )
}

export default Projects;