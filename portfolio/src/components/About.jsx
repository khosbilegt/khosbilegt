import React from 'react';
import { radarData } from '../constants';
import { Element } from 'react-scroll';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

function About() {

  return (
    <Element name="about">
          <ResponsiveContainer width="100%" height={300}>
               <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Tooltip />
                    <Radar name="Khosoo" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
               </RadarChart>
          </ResponsiveContainer>
    </Element>
  );
}

export default About;