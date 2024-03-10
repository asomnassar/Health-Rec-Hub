import { Box, Tab, Tabs, Typography } from "@mui/material";
import { ReactNode, SyntheticEvent, useState } from "react";
import { PrimaryContainer } from "../../mui/PrimaryContiner";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabLabel=({children} : {children:ReactNode})=>{
  return <Typography variant="subtitle1" className="font-[600]">{children}</Typography>
}

const PatientTabs = () => {
  const [value, setValue] =useState(0);

  const handleChange = (event:SyntheticEvent, newValue:number) => {
    setValue(newValue);
  };
  
  return (
    <PrimaryContainer className="py-4">
      <Tabs    
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        className={`bg-white flex justify-between p-4 rounded-xl`}>
        <Tab label={<TabLabel>الملف الشخصى</TabLabel>} {...a11yProps(0)} />
        <Tab label={<TabLabel>السجل الطبى</TabLabel>} {...a11yProps(1)} />
        <Tab label={<TabLabel>الروشتات</TabLabel>} {...a11yProps(2)} />
        <Tab label={<TabLabel>نتائج الاختبارات</TabLabel>} {...a11yProps(3)} />
        <Tab label={<TabLabel>الاجراءات</TabLabel>} {...a11yProps(4)} />
        <Tab label={<TabLabel>جدول المواعيد</TabLabel>} {...a11yProps(5)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        Item Three
      </CustomTabPanel>
    </PrimaryContainer>
  )
}

export default PatientTabs