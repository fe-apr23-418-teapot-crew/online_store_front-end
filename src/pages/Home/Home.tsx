import * as React from 'react';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Masonry } from '@mui/lab';
import { Categories } from '../../components/Categories';

const heights = [150, 1];

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  color: theme.palette.text.secondary,
}));

export const Home: React.FC = () => {
  return (
    <>
      <Box sx={{ width: 500, minHeight: 377 }}>
        <Masonry columns={3} spacing={2}>
          {heights.map((height, index) => (
            <Paper key={index}>
              <StyledAccordion sx={{ minHeight: height }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion {index + 1}</Typography>
                </AccordionSummary>
                <AccordionDetails>Contents</AccordionDetails>
              </StyledAccordion>
            </Paper>
          ))}
        </Masonry>
      </Box>

      <Categories />
    </>
  );
};
