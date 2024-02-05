import { HomeSlider, HomeAboutUs, HomeDestinations, HomeActivities, HomePackages } from "../components"
const Home = () => {
  return (
    <>
      <section className="slider-container">
        <HomePackages />
        <HomeSlider />
      </section>
      <section className="container">
        <HomeAboutUs />
        <HomeDestinations />
        {/* <HomePackages /> */}
        {/* <HomeActivities/> */}
      </section>
    </>
  )
}
export default Home