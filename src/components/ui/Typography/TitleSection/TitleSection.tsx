import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";

interface ITitleSection {
  textTitle: React.ReactNode;
  textSubTitle: string;
}

const TitleSection = ({textTitle, textSubTitle}: ITitleSection) => {
  return (
      <div className="title_section flex flex-col gap-3">
          <Title>{textTitle}</Title>
          <SubTitle>{textSubTitle}</SubTitle>
      </div>
  )
}

export default TitleSection;