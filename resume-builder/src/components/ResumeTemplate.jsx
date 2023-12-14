import { PhoneIcon } from "@chakra-ui/icons";
import {
  Text,
  Center,
  Heading,
  HStack,
  Stack,
  Link,
  VStack,
  UnorderedList,
  ListItem,
  StackDivider,
  Button,
  Box,
} from "@chakra-ui/react";
import React from "react";
import ReactToPrint from "react-to-print";

const ResumeTemplate = (props) => {
  const { resumeInfo, page } = props;

  const ref = React.useRef(null);

  return (
    <Box
      p={8}
      borderRadius="3g"
      bg="white"
      color="gray.900"
      boxShadow="xl"
      rounded="md"
      border="2px solid #e2e8f0"
      width="100%"
      height="100%"
    >
      <Stack spacing={4} ref={ref} m={6} fontFamily="sans-serif">
        <Stack spacing={1}>
          <Center>
            <Heading as="h1">
              {resumeInfo.profile?.firstname} {resumeInfo.profile?.lastname}
            </Heading>
          </Center>
          <Center>
            <HStack
              justify="center"
              wrap="wrap"
              divider={<StackDivider borderColor="gray.500" />}
            >
              {resumeInfo.profile?.email.length ? (
                <Link
                  href={resumeInfo.profile.email}
                  isExternal
                  color="blue.500"
                >
                  {" "}
                  {resumeInfo.profile.email}{" "}
                </Link>
              ) : null}

              {resumeInfo.profile?.website.length ? (
                <Link
                  href={resumeInfo.profile.website}
                  isExternal
                  color="blue.500"
                >
                  {" "}
                  Portfolio{" "}
                </Link>
              ) : null}
            </HStack>
          </Center>
          <HStack justify="center">
            <address>
              <PhoneIcon /> {resumeInfo.profile?.Country_code}  {resumeInfo.profile?.phone} &nbsp;

            </address>
          </HStack>
        </Stack>

        <VStack spacing={2} align="stretch">
          <Heading as="h3" fontSize="xl" borderBottomWidth="1px">
            PERSONAL DATA/ PERSÖNLICHE ANGABEN
          </Heading>

          <Text>Language: {resumeInfo.profile?.lang}</Text>
          <Text>Father's Name / Vater Name*:  {resumeInfo.profile?.father}</Text>
          <Text>Birthdate / Geburtsdatum: {resumeInfo.profile?.birth}</Text>
          <Text>Place of Birth / Geburtsort:  {resumeInfo.profile?.pob} </Text>
          <Text>Passport Number / Reisepassnummer: {resumeInfo.profile?.pass} </Text>
          <Text>Marital Status/ Familienstand: {resumeInfo.profile?.mari}</Text>
          <Text>Computer skills /Computerkenntnisse:
            {resumeInfo?.profile?.ComputerSkills1?.map((CS, index) => (
              <React.Fragment key={index}>
                {index > 0 && ","}
                {CS}
              </React.Fragment>
            ))}
          </Text>

          <Text>Hobbies / Hobbies :
            {resumeInfo?.profile?.hobbi1?.map((hobby, index) => (
              <React.Fragment key={index}>
                {index > 0 && ","}
                {hobby}
              </React.Fragment>
            ))}

          </Text>

          <Text>Address:  {resumeInfo.profile?.address}</Text>
          <Text>country:  {resumeInfo.profile?.country}</Text>
          <Text>Marital Status/ Familienstand: {resumeInfo.profile?.mari}</Text>
          <Text>Gender/Geschlecht(wie im reisepass): {resumeInfo.profile?.Gender}</Text>
        </VStack>

        <VStack spacing={2} align="stretch">
          <Heading as="h3" fontSize="xl" borderBottomWidth="2px">
            EDUCATIONAL QUALIFICATION / SCHULISCHE QUALIFIKATION
          </Heading>
          <Heading as="h3" fontSize="m" >
            Post Graduation/Masters
          </Heading>

          <Text>program:{resumeInfo.edu.grad}</Text>
          {
            Array.from({ length: 3 }, (_, i) => (
              <div key={i}>
                Year:{resumeInfo.edu.Year1Array[i]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; From: {resumeInfo.edu?.from1Array[i]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To: {resumeInfo.edu?.to1Array[i]}<br />
              </div>
            ))
          }

          <Text>University:{resumeInfo.edu.University}</Text>

          <Heading as="h3" fontSize="m" >
            Under Graduate Degree/Diploma
          </Heading>
          <Text>program:{resumeInfo.edu.Ugrad}</Text>
         
          {
  Array.from({ length: resumeInfo.edu?.Year2Array?.length }, (_, i) => (
    <div key={i}>
      Year: {resumeInfo.edu?.Year2Array[i]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      From: {resumeInfo.edu?.from2Array[i]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      To: {resumeInfo.edu?.to2Array[i]}<br />
    </div>
  ))
}


          <Text>University:{resumeInfo.edu.University1}</Text>

          <Heading as="h3" fontSize="m" >
            12th
          </Heading>
          <Text> From: {resumeInfo.edu?.from3}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To: {resumeInfo.edu?.to3}<br /></Text>

          <Text>University:{resumeInfo.edu.University2}</Text>
          <Heading as="h3" fontSize="m" >
            11th
          </Heading>
          <Text> From: {resumeInfo.edu?.from4}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To: {resumeInfo.edu?.to4}<br /></Text>

          <Text>University:{resumeInfo.edu.University3}</Text>

          <Heading as="h3" fontSize="m" >
            10th
          </Heading>
          <Text> From: {resumeInfo.edu?.from5}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To: {resumeInfo.edu?.to5}<br /></Text>

          <Text>University:{resumeInfo.edu.University4}</Text>

          <Heading as="h3" fontSize="m" >
            1st to 9th
          </Heading>
          <Text> From: {resumeInfo.edu?.from6}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To: {resumeInfo.edu?.to6}<br /></Text>

          <Text>University:{resumeInfo.edu.University5}</Text>
          <Heading as="h3" fontSize="m" >
            Break year(ifany)
          </Heading>
          <Text> From: {resumeInfo.edu?.from7}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To: {resumeInfo.edu?.to7}<br /></Text>

          <Text>Reason for break:{resumeInfo.edu.Reason}</Text>

          <Heading as="h3" fontSize="m" >
            Language Proficiency / Sprachkenntnisse:
          </Heading>
          <Text>Mother tongue/ Muttersprache:{resumeInfo.edu.motherT}</Text>
          <Text>English/ Englisch: {resumeInfo.edu.english}</Text>


          <Heading as="h3" fontSize="m" >
            German / Deutsch*
          </Heading>
          {
  Array.from({ length: resumeInfo.edu?.level?.length }, (_, i) => (
    <div key={i}>
   <Text> Level:{resumeInfo.edu.level[i]}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  from: {resumeInfo.edu.from9[i]}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  to: {resumeInfo.edu.to9[i]}</Text><br />
   <Text>  Certificate:{resumeInfo.edu.  Certificate[i]}      </Text>
    </div>
  ))
}


        </VStack>


        <VStack spacing={4} align="stretch">
          <Heading as="h3" fontSize="xl" borderBottomWidth="1px">
            WORK EXPERIENCE
          </Heading>

          <Heading as="h3" fontSize="m" >
            Employer
          </Heading>

         
    
        
    
      
          {
  Array.from({ length: resumeInfo.work?.from?.length }, (_, i) => (
    <div key={i}>
      {i === 0 ? 'Current:' : 'Past:'}
     <Text>From /von (month / year) : {resumeInfo.work.from[i]} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  to/bis(Monat - Jahr) :  {resumeInfo.work.to[i]}</Text> 
    
     <Text>Employer Name / Address Name/Adresse des Arbeitgebers :  {resumeInfo.work.EmpName[i]}</Text>
     <Text>Department / Position Abteilung / Position :  {resumeInfo.work.Dept[i]}</Text>
  </div>
  ))
}

   
    
          <Heading as="h3" fontSize="m" >
            Internship
          </Heading>
          {
  Array.from({ length: resumeInfo.work?.from2?.length }, (_, i) => (
    <div key={i}>
      {i === 0 ? 'Current:' : 'Past:'}
     <Text>From /von (month / year) : {resumeInfo.work.from2[i]} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  to/bis(Monat - Jahr) :  {resumeInfo.work.to2[i]}</Text> 
    
     <Text>Employer Name / Address Name/Adresse des Arbeitgebers :  {resumeInfo.work.Hosp[i]}</Text>
     <Text>Department / Position Abteilung / Position :  {resumeInfo.work.Dept2[i]}</Text>
     <Text key={i}> Duty{i+1} </Text>
     <Text> Information about duties performed: {resumeInfo.work.Duty[i]}</Text>
     <Text>Duration (in months): {resumeInfo.work.Dura[i]}</Text>
  </div>
  ))
}
         

     
        </VStack>


        <HStack divider={<StackDivider />} pt="24px">
          <Button
            w="max-content"
            colorScheme="messenger"
            isDisabled={page !== 5}
            onClick={() => {
              window.location.reload();
            }}
          >
            Create New
          </Button>
          <div>
            <ReactToPrint
              trigger={() => (
                <Button
                  colorScheme="messenger"
                  w="max-content"
                  isDisabled={page !== 5}
                >
                  View
                </Button>
              )}
              content={() => ref.current}
            />
          </div>
        </HStack>
      </Stack>
    </Box>
  );
};

export default ResumeTemplate;
