import React from 'react';
import { Typography, Box, List, ListItem, Link } from '@mui/material';

const courses = [
  {
    code: "CS201",
    name: "DSA",
    project: "https://github.com/yourusername/theory-of-computation-project",
    materials: ["lecture-slides.md", "textbook.md"]
  },
  {
    code: "CS202",
    name: "Machine Learning",
    project: "https://github.com/yourusername/software-tools-project",
    materials: ["lecture-slides.md", "assignments.md"]
  },
  {
    code: "CS301",
    name: "Operating Systems",
    project: "https://github.com/yourusername/operating-systems-project",
    materials: ["lecture-videos.md", "textbook.md"]
  },
  {
    code: "CS303",
    name: "Databases",
    project: "https://github.com/yourusername/math-foundations-ai-project",
    materials: ["lecture-slides.md", "assignments.md"]
  },
  {
    code: "CS327",
    name: "Compilers",
    project: "https://github.com/yourusername/compilers-project",
    materials: ["lecture-slides.md", "practice-materials.md"]
  },
  {
    code: "CS328",
    name: "Introduction to Data Science",
    project: "https://github.com/yourusername/data-science-project",
    materials: ["lecture-slides.md", "assignments.md"]
  },
  {
    code: "CS331",
    name: "Computer Networks",
    project: "https://github.com/yourusername/computer-networks-project",
    materials: ["lecture-slides.md", "assignments.md"]
  },  
  {
    code: "CS431",
    name: "Computer and Network Security",
    project: "https://github.com/yourusername/network-security-project",
    materials: ["lecture-slides.md", "assignments.md"]
  },
  {
    code: "CS327",
    name: "Discrete Mathematics",
    project: "https://github.com/yourusername/compilers-project",
    materials: ["lecture-slides.md", "practice-materials.md"]
  },
  {
    code: "CS329",
    name: "Theory of computing",
    project: "https://github.com/yourusername/multiagent-systems-project",
    materials: ["lecture-slides.md", "assignments.md"]
  }

];

const IITGN = () => (
  <Box>
    <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "16px" }}>
      IITGN
    </Typography>
    <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: "16px" }}>
      CS Courses and Projects
    </Typography>
    <List>
      {courses.map((course, index) => (
        <ListItem key={index} sx={{ flexDirection: 'column', alignItems: 'flex-start', marginBottom: '16px' }}>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            {course.code}: {course.name}
          </Typography>
          <Typography variant="body2">
            Project: <Link href={course.project} target="_blank" rel="noopener" sx={{ textDecoration: 'none', color: 'primary.main' }}>Link to Project</Link>
          </Typography>
          <Typography variant="body2">
            Useful Materials: {course.materials.map((material, idx) => (
              <React.Fragment key={idx}>
                <Link href={`/${material}`} target="_blank" rel="noopener" sx={{ textDecoration: 'none', color: 'primary.main' }}>
                  {material.split('.')[0]}
                </Link>{idx < course.materials.length - 1 && ', '}
              </React.Fragment>
            ))}
          </Typography>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default IITGN;
