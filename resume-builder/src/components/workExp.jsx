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

 

  const handleOptionChange = (value) => {
    setOption(value);
    // Reset form data when changing options
 
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


  const [formData, setFormData] = useState([
    { name: '', rollNo: '', duties: [''] }
  ]);
  
  const [printedEntries, setPrintedEntries] = useState('');


  const handleNameChange = (index, value) => {
    const newData = [...formData];
    newData[index].name = value;
    setFormData(newData);
  };
  const handleDeleteDuty = (formIndex) => {
    const newData = [...formData];
    const lastDutyIndex = newData[formIndex].duties.length - 1;
    if (lastDutyIndex >= 0) {
      newData[formIndex].duties.splice(lastDutyIndex, 1);
      setFormData(newData);
    }
  };
  const handleRollNoChange = (index, value) => {
    const newData = [...formData];
    newData[index].rollNo = value;
    setFormData(newData);
  };

  const handleDutyChange = (formIndex, dutyIndex, value) => {
    const newData = [...formData];
    newData[formIndex].duties[dutyIndex] = value;
    setFormData(newData);
  };

  const handleAddDuty = (index) => {
    const newData = [...formData];
    newData[index].duties.push('');
    setFormData(newData);
  };

  const handleAddAnother = () => {
    setFormData([...formData, { name: '', rollNo: '', duties: [''] }]);
  };

  const handlePrintEntries = () => {
    const entries = formData.map((data, index) => (
      <div key={index}>
        <p>Student {index + 1}:</p>
        <p>Name: {data.name}</p>
        <p>Roll No: {data.rollNo}</p>
        <p>Duties:</p>
        <ul>
          {data.duties.map((duty, dutyIndex) => (
            <li key={dutyIndex}>{duty}</li>
          ))}
        </ul>
        <hr />
      </div>
    ));

    setPrintedEntries(entries);
  };

 const handleDeleteAll = () => {
  if (formData.length > 0) {
    const newData = [...formData];
    newData.pop(); // Remove the last entry
    setFormData(newData);
    setPrintedEntries('');
  }
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
          
          <VStack spacing={4} align="stretch">
             <FormLabel style={{ fontWeight: 'bold' }}>Internship	*</FormLabel><br />
          {formData.map((data, index) => (

            <Box key={index} borderWidth="1px" p={4} borderRadius="md">
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
            newYear[index] = formattedDate;

            const updateValue = {
              ...resumeInfo.work,
              from2: newYear
            };

            const updateResumeInfo = { ...resumeInfo, work: updateValue };
            setResumeInfo(updateResumeInfo);
          }
        }}
      />
    </FormControl>

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
            newYear[index] = formattedDate;

            const updateValue = {
              ...resumeInfo.work,
              to2: newYear
            };

            const updateResumeInfo = { ...resumeInfo, work: updateValue };
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
        value={resumeInfo.work.Hosp[index]}
        onChange={(e) => {
          const newYear = [...(resumeInfo?.work?.Hosp[index] || [])];
          newYear[index] = e.target.value;


          const updateValue = {
            ...resumeInfo.work,
            Hosp: newYear,
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
        value={resumeInfo.work.Dept2[index]}
        onChange={(e) => {
          const newYear = [...(resumeInfo?.work?.Dept2[index] || [])];
          newYear[index] = e.target.value;


          const updateValue = {
            ...resumeInfo.work,
            Dept2: newYear,
          };
          const updateResumeInfo = { ...resumeInfo, work: updateValue };
          setResumeInfo(updateResumeInfo);
        }}
      /> </FormControl>

              {data.duties.map((duty, dutyIndex) => (

<div>  
<FormLabel>`Duty {dutyIndex+1}`</FormLabel>
  <FormControl>
          <FormLabel>"Information about duties performed	"*</FormLabel></FormControl>

       
<FormControl>
      <Input
        type="text"
        placeholder=""
       
        onChange={(e) => {
          const newYear = [...(resumeInfo?.work?.Duty || [])];
          
          // Ensure the object at the specified index exists and has a 'dut' property
          if (newYear[index] && newYear[index].dut) {
            const newDut = [...newYear[index].dut];
            newDut[dutyIndex] = e.target.value;
        
            // Update the 'dut' property of the object at the specified index
            newYear[index] = { ...newYear[index], dut: newDut };
        
            const updateValue = {
              ...resumeInfo.work,
              Duty: newYear,
            };
        
            const updateResumeInfo = { ...resumeInfo, work: updateValue };
            setResumeInfo(updateResumeInfo);
          } else {
            console.error("Invalid structure at index:", index);
          }
        }}
        
      />
          <FormLabel>Duration (in months)	*</FormLabel></FormControl>
        <FormControl>
          <Input
            type="text"
            placeholder=""
            value={resumeInfo.profile.firstnjame}
            onChange={(e) => {
              const newYear = [...(resumeInfo?.work?.Dura || [])];
            
              // Ensure the object at the specified index exists
              if (newYear[index]) {
                // Ensure the 'dur' property exists
                if (newYear[index].dur) {
                  const newDut = [...newYear[index].dur];
                  newDut[dutyIndex] = e.target.value;
            
                  // Update the 'dur' property of the object at the specified index
                  newYear[index] = { ...newYear[index], dur: newDut };
            
                  const updateValue = {
                    ...resumeInfo.work,
                    Dura: newYear,
                  };
            
                  const updateResumeInfo = { ...resumeInfo, work: updateValue };
                  setResumeInfo(updateResumeInfo);
                } else {
                  console.error("Invalid structure at index:", index, "or missing 'dur' property.");
                }
              } else {
                console.error("Invalid structure at index:", index);
              }
            }}
            
          /></FormControl>



                
                </div>
              ))}
              <Button onClick={() => handleAddDuty(index)} color="#00b0ff" mt={2} size="sm">
                Add Duty
              </Button>
              {data.duties.length > 0 && (
              <Button onClick={() => handleDeleteDuty(index)} mt={2} ml={2} size="sm" color="red">
                Delete Duty
              </Button>
            )}
            </Box>
          ))}

<SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
      <FormControl>
        <Button marginRight={2} color="#00b0ff" onClick={handleAddAnother}>
          Add
        </Button>
        <Button
          color="red"
          onClick={handleDeleteAll}
        >
          Delete
        </Button></FormControl>
    </SimpleGrid>
        
          <Box mt={4}>
            <Text fontSize="lg">Printed Entries:</Text>
            {printedEntries}
          </Box>
        </VStack>
          
          
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
