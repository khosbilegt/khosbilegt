import React from 'react';
import { Element } from 'react-scroll';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { radarData, aboutText } from '../constants';
import styles from '../styles';

function About() {

  return (
    <Element name="about">
      <h1 className={`text-gray-300 text-[20px] font-light ${styles.paddingX}`}>
        About me
      </h1>
      <p className={`${styles.paddingX} text-gray-200 mb-[10px] mt-[5px]`}>{aboutText[0]}</p>
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
      <p className={`${styles.paddingX} text-gray-200 mb-[10px] mt-[5px]`}>{aboutText[1]}</p>
      <img src="https://i.imgur.com/VIRQNya.png" className={`w-full ${styles.paddingX} mb-[20px]`} alt=""/>
    </Element>
  );
}

export default About;