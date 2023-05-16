import { Contact, Feedbacks, Hero, Loader, Navbar, Stars, WorksMotion, AboutMotion, ExperienceMotion, TechMotion } from './components';
import { SidebarContact } from './components/SidebarContact';

export default function App() {
  return (
    <div className='relative z-0 bg-primary'>
      <SidebarContact />

      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>

      <AboutMotion />
      <TechMotion />
      <ExperienceMotion />
      <WorksMotion />
      <Contact />

      <footer className='relative z-0'>
        <Contact />
      </footer>

    </div>
  )
}
