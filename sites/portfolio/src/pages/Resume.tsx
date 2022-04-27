import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import ResumeCard from 'src/components/ResumeCard';
import ResumeCardContent from 'src/components/ResumeCardContent';

const QualificationsList = [
  'Results-driven achiever',
  'Exemplary planning and organizational skills',
  'High degree of detail orientation',
  'Tactful, mature and flexible; self-starter',
  'Highly inquisitive, prefer investigative projects',
  'Excellent critical thinking and decision making abilities',
  'Excellent trouble-shooting and problem-solving skills ',
  'Fast Learner',
];

const TechnicalSkillsList = [
  [
    'SQL',
    'HTML5',
    'CSS3',
    'PHP',
    'Python',
    'C++',
    'Java',
    'jQuery',
    'C#',
    'ASP.NET Core MVC',
    'React',
    'Svelte',
  ],
  [
    'Windows XP/7/8/10',
    'Windows Server 2008R2/2012/2016/2019',
    'Active Directory Domain Services',
    'Routing and Remote Access',
    'Azure Active Directory',
    'Microsoft Graph',
    'Microsoft Intune',
    'OAUTH/SAML Single Sign on',
    'PCI Compliance Management',
  ],
  [
    'Microsoft Word',
    'PowerPoint',
    'Excel',
    'Access',
    'Outlook',
    'Teams',
    'Sharepoint',
    'OneDrive',
    'Exchange',
  ],
  ['Microsoft Azure', 'Netlify', 'Vercel', 'Azure App Service', 'Heroku'],
];

const CertificationsList = [
  'Cisco CCNA Certification',
  'CompTIA A+ Certification',
  'CompTIA Net+ Certification',
];

const EducationList = [
  'A.S. Degree in Information Technology/Network Design',
  'B.S. Degree in Computer Programming/Information Systems',
];

const Resume = () => (
  <Box p={2}>
    <Typography variant="h2">Resume</Typography>

    <Grid container spacing={2} alignItems="stretch">
      <Grid item md={4} xs={12}>
        <ResumeCard title="Qualifications">
          <ResumeCardContent items={QualificationsList} />
        </ResumeCard>
      </Grid>
      <Grid item md={4} xs={12}>
        <ResumeCard title="Programming Languages">
          <ResumeCardContent items={TechnicalSkillsList[0]} />
        </ResumeCard>
      </Grid>
      <Grid item md={4} xs={12}>
        <ResumeCard title="Systems Administration">
          <ResumeCardContent items={TechnicalSkillsList[1]} />
        </ResumeCard>
      </Grid>
      <Grid item md={4} xs={12}>
        <ResumeCard title="Office365 Administration">
          <ResumeCardContent items={TechnicalSkillsList[2]} />
        </ResumeCard>
      </Grid>
      <Grid item md={4} xs={12}>
        <ResumeCard title="Cloud Services">
          <ResumeCardContent items={TechnicalSkillsList[3]} />
        </ResumeCard>
      </Grid>
      <Grid item md={4} xs={12}>
        <ResumeCard title="Certifications">
          <ResumeCardContent items={CertificationsList} />
        </ResumeCard>
      </Grid>
      <Grid item md={4} xs={12}>
        <ResumeCard title="Education">
          <ResumeCardContent items={EducationList} />
        </ResumeCard>
      </Grid>
    </Grid>
  </Box>
);

export default Resume;
