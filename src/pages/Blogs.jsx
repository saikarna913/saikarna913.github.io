import React from 'react';
import { Container, Typography, Box, Paper, Link, Grid } from '@mui/material';

const blogs = [
  {
    title: "My Open-Source Journey",
    date: "December 27, 2024",
    content: "Embarking on my open-source journey has been a transformative experience. From my first contribution to lfortran to the latest PR merged in matplotlib, I've learned and grown tremendously. Here are some of my significant contributions:",
    links: [
      { label: "Merged PR in lfortran", url: "https://github.com/lfortran/lfortran/pulls?q=is%3Apr+is%3Amerged+author%3Asaikarna913" },
      { label: "Merged PR in matplotlib", url: "https://github.com/matplotlib/matplotlib/pulls?q=is%3Apr+is%3Amerged+author%3Asaikarna913" }
    ]
  }
];

const Blogs = () => (
  <Container maxWidth="md" sx={{ marginTop: '32px' }}>
    <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "16px" }}>
      Blog
    </Typography>
    {blogs.map((blog, index) => (
      <Paper elevation={3} sx={{ padding: '24px', marginBottom: '24px' }} key={index}>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
          {blog.title}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'text.secondary', marginBottom: '16px' }}>
          {blog.date}
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: "1.8", marginBottom: '16px' }}>
          {blog.content}
        </Typography>
        <Grid container spacing={1}>
          {blog.links.map((link, idx) => (
            <Grid item key={idx}>
              <Link href={link.url} target="_blank" rel="noopener" sx={{ textDecoration: 'none', color: 'primary.main' }}>
                {link.label}
              </Link>
            </Grid>
          ))}
        </Grid>
      </Paper>
    ))}
  </Container>
);

export default Blogs;
