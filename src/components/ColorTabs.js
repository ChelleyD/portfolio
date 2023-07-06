import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Typography } from '@mui/material';
import ProgrammingProjectInfo from './Projects/ProgrammingProjectsInfo';
import NonProgrammingProjectInfo from './Projects/NonProgrammingProjectsInfo';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const PPI = ProgrammingProjectInfo.map((info) => 
    <Grid sm={12} md={6} lg={4} xl={2} sx={{margin: 'auto'}}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea className="card-wrapper">
          <CardMedia
            component="img"
            height="245"
            // image="https://source.unsplash.com/random"
            image={info.previewImg}
            alt="random unsplash image"
            className="card-image"
          />

          <div className="overlay-right-slide">
            <div className="card-text">
              <Typography variant='body1'>{info.projectName}</Typography>
              <Typography variant='caption text'>{info.languages}</Typography>
            </div>
          </div>
        </CardActionArea>
      </Card>
    </Grid>
  );

  const NPPI = NonProgrammingProjectInfo.map((info) => 
  <Grid sm={12} md={6} lg={4} xl={2}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea className="card-wrapper">
        <CardMedia
          component="img"
          height="245"
          // image="https://source.unsplash.com/random"
          image={info.previewImg}
          alt="random unsplash image"
          className="card-image"
        />

        <div className="overlay-right-slide">
          <div className="card-text">
            <Typography variant='body1'>{info.projectName}</Typography>
            <Typography variant='caption text'>{info.subject}</Typography>
          </div>
        </div>
      </CardActionArea>
    </Card>
  </Grid>
);


  return (
    <Box sx={{ width: '80%', typography: 'body1', margin: 'auto'}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" textColor="secondary" indicatorColor="secondary" centered>
            <Tab label="Programming" value="1" sx={{textTransform: 'none', typography: 'body1'}}/>
            <Tab label="Non-Programming" value="2" sx={{textTransform: 'none', typography: 'body1'}}/>
          </TabList>
        </Box>

        {/* programming projects */}
        <TabPanel value="1" centered>
          <Grid container spacing={5}> {/* at smaller screens offset??? */}
            {PPI}
          </Grid>
        </TabPanel>

        {/* non-programming projects */}
        <TabPanel value="2">
          <Grid container spacing={5}>
            {NPPI}
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
