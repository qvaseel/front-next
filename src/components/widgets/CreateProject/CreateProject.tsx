import Image from "next/image";
import "./CreateProject.css"
import Layout from "../../Layout/Layout"
import Title from "@/components/ui/Typography/Title/Title";
import Form from '../../ordinary/Form/Form';
import back from "/public/images/form-bg.webp"



const CreateProject = () => {
    return (
        <Layout id="createProject">
            <div className="title_section flex flex-col gap-3">
        <Title>Готовы создать проект?</Title>
        <p className="font-inter font-normal text-[17px] max-sm:text-base max-[360px]:text-sm text-[#4D4D4D]">
          <span className="font-semibold text-[#624AFF] relative">
            Запишитесь
          </span>{" "}на онлайн встречу с нашим менеджером и получите оценку вашего проекта уже сегодня
        </p>
      </div>
            <div className="relative ">
                
                <div className='flex justify-between max-[900px]:gap-6 max-md:flex-col-reverse'>
                    <Form/>
                    <div className='flex flex-col gap-4'>
                        <p className='text-xl text-[#1F1F1F] max-md:text-lg'>Позвоним, чтобы <span className='font-bold'>обсудить детали</span></p>
                        <ul className="create_project_ul">
                            <li>Проведем анализ данной работы</li>
                            <li>Обсудим сроки на разработку</li>
                            <li>Определим цели и задачи проекта</li>
                        </ul>
                    </div>
                </div>
                <div className="absolute w-[1458px] right-0 bottom-0 -z-10 hidden lg:flex">
                    <Image className="w-full h-full object-contain" src={back} alt="back of form" />
                </div>
            </div>
            
        </Layout>
    )
}

export default CreateProject;