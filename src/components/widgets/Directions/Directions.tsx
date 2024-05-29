import Layout from "../../Layout/Layout";
import Title from "@/components/ui/Typography/Title/Title";
import CardsDir from "@/components/ordinary/CardsDir/CardsDir";
import BlocksDir from "@/components/ordinary/BlocksDir/BlocksDir";

const Directions = () => {
  return (
    <Layout id="directions">
      <div className="title_section flex flex-col gap-3">
        <Title>Наши направления</Title>
        <p className="font-inter font-normal text-[17px] max-sm:text-base max-[360px]:text-sm text-[#4D4D4D]">
          Работаем на серверах заказчика и оказываем услуги{" "}
          <span className="font-semibold text-[#624AFF] relative">
            полноценной подготовки
          </span>
          <br /> проекта, соответствующего{" "}
          <span className="font-semibold text-[#624AFF] relative">
            всем критериям
          </span>{" "}
          нативной программной разработки
        </p>
      </div>
      <CardsDir />
      <BlocksDir />
    </Layout>
  );
};

export default Directions;
