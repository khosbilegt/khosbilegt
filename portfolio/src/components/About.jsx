import React from 'react';
import { Element } from 'react-scroll';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { radarData, aboutText } from '../constants';
import { Console } from './';
import styles from '../styles';

function About() {

  return (
    <Element name="about">
      <h1 className={`text-gray-300 text-[20px] font-light ${styles.paddingX}`}>
        About me
      </h1>
      <p className={`${styles.paddingX} text-gray-200`}>{aboutText[0]}</p>
      <Console />

      <p className={`${styles.paddingX} ${styles.paddingY}  text-gray-200`}>{aboutText[1]}</p>
      <ResponsiveContainer width="100%" height={300}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Tooltip />
              <Radar name="Score" dataKey="A" stroke="#115e59" fill="#5eead4" 
              fillOpacity={0.6} />
          </RadarChart>
      </ResponsiveContainer>
    </Element>
  );
}

export default About;