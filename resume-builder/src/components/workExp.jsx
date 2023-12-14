import { AddIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  GridItem,
  HStack,
  Select,
  Input,
  SimpleGrid,
  extendTheme,
  Stack,
  Textarea,
  Text,
  Box,
  Radio,
  RadioGroup, VStack, Divider
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaBold } from "react-icons/fa";

const theme = extendTheme({
  components: {
    Input: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
      variants: {
        whatsapp: {
          border: '1px solid green.500',
          _hover: {
            borderColor: 'green.600',
          },
          _active: {
            borderColor: 'green.700',
          },
        },
      },
    },
  },
});

const PersonalDetails = (props) => {
  const { resumeInfo, setResumeInfo, setPage } = props;
  const [workSection, setWorkSection] = React.useState([]);
  const [workData, setWorkData] = React.useState({
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    jobDetails: "",
  });
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedQualification, setSelectedQualification] = useState("");
  const [printedData, setPrintedData] = useState("");
  const [workExperiences, setWorkExperiences] = useState([{}])
  const [internships, setInterships] = useState([{}])

  const saveData = () => {
    const isEmpty = Object.values(workData).some((x) => x.trim() === "");
    if (isEmpty) return;
    const duplicate = () => {
      let arr = resumeInfo.professional.work;
      for (let i = 0; i < arr.length; i++) {
        if (JSON.stringify(arr[i]) === JSON.stringify(workData)) {
          return true;
        }
      }
      return false;
    };

    if (duplicate()) return;

    const updatedValue = {
      ...resumeInfo.personal,
      work: resumeInfo.personal.work.concat(workData),
    };
    const updateResumeInfo = {
      ...resumeInfo,
      personal: updatedValue,
    };
    setResumeInfo(updateResumeInfo);
  };

  React.useEffect(() => {
    saveData();
  }, [workSection.length]);

  const createWorkSection = () => {
    setWorkSection(workSection.concat(workExperienceForm()));
  };
  const handlePrint = () => {
    // Generate the string to be displayed based on the selected values
    const printedText = `Program: ${selectedProgram}, Qualification: ${selectedQualification}`;
    setPrintedData(printedText);
  };
  const [selectedFile1, setSelectedFile1] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const handleFileChange1 = (event) => {
    const file = event.target.files[0];
    setSelectedFile1(file);
  };


  const [option, setOption] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    schoolName: '',
    schoolAddress: '',
  });

  const handleOptionChange = (value) => {
    setOption(value);
    // Reset form data when changing options
    setFormData({
      name: '',
      address: '',
      schoolName: '',
      schoolAddress: '',
    });
  };

  const handleFormSubmit = () => {
    // Handle form submission logic based on the selected option and form data
    console.log('Selected Option:', option);
    console.log('Form Data:', formData);
  };


  const [hobbies, setHobbies] = useState(['']);

  const handleInputChange = (index, value) => {
    const updatedHobbies = [...hobbies];
    updatedHobbies[index] = value;
    setHobbies(updatedHobbies);
  };

  const handleAddInput = () => {
    setHobbies([...hobbies, '']);
  };

  const [hobbies1, setHobbies1] = useState(['']);

  const handleInputChange1 = (index, value) => {
    const updatedHobbies1 = [...hobbies1];
    updatedHobbies1[index] = value;
    setHobbies1(updatedHobbies1);
  };

  const handleAddInput1 = () => {
    setHobbies1([...hobbies1, '']);
  };
  const [hobbies2, setHobbies2] = useState(['']);

  const handleInputChange2 = (index, value) => {
    const updatedHobbies2 = [...hobbies2];
    updatedHobbies2[index] = value;
    setHobbies2(updatedHobbies2);
  };

  const handleAddInput2 = () => {
    setHobbies2([...hobbies2, '']);
  };

  const paragraphStyle = {
    color: 'red',
  };


  const [blocks, setBlocks] = useState([]);

  const addBlock = () => {
    const newBlock = { id: blocks.length + 1 };
    setBlocks([...blocks, newBlock]);
  };

  const deleteBlock = (id) => {
    const updatedBlocks = blocks.filter((block) => block.id !== id);
    setBlocks(updatedBlocks);
  };

  const [blocks2, setBlocks2] = useState([]);

  const addBlock2 = () => {
    const newBlock = { id: blocks2.length + 1 };
    setBlocks2([...blocks2, newBlock]);
  };

  const deleteBlock2 = (id) => {
    const updatedBlocks = blocks2.filter((block) => block.id !== id);
    setBlocks2(updatedBlocks);
  };


  const [blocks3, setBlocks3] = useState([]);

  const addBlock3 = () => {
    const newBlock = { id: blocks3.length + 1 };
    setBlocks3([...blocks3, newBlock]);
  };

  const deleteBlock3 = (id) => {
    const updatedBlocks = blocks3.filter((block) => block.id !== id);
    setBlocks3(updatedBlocks);
  };

  const [blocks4, setBlocks4] = useState([]);

  const addBlock4 = () => {
    const newBlock = { id: blocks4.length + 1 };
    setBlocks4([...blocks4, newBlock]);
  };

  const deleteBlock4 = (id) => {
    const updatedBlocks = blocks3.filter((block) => block.id !== id);
    setBlocks4(updatedBlocks);
  };


  const removeBlock = (array, setArray) => {
    setArray([...array.slice(0, -1)])
  }


  const addOneBlock = (array, setArray) => {
    setArray([...array , {}])
  }

  const handleInputOfWorkExperience = (name, value, semesterIndex) => {

    // Create a copy of the post_graduate array
    const work_experienceArray = [...resumeInfo.work.work_experience];
    // console.log(resumeInfo.work.work_experience);

    // Check if the semester object exists in the array
    if (!work_experienceArray[semesterIndex]) {
      work_experienceArray[semesterIndex] = {};
    }

    // Update the semester object with the new key-value pair
    const updatedArrayOfObjects = work_experienceArray.map((obj, index) => {
      console.log(obj);
      if (index === semesterIndex) {
        // Add the new field to the second object
        return {
          ...obj,
          [name] : value,
        };
      }
      return obj; // Leave other objects unchanged
    });
    

    // Update the state with the modified post_graduate array
    setResumeInfo({
      ...resumeInfo,
      work: {
        ...resumeInfo.work,
        work_experience: updatedArrayOfObjects,
      },
    });
  };
  const handleInputOfIntership = (name, value, semesterIndex) => {

    // Create a copy of the post_graduate array
    const internshipArray = [...resumeInfo.work.internship];

    // Check if the semester object exists in the array
    if (!internshipArray[semesterIndex]) {
      internshipArray[semesterIndex] = {
        duties : []
      };
    }

    // Update the semester object with the new key-value pair
    const updatedArrayOfObjects = internshipArray.map((obj, index) => {
      console.log(obj);
      if (index === semesterIndex) {
        // Add the new field to the second object
        return {
          ...obj,
          [name] : value,
          // if(!)
        };
      }
      return obj; // Leave other objects unchanged
    });

    
    
    // Update the state with the modified post_graduate array
    setResumeInfo({
      ...resumeInfo,
      work: {
        ...resumeInfo.work,
        internship: updatedArrayOfObjects,
      },
    });
  };
  const handleDutiesChange = (value, internshipIndex, dutyIndex) => {
    const newDuties = {...resumeInfo.work.internship[internshipIndex]};
    newDuties.duties[dutyIndex] = value;
    console.log(newDuties.duties);

    const newResumeInfo = {
      ...resumeInfo,
      work: {
        ...resumeInfo.work, 
        internship: resumeInfo.work.internship.map((internship, index) => {
          if (index === internshipIndex) {
            return {
              ...internship,
              duties: newDuties.duties
            };
          }
          return internship;
        })
      }
    };
    // console.log(newResumeInfo);
    setResumeInfo(newResumeInfo);
  };
  const workExperienceForm = () => {
    return (
      <SimpleGrid spacing={4} columns={[1, 1, 1, 2]} key={workSection.length} placeItems="center">


      </SimpleGrid>
    );
  };

  return (










    <Stack>
      <text > <strong>Do you have any work experirnce?</strong></text>
      <Box p={4}>
        <RadioGroup onChange={(e) => handleOptionChange(e)} value={option}>
          <VStack spacing={4} align="flex-start">
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
            <Radio value="idk">School graduate/12th passed</Radio>
          </VStack>
        </RadioGroup>
        <br />
        {option === 'yes' && (
          <FormControl>
            <SimpleGrid>

              <VStack spacing={4} align="flex-start">
                <FormControl>
                {
                workExperiences.map((ele, i)=>{
                  return <SimpleGrid>
                      <FormLabel>Employer*</FormLabel><br />
                 
                      <FormLabel>Past*</FormLabel>
                    
                  <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} placeItems="center">
                  <FormControl>
                  <FormLabel>From -to (month / year)*</FormLabel></FormControl>
                  <FormControl>
                  <Input
                    type="date"
                  
                    onChange={(e) => {
                      const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component
                  
                      if (!isNaN(selectedDate.getTime())) {
                        const day = String(selectedDate.getDate()).padStart(2, '0');
                        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                        const year = selectedDate.getFullYear();
                  
                        const formattedDate = `${day}-${month}-${year}`;
                  
                        // const updateValue = {
                        //   ...resumeInfo.work,
                        //   from: formattedDate,
                        // };
                  
                        // const updateResumeInfo = { ...resumeInfo, work: updateValue };
                        // setResumeInfo(updateResumeInfo);
                        handleInputOfWorkExperience("from_date" , formattedDate, i)
                      }
                    }}
                  /></FormControl>
                  <FormControl>
                  <FormLabel> von/bis (Monat - Jahr)*</FormLabel></FormControl>
                  <FormControl>
                  <Input
                    type="date"
                   
                    onChange={(e) => {
                      const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component
                  
                      if (!isNaN(selectedDate.getTime())) {
                        const day = String(selectedDate.getDate()).padStart(2, '0');
                        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                        const year = selectedDate.getFullYear();
                  
                        const formattedDate = `${day}-${month}-${year}`;
                  
                        // const updateValue = {
                        //   ...resumeInfo.work,
                        //   to: formattedDate,
                        // };
                  
                        // const updateResumeInfo = { ...resumeInfo, work: updateValue };
                        // setResumeInfo(updateResumeInfo);
                        handleInputOfWorkExperience("to_date", formattedDate, i)
                      }
                    }}
                  /></FormControl>
                  <FormControl>
                  <FormLabel> "Employer Name / Address
                  Name/Adresse des Arbeitgebers"*</FormLabel></FormControl>
                  <FormControl>
                  <Input
                    type="text"
                    placeholder=""
                    // value={resumeInfo.work.EmpName}
                    onChange={(e) => {
                      // const updateValue = {
                      //   ...resumeInfo.work,
                      //   EmpName: e.target.value,
                      // };
                      // const updateResumeInfo = { ...resumeInfo, work: updateValue };
                      // setResumeInfo(updateResumeInfo);
                      handleInputOfWorkExperience("hospital_name", e.target.value, i)
                    }}
                  /></FormControl>
                  <FormControl>
                  <FormLabel>"Department / Position
                  Abteilung / Position"*</FormLabel></FormControl>
                  <FormControl>
                  <Input
                    type="text"
                    placeholder=""
                    // value={resumeInfo.work.Dept}
                    onChange={(e) => {
                      // const updateValue = {
                      //   ...resumeInfo.work,
                      //   Dept: e.target.value,
                      // };
                      // const updateResumeInfo = { ...resumeInfo, work: updateValue };
                      // setResumeInfo(updateResumeInfo);
                      handleInputOfWorkExperience("department", e.target.value, i)
                    }}
                  /></FormControl>
                  </SimpleGrid>
                 <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} placeItems="center">
              <FormControl>
              <FormLabel>Upload Experience Certificate(pdf)*</FormLabel></FormControl>
             <FormControl> <Input
               type="file"
               marginRight={8}
               onChange={(e)=>{
                
                const ext = e.target.files[0].name.split(".")[e.target.files[0].name.split(".").length - 1]
                handleInputOfWorkExperience("work_experience", `work_experience_${i+1}.${ext}`, i)
               }}
               colorScheme="#00b0ff"
               w="8rem"
               rightIcon={<AddIcon />}
              
             />
             
           <Button color="#00b0ff" marginRight={2}>
               View</Button>
               <Button color="red">
                 Delete</Button></FormControl>
                 </SimpleGrid><br/>
                </SimpleGrid>
                })
              }

                  {/* {blocks.map((block, index) => (
                    <SimpleGrid>
                      <FormLabel>Employer*</FormLabel><br />
                      <FormLabel>Past*</FormLabel>
                      <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} placeItems="center">
                        <FormControl>
                          <FormLabel>From - to (month / year)*</FormLabel></FormControl>
                        <FormControl>
                          <Input
                            type="date"

                            onChange={(e) => {


                              const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component

                              if (!isNaN(selectedDate.getTime())) {
                                const day = String(selectedDate.getDate()).padStart(2, '0');
                                const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                                const year = selectedDate.getFullYear();

                                const formattedDate = `${day}-${month}-${year}`;
                                const newYear = [...(resumeInfo?.work?.from || [])];
                                newYear[index + 1] = formattedDate;

                                const updateValue = {
                                  ...resumeInfo.work,
                                  from: newYear
                                };
                                const updateResumeInfo = {
                                  ...resumeInfo,
                                  work: updateValue,
                                };
                                setResumeInfo(updateResumeInfo);
                              }
                            }}
                          /></FormControl>
                        <FormControl>
                          <FormLabel> von -bis (Monat - Jahr)*</FormLabel></FormControl>
                        <FormControl>
                          <Input
                            type="date"

                            onChange={(e) => {


                              const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component

                              if (!isNaN(selectedDate.getTime())) {
                                const day = String(selectedDate.getDate()).padStart(2, '0');
                                const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                                const year = selectedDate.getFullYear();

                                const formattedDate = `${day}-${month}-${year}`;
                                const newYear = [...(resumeInfo?.work?.to || [])];
                                newYear[index + 1] = formattedDate;

                                const updateValue = {
                                  ...resumeInfo.work,
                                  to: newYear
                                };
                                const updateResumeInfo = {
                                  ...resumeInfo,
                                  work: updateValue,
                                };
                                setResumeInfo(updateResumeInfo);
                              }
                            }}
                          /></FormControl>
                        <FormControl>
                          <FormLabel> "Employer Name / Address
                            Name/Adresse des Arbeitgebers"*</FormLabel></FormControl>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder=""
                            value={resumeInfo.work.EmpName[index + 1]}
                            onChange={(e) => {
                              const newComputerSkills = [...(resumeInfo?.work?.EmpName || [])];
                              newComputerSkills[index + 1] = e.target.value;
                              const updateValue = {
                                ...resumeInfo.work,
                                EmpName: newComputerSkills,
                              };
                              const updateResumeInfo = { ...resumeInfo, work: updateValue };
                              setResumeInfo(updateResumeInfo);
                            }}
                          /></FormControl>
                        <FormControl>
                          <FormLabel>"Department / Position
                            Abteilung / Position"*</FormLabel></FormControl>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder=""
                            value={resumeInfo.work.Dept[index + 1]}
                            onChange={(e) => {
                              const newComputerSkills = [...(resumeInfo?.work?.Dept || [])];
                              newComputerSkills[index + 1] = e.target.value;
                              const updateValue = {
                                ...resumeInfo.work,
                                Dept: newComputerSkills,
                              };
                              const updateResumeInfo = { ...resumeInfo, work: updateValue };
                              setResumeInfo(updateResumeInfo);
                            }}
                          /></FormControl>
                      </SimpleGrid>
                      <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} placeItems="center">
                        <FormControl>
                          <FormLabel>Upload Internship Certificate(pdf)*</FormLabel></FormControl>
                        <FormControl> <Input
                          type="file"
                          onChange={handleFileChange}
                          colorScheme="#00b0ff"
                          w="8rem"
                          rightIcon={<AddIcon />}

                        />

                          <Button color="#00b0ff">
                            View</Button>
                          <Button color="#00b0ff"
                            onClick={() => {
                              const lastBlock = blocks[blocks.length - 1];
                              if (lastBlock) {
                                deleteBlock(lastBlock.id);




                                const newHobbies = [...(resumeInfo?.profile?.hobbi1)];
                                newHobbies.pop();

                                const updatedProfile = {
                                  ...resumeInfo?.profile,
                                  hobbi1: newHobbies,
                                };

                                const updatedResumeInfo = {
                                  ...resumeInfo,
                                  profile: updatedProfile,
                                };

                                setResumeInfo(updatedResumeInfo);

                              }
                            }}>
                            Delete</Button></FormControl>
                      </SimpleGrid><br />
                    </SimpleGrid>
                  ))} */}
                  <Divider
                    orientation="horizontal"
                    borderColor="#2F4F4F"
                    borderWidth="2px"
                  />

              <Button marginRight={2} color="#00b0ff" onClick={(e)=>addOneBlock(workExperiences, setWorkExperiences)} >
                Add 
              </Button>
              <Button
                color="red"
                onClick={() => {
                  removeBlock(workExperiences, setWorkExperiences)
                }}
              >
                Delete 
              </Button>

                </FormControl>
              </VStack>
            </SimpleGrid>
          </FormControl>

        )}

        {option === 'no' && (
          <FormControl>
            <SimpleGrid>
              
            </SimpleGrid>
              <FormLabel style={{ fontWeight: 'bold' }}>Internship	*</FormLabel><br />
              <Divider orientation="horizontal" borderColor="#2F4F4F" borderWidth="2px" />
              <br />
           {
             internships.map((ele, i)=>{
               return <div>
                <FormLabel style={{ fontWeight: 'bold' }}>{i===0?"Recent": "Past"} : *</FormLabel>
                   <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} placeItems="center">
                <FormControl>
                  <FormLabel>From - to (month / year)*</FormLabel> </FormControl>
                <FormControl>
                  <Input
                    type="date"
                    placeholder=""

                    onChange={(e) => {
                      const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component

                      if (!isNaN(selectedDate.getTime())) {
                        const day = String(selectedDate.getDate()).padStart(2, '0');
                        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                        const year = selectedDate.getFullYear();


                        const formattedDate = `${day}-${month}-${year}`;
                         // const updateValue = {
                        //   ...resumeInfo.work,
                        //   from2: `From:${formattedDate}`
                        // };
                  
                        // const updateResumeInfo = { ...resumeInfo, work: updateValue };
                        // setResumeInfo(updateResumeInfo);
                        handleInputOfIntership("from_date", formattedDate, i)
                      }
                    }}
                  /> </FormControl>
                <FormControl>
                  <FormLabel> von -bis (Monat - Jahr)*</FormLabel> </FormControl>
                <FormControl>
                  <Input
                    type="date"
                    placeholder=""
                    onChange={(e) => {
                      const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component

                      if (!isNaN(selectedDate.getTime())) {
                        const day = String(selectedDate.getDate()).padStart(2, '0');
                        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                        const year = selectedDate.getFullYear();


                        const formattedDate = `${day}-${month}-${year}`;
                        const newYear = [...(resumeInfo?.work?.to2 || [])];
                        newYear[0] = formattedDate;
                  
                        // const updateValue = {
                        //   ...resumeInfo.work,
                        //   to2: `To:${formattedDate}`
                        // };
                  
                        // const updateResumeInfo = { ...resumeInfo, work: updateValue };
                        // setResumeInfo(updateResumeInfo);
                        handleInputOfIntership("to_date", formattedDate, i)
                      }
                    }}
                  /> </FormControl>
                <FormControl>
                  <FormLabel>"Hospital Name / Address
                    Adresse des Krankenhauses/der Klinik"*</FormLabel> </FormControl>
                <FormControl>
                  <Input
                    type="text"
                    placeholder=""
                    value={resumeInfo.work?.internship[i]?.hospital_name}
                    onChange={(e) => {
                      const newYear = [...(resumeInfo?.work?.Hosp[0] || [])];
                      newYear[0] = e.target.value;


                      // const updateValue = {
                      //   ...resumeInfo.work,
                      //   Hosp: e.target.value
                      // };
                      // const updateResumeInfo = { ...resumeInfo, work: updateValue };
                      // setResumeInfo(updateResumeInfo);
                      
                      handleInputOfIntership("hospital_name", e.target.value, i)
                    }}
                  /> </FormControl>
                <FormControl>
                  <FormLabel>"Department / Position
                    Abteilung / Position"*</FormLabel> </FormControl>
                <FormControl>
                  <Input
                    type="text"
                    placeholder=""
                    // value={resumeInfo.work.Dept2[0]}
                    value={resumeInfo.work?.internship[i]?.department}
                    onChange={(e) => {
                      const newYear = [...(resumeInfo?.work?.Dept2[0] || [])];
                      newYear[0] = e.target.value;


                      // const updateValue = {
                      //   ...resumeInfo.work,
                      //   Dept2: e.target.value
                      // };
                      // const updateResumeInfo = { ...resumeInfo, work: updateValue };
                      // setResumeInfo(updateResumeInfo);
                      handleInputOfIntership("department", e.target.value, i)
                    }}
                  /> </FormControl>

            </SimpleGrid>
            <SimpleGrid><br />




              <FormLabel style={{ fontWeight: 'bold' }} >Duty1	*</FormLabel><br />

              <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} >
                <FormControl>
                  <FormLabel>"Information about duties performed	"*</FormLabel></FormControl>

                <FormControl>
                  <Input
                    type="text"
                    placeholder=""
                    value={resumeInfo.work.Duty[0]}
                    onChange={(e) => {
                      const newYear = [...(resumeInfo?.work?.Duty[0] || [])];
                      newYear[0] = e.target.value;


                      // const updateValue = {
                      //   ...resumeInfo.work,
                      //   Duty: newYear,
                      // };
                      // const updateResumeInfo = { ...resumeInfo, work: updateValue };
                      // setResumeInfo(updateResumeInfo);
                      handleDutiesChange(e.target.value, i , 0)
                    }}
                  /></FormControl>
                <FormControl>
                  <FormLabel>Duration (in months)	*</FormLabel></FormControl>
                <FormControl>
                  <Input
                    type="text"
                    placeholder=""
                    value={resumeInfo.work.Dura[0]}
                    onChange={(e) => {
                      const newYear = [...(resumeInfo?.work?.Dura[0] || [])];
                      newYear[0] = e.target.value;


                      const updateValue = {
                        ...resumeInfo.work,
                        Dura: newYear,
                      };
                      const updateResumeInfo = { ...resumeInfo, work: updateValue };
                      setResumeInfo(updateResumeInfo);
                    }}
                  /></FormControl>
                <Divider
                  orientation="horizontal"
                  borderColor="#2F4F4F"
                  borderWidth="2px"
                />
              </SimpleGrid>
      






              {blocks3.map((block, index) => (
                <SimpleGrid>

                  <FormLabel style={{ fontWeight: 'bold' }}>{`Duty${block.id + 1}`}*</FormLabel><br />

                  <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} >
                    <FormControl>
                      <FormLabel>"Information about duties performed	"*</FormLabel></FormControl>

                    <FormControl>
                      <Input
                        type="text"
                        placeholder=""
                        value={resumeInfo.profile.firstnjame}
                        onChange={(e) => {
                          // const updateValue = {
                          //   ...resumeInfo.profile,
                          //   firsjtname: e.target.value,
                          // };
                          // const updateResumeInfo = { ...resumeInfo, profile: updateValue };
                          // setResumeInfo(updateResumeInfo);
                          
                      handleDutiesChange(e.target.value, i , index+1)
                        }}
                      /></FormControl>
                    <FormControl>
                      <FormLabel>Duration (in months)	*</FormLabel></FormControl>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder=""
                        value={resumeInfo.profile.firstnjame}
                        onChange={(e) => {
                          const updateValue = {
                            ...resumeInfo.profile,
                            firsjtname: e.target.value,
                          };
                          const updateResumeInfo = { ...resumeInfo, profile: updateValue };
                          setResumeInfo(updateResumeInfo);
                        }}
                      /></FormControl>
                    <Divider
                      orientation="horizontal"
                      borderColor="#2F4F4F"
                      borderWidth="2px"
                    />
                  </SimpleGrid>

                  <br />
                </SimpleGrid>
              ))}








            </SimpleGrid>
            <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
              <FormControl>
                <Button marginRight={2} color="#00b0ff" onClick={addBlock3} >
                  Add
                </Button>
                <Button
                  color="red"
                  onClick={() => {
                    const lastBlock = blocks3[blocks3.length - 1];
                    if (lastBlock) {
                      deleteBlock3(lastBlock.id);
                      const newHobbies = [...(resumeInfo.work.Duty)];
                      newHobbies.pop();

                      const updatedProfile = {
                        ...resumeInfo?.work,
                        Duty: newHobbies,
                      };

                      const updatedResumeInfo = {
                        ...resumeInfo,
                        work: updatedProfile,
                      };

                      setResumeInfo(updatedResumeInfo);
                    }
                  }}
                >
                  Delete
                </Button></FormControl>

            </SimpleGrid>
            <br />

            <br />


            <p style={paragraphStyle}>
              Instructions to the Candidate:  Please write here as briefly and in as much detail as possible about the tasks and activities you learned during your internship. Also
              mention the specialist departments / facilities. The more the better. But please note that you will be asked about your skills and experience in the interview and must be
              able to explain them.
            </p><br />
            <br />






            <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} placeItems="center">
              <FormControl>
                <FormLabel>Upload Internship Certificate*</FormLabel></FormControl>
              <FormControl> <Input
                type="file"
                marginRight={8}
                onChange={(e)=>{
                  handleFileChange(e)
                    // const updateValue = {
                    //   ...resumeInfo.files,
                    //   [`post_graduation_marksheet_${resumeInfo.edu.post_graduate[i].year_no}`] : e.target.files[0],
                    // };
                    // const updateResumeInfo = { ...resumeInfo, files: updateValue };
                    // setResumeInfo(updateResumeInfo);
                    const ext = e.target.files[0].name.split(".")[e.target.files[0].name.split(".").length - 1]
                    handleInputOfIntership("internship_certificate" , `internship_certificate_${i+1}.${ext}`, i)
                  }
                }
                colorScheme="#00b0ff"
                w="8rem"
                rightIcon={<AddIcon />}
              />
                {selectedFile && (
                  <Text mt={2}>Selected file: {selectedFile.name}</Text>
                )}
                <Button color="#00b0ff" marginRight={2}>
                  View</Button>
                <Button color="red">
                  Delete</Button></FormControl>
            </SimpleGrid>
              </div>
            })
           }

            <Divider
              orientation="horizontal"
              borderColor="#2F4F4F"
              borderWidth="0.5px"
            />





            {/* {blocks2.map((block, index) => (
              <div>
                <Divider orientation="horizontal" borderColor="#2F4F4F" borderWidth="0.5px" /><br />

                <SimpleGrid >


                  <FormLabel style={{ fontWeight: 'bold' }}>Past*</FormLabel>


                  <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} placeItems="center">
                    <FormControl>
                      <FormLabel>From - to (month / year)*</FormLabel> </FormControl>
                    <FormControl>
                      <Input
                        type="date"
                        placeholder=""

                        onChange={(e) => {


                          const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component

                          if (!isNaN(selectedDate.getTime())) {
                            const day = String(selectedDate.getDate()).padStart(2, '0');
                            const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                            const year = selectedDate.getFullYear();

                            const formattedDate = `${day}-${month}-${year}`;
                            const newYear = [...(resumeInfo?.work?.from2 || [])];
                            newYear[index + 1] = formattedDate;

                            const updateValue = {
                              ...resumeInfo.work,
                              from2: newYear
                            };
                            const updateResumeInfo = {
                              ...resumeInfo,
                              work: updateValue,
                            };
                            setResumeInfo(updateResumeInfo);
                          }
                        }}
                      /> </FormControl>
                    <FormControl>
                      <FormLabel> von -bis (Monat - Jahr)*</FormLabel> </FormControl>
                    <FormControl>
                      <Input
                        type="date"
                        placeholder=""
                        onChange={(e) => {


                          const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component

                          if (!isNaN(selectedDate.getTime())) {
                            const day = String(selectedDate.getDate()).padStart(2, '0');
                            const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                            const year = selectedDate.getFullYear();

                            const formattedDate = `${day}-${month}-${year}`;
                            const newYear = [...(resumeInfo?.work?.to2 || [])];
                            newYear[index + 1] = formattedDate;

                            const updateValue = {
                              ...resumeInfo.work,
                              to2: newYear
                            };
                            const updateResumeInfo = {
                              ...resumeInfo,
                              work: updateValue,
                            };
                            setResumeInfo(updateResumeInfo);
                          }
                        }}
                      /> </FormControl>
                    <FormControl>
                      <FormLabel>"Hospital Name / Address
                        Adresse des Krankenhauses/der Klinik"*</FormLabel> </FormControl>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder=""
                        value={resumeInfo.work.Hosp[index + 1]}
                        onChange={(e) => {
                          const newComputerSkills = [...(resumeInfo?.work?.Hosp || [])];
                          newComputerSkills[index + 1] = e.target.value;
                          const updateValue = {
                            ...resumeInfo.work,
                            Hosp: newComputerSkills,
                          };
                          const updateResumeInfo = { ...resumeInfo, work: updateValue };
                          setResumeInfo(updateResumeInfo);
                        }}
                      /> </FormControl>
                    <FormControl>
                      <FormLabel>"Department / Position
                        Abteilung / Position"*</FormLabel> </FormControl>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder=""
                        value={resumeInfo.work.Dept2[index + 1]}
                        onChange={(e) => {
                          const newComputerSkills = [...(resumeInfo?.work?.Dept2 || [])];
                          newComputerSkills[index + 1] = e.target.value;
                          const updateValue = {
                            ...resumeInfo.work,
                            Dept2: newComputerSkills,
                          };
                          const updateResumeInfo = { ...resumeInfo, work: updateValue };
                          setResumeInfo(updateResumeInfo);
                        }}
                      /> </FormControl>
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid><br />
                  <FormLabel style={{ fontWeight: 'bold' }}>Duty1	*</FormLabel><br />

                  <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} >
                    <FormControl>
                      <FormLabel>"Information about duties performed	"*</FormLabel></FormControl>

                    <FormControl>
                      <Input
                        type="text"
                        placeholder=""
                        value={resumeInfo.work.Duty[0]}
                        onChange={(e) => {
                          const newYear = [...(resumeInfo?.work?.Duty[0] || [])];
                          newYear[0] = e.target.value;


                          const updateValue = {
                            ...resumeInfo.work,
                            Duty: newYear,
                          };
                          const updateResumeInfo = { ...resumeInfo, work: updateValue };
                          setResumeInfo(updateResumeInfo);
                        }}
                      /></FormControl>
                    <FormControl>
                      <FormLabel>Duration (in months)	*</FormLabel></FormControl>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder=""
                        value={resumeInfo.work.Dura[0]}
                        onChange={(e) => {
                          const newYear = [...(resumeInfo?.work?.Dura[0] || [])];
                          newYear[0] = e.target.value;


                          const updateValue = {
                            ...resumeInfo.work,
                            Dura: newYear,
                          };
                          const updateResumeInfo = { ...resumeInfo, work: updateValue };
                          setResumeInfo(updateResumeInfo);
                        }}
                      /></FormControl>

                  </SimpleGrid>
                  <Divider
                    orientation="horizontal"
                    borderColor="#2F4F4F"
                    borderWidth="2px"
                  /> <br />
                </SimpleGrid>
                {blocks4.map((block) => (
                  <SimpleGrid>

                    <FormLabel style={{ fontWeight: 'bold' }}>{`Duty${block.id + 1}`}*</FormLabel><br />

                    <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} >
                      <FormControl>
                        <FormLabel>"Information about duties performed	"*</FormLabel></FormControl>

                      <FormControl>
                        <Input
                          type="text"
                          placeholder=""
                          value={resumeInfo.profile.firstnjame}
                          onChange={(e) => {
                            const updateValue = {
                              ...resumeInfo.profile,
                              firsjtname: e.target.value,
                            };
                            const updateResumeInfo = { ...resumeInfo, profile: updateValue };
                            setResumeInfo(updateResumeInfo);
                          }}
                        /></FormControl>
                      <FormControl>
                        <FormLabel>Duration (in months)	*</FormLabel></FormControl>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder=""
                          value={resumeInfo.profile.firstnjame}
                          onChange={(e) => {
                            const updateValue = {
                              ...resumeInfo.profile,
                              firsjtname: e.target.value,
                            };
                            const updateResumeInfo = { ...resumeInfo, profile: updateValue };
                            setResumeInfo(updateResumeInfo);
                          }}
                        /></FormControl>

                    </SimpleGrid>
                    <Divider
                      orientation="horizontal"
                      borderColor="#2F4F4F"
                      borderWidth="2px"
                    />
                    <br />
                  </SimpleGrid>
                ))}

                <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
                  <FormControl>
                    <Button marginRight={2} color="#00b0ff" onClick={addBlock4} >
                      Add
                    </Button>
                    <Button
                      color="red"
                      onClick={() => {
                        const lastBlock = blocks4[blocks4.length - 1];
                        if (lastBlock) {
                          deleteBlock4(lastBlock.id);




                          const newHobbies = [...(resumeInfo.work.Duty)];
                          newHobbies.pop();

                          const updatedProfile = {
                            ...resumeInfo?.work,
                            Duty: newHobbies,
                          };

                          const updatedResumeInfo = {
                            ...resumeInfo,
                            work: updatedProfile,
                          };

                          setResumeInfo(updatedResumeInfo);
                        }
                      }}
                    >
                      Delete
                    </Button></FormControl>
                </SimpleGrid>
                <br />

                <br />


                <p style={paragraphStyle}>
                  Instructions to the Candidate:  Please write here as briefly and in as much detail as possible about the tasks and activities you learned during your internship. Also
                  mention the specialist departments / facilities. The more the better. But please note that you will be asked about your skills and experience in the interview and must be
                  able to explain them.
                </p><br />
                <br />




                <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} placeItems="center">
                  <FormControl>
                    <FormLabel>Upload Internship Certificate*</FormLabel></FormControl>
                  <FormControl> <Input
                    type="file"
                    onChange={handleFileChange1}
                    colorScheme="#00b0ff"
                    w="8rem"
                    rightIcon={<AddIcon />}
                  />
                    {selectedFile && (
                      <Text mt={2}>Selected file: {selectedFile.name}</Text>
                    )}
                    <Button color="#00b0ff">
                      View</Button>
                    <Button color="#00b0ff">
                      Delete</Button></FormControl>
                </SimpleGrid>


              </div>
            ))} */}
            <SimpleGrid columns={[1, 1, 1, 1]} spacing={4} >
              <Divider orientation="horizontal" borderColor="#2F4F4F" borderWidth="0.5px" /> </SimpleGrid>  <br />
            <Button marginRight={2} color="#00b0ff" onClick={()=>addOneBlock(internships, setInterships)} >
              Add
            </Button>
            <Button
              color="red"
              onClick={() => {
                removeBlock(internships, setInterships)
                const lastBlock = blocks2[blocks2.length - 1];
                if (lastBlock) {
                  deleteBlock2(lastBlock.id);




                  const newHobbies = [...(resumeInfo.work.from2)];
                  newHobbies.pop();

                  const updatedProfile = {
                    ...resumeInfo?.work,
                    from2: newHobbies,
                  };

                  const updatedResumeInfo = {
                    ...resumeInfo,
                    work: updatedProfile,
                  };

                  setResumeInfo(updatedResumeInfo);

                }
              }}
            >
              Delete
            </Button>
            <SimpleGrid />
            <br />
            <Divider orientation="horizontal" borderColor="#2F4F4F" borderWidth="2px" /><br />



          </FormControl>

        )}
      </Box>

      <HStack spacing={8} justify="center">

        <Button
          colorScheme="blue"
          onClick={() => {
            setPage((p) => p - 1);
          }}
          leftIcon={<ChevronLeftIcon />}
        >
          back
        </Button>
        <Button
          color="#00b0ff"
          onClick={() => {
            saveData();
            setPage((p) => p + 1);
          }}
          rightIcon={<ChevronRightIcon />}
        >
          Save
        </Button>
      </HStack></Stack>


  );

};

export default PersonalDetails;
