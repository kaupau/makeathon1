import './App.css';
import { Input, InputGroup, InputLeftElement, InputLeftAddon, Select, Divider, Switch, Text, Heading, FormControl, FormLabel } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Box, StackDivider, Stack } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { useGeolocated } from "react-geolocated";
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [openMode, setOpenMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (event) => setSearchQuery(event.target.value)

  // const geoStuff = () => {
  //   const { coords, isGeolocationAvailable, isGeolocationEnabled } =
  //   useGeolocated({
  //       positionOptions: {
  //           enableHighAccuracy: false,
  //       },
  //       userDecisionTimeout: 5000,
  //   });
  //   if(isGeolocationAvailable) {
  //     <Text>Your browser does not support Geolocation</Text>
  //   } else if (!isGeolocationEnabled) {
  //     <Text>Geolocation is not enabled</Text>
  //   } else {

  //   }
  // }

  const askAPI = () => {
    if(openMode) {
      axios
      .post('', {
        prompt: "Hello World!",
        location: "This is a new post."
      })
      .then((response) => {
        
      });
    } else {

    }
    
  }

  return (
    <div className="App">
      {/* <Card>
        <CardHeader>
          <Heading size='md'>Choose your location</Heading>
        </CardHeader>
        <CardBody>
          
        </CardBody>
      </Card> */}


      <div className='w1'>
        <p className='logo'>medisearch</p>
      </div>
      <div className="container">
        <div className="element1">
          <p className="p1">Language</p>
          <Select placeholder='Select a language'>
            <option value='English'>English</option>
            <option value='Spanish'>Spanish</option>
            <option value='French'>French</option>
            <option value='Tamil'>Tamil</option>
            <option value='Telugu'>Telugu</option>
            <option value='Hindi'>Hindi</option>
          </Select>
        </div>

        <div class="element2">

        {/* <p className="p1">Ask MediSearch Anything!</p> */}

          <div className='p2'>
            <FormControl display='flex' alignItems='center'>
              <FormLabel htmlFor='email-alerts' mb='0'>
                AI Mode
              </FormLabel>
              <Switch isChecked={openMode} onChange={()=>{setOpenMode(!openMode)}} />
            </FormControl>
          </div>
          
          <InputGroup className='search'>
            <Input type='tel' size='lg' value={searchQuery} onChange={handleChange} placeholder='Search for medication' />
          </InputGroup>
        
        <Divider />
        </div>
      

      <div className='results'>
        <Card variant='outline'>
          <CardHeader>
            <Heading size='md'>Client Report</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Summary
                </Heading>
                <Text pt='2' fontSize='sm'>
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Overview
                </Heading>
                <Text pt='2' fontSize='sm'>
                  Check out the overview of your clients.
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Analysis
                </Heading>
                <Text pt='2' fontSize='sm'>
                  See a detailed analysis of all your business clients.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </div>
      </div>
    </div>
  );
}

export default App;
