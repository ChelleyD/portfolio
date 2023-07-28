import * as React from 'react';
import '../App.css'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
 
import PP1 from './Projects/PP1';
import PP2 from './Projects/PP2';
import PP3 from './Projects/PP3';
import PP4 from './Projects/PP4';
import PP5 from './Projects/PP5';
import PP6 from './Projects/PP6';

import NPP1 from './Projects/NPP1';
import NPP2 from './Projects/NPP2';
import NPP3 from './Projects/NPP3';

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
         <TabPanel value="1" centered>
           <div id='project-cards'>
            <PP1/>
            <PP2/>
            <PP3/>
            <PP4/>
            <PP5/>
            <PP6/>
           </div>
         </TabPanel>

         {/* non-programming projects */}
         <TabPanel value="2">
           <div id='project-cards'>
            <NPP1/>
            <NPP2/>
            <NPP3/>
           </div>
         </TabPanel>
       </TabContext>
     </Box>
  )
}
