"use client";
import Header from "../components/widgets/Header/Header";
import Advantages from "../components/widgets/Advantages/Advantages";
import VideoPlayer from "../components/widgets/VideoPlayer/VideoPlayer";
import Liders from "../components/widgets/Liders/Liders";
import Directions from "../components/widgets/Directions/Directions";
import Projects from "../components/widgets/Projects/Projects";
import RunningLine from "../components/widgets/RunningLine/RunningLine";
import Awards from "../components/widgets/Awards/Awards";
import CreateProject from "../components/widgets/CreateProject/CreateProject";
import Footer from "../components/widgets/Footer/Footer";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <main className="flex flex-col gap-[120px]">
      <Header />
      <Advantages />
      <Layout id="video">
      <VideoPlayer sec="51" />
      </Layout>
      <Liders />
      <Directions />
      <Projects />
      <RunningLine />
      <Awards />
      <CreateProject />
      <Footer />
    </main>
  );
}
