import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ActionAreaCard from './ActionAreaCard';
// import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <TabPanel value="1">
          {/* <Stack direction="row" spacing={2}>
            <ActionAreaCard/>
            <ActionAreaCard/>
            <ActionAreaCard/>
          </Stack> */}
          <Grid container spacing={5}>
            <Grid sm={12} md={6} lg={4} xl={2}>
              <ActionAreaCard/>
            </Grid>

            <Grid sm={12} md={6} lg={4} xl={2}>
              <ActionAreaCard/>
            </Grid>

            <Grid sm={12} md={6} lg={4} xl={2}>
              <ActionAreaCard/>
            </Grid>

            <Grid sm={12} md={6} lg={4} xl={2}>
              <ActionAreaCard/>
            </Grid>

            <Grid sm={12} md={6} lg={4} xl={2}>
              <ActionAreaCard/>
            </Grid>

            <Grid sm={12} md={6} lg={4} xl={2}>
              <ActionAreaCard/>
            </Grid>
          </Grid>
        </TabPanel>

        {/* non-programming projects */}
        <TabPanel value="2">
          <Grid container spacing={5}>
            <Grid sm={12} md={6} lg={4} xl={2}>
              <ActionAreaCard/>
            </Grid>

            <Grid sm={12} md={6} lg={4} xl={2}>
              <ActionAreaCard/>
            </Grid>

            <Grid sm={12} md={6} lg={4} xl={2}>
              <ActionAreaCard/>
            </Grid>
          </Grid>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
