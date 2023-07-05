import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ActionAreaCard from './ActionAreaCard';

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
        <TabPanel value="1">
          <ActionAreaCard/>
        </TabPanel>
        <TabPanel value="2">Non-Programming</TabPanel>
      </TabContext>
    </Box>
  );
}
