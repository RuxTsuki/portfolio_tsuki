
import { motion } from 'framer-motion';
import { styles } from '../style';
import { techSkills } from '../constants';
import { CommonCard } from './CommonCard';
import { SectionWrapper } from '../hoc';

export const Tech = () => {
  return (
    < >
      <motion.div className='pt-3'>
        <p className={`${styles.sectionSubText}`}>Mi stack Front-end</p>
        <h2 className={`${styles.sectionHeadText}`}>Tecnologías 🪄</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {techSkills.map((service, index) => (
          <CommonCard
            key={service.title}
            index={index}
            subtitle={service.subtitle}
            title={service.title}
            Icon={service.icon} />
        ))}
      </div>

    </>
  )
}


export const TechMotion = SectionWrapper(Tech, 'tech');
