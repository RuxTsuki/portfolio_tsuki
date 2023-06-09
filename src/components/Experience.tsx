import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../style';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motions';

export const ExperienceCard = ({ experience }: any) => {
  return (
    <VerticalTimelineElement contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.icon }}
      icon={
        <div className='flex justify-center items-center w-full h-full rounded-full overflow-hidden'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="object-contain" />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>
          {experience.title}
        </h3>

        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
          {
            experience.company_name
          }
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {
          experience.points.map((point: number, index: number) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {
                point
              }
            </li>
          ))
        }
      </ul>

    </VerticalTimelineElement>
  )
}
/* What i have done so far */
/* Work Experience. */
export const Experience = () => {
  return (
    <>
      <motion.div className='pt-8' variants={textVariant('')}>
        <p className={`${styles.sectionSubText}`}>Lo que he hecho hasta ahora</p>
        <h2 className={`${styles.sectionHeadText}`}>Experiencia 💼</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {
            experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience}></ExperienceCard>
            ))
          }
        </VerticalTimeline>
      </div>
    </>
  )
}

export const ExperienceMotion = SectionWrapper(Experience, 'exp');

