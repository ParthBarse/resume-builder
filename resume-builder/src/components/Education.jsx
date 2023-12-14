import { AddIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  GridItem,
  HStack,
  Select,
  VStack,
  Box,
  Input,
  SimpleGrid,
  extendTheme,
  Stack,
  Textarea,
  Text,
  Divider,
} from "@chakra-ui/react";
import React, { useState } from "react";

const theme = extendTheme({
  components: {
    Input: {
      baseStyle: {
        _focus: {
          boxShadow: "none",
        },
      },
      variants: {
        whatsapp: {
          border: "1px solid green.500",
          _hover: {
            borderColor: "green.600",
          },
          _active: {
            borderColor: "green.700",
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
  const [semestersOfPostGraduate, setSemestersOfPostGraduate] = useState([""])
  const [semestersOfUnderGraduate, setSemestersOfUnderGraduate] = useState([""])
  const [blankYear, setBlankYear] = useState([""])

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

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const [hobbies, setHobbies] = useState([""]);

  const handleInputChange = (index, value) => {
    const updatedHobbies = [...hobbies];
    updatedHobbies[index] = value;
    setHobbies(updatedHobbies);
  };

  const handleAddInput = () => {
    setHobbies([...hobbies, ""]);
  };

  const [hobbies1, setHobbies1] = useState([""]);

  const handleInputChange1 = (index, value) => {
    const updatedHobbies1 = [...hobbies1];
    updatedHobbies1[index] = value;
    setHobbies1(updatedHobbies1);
  };

  const handleAddInput1 = () => {
    setHobbies1([...hobbies1, ""]);
  };

  const [hobbies2, setHobbies2] = useState([""]);

  const handleInputChange2 = (index, value) => {
    const updatedHobbies2 = [...hobbies2];
    updatedHobbies2[index] = value;
    setHobbies2(updatedHobbies2);
  };

  const handleAddInput2 = () => {
    setHobbies2([...hobbies2, ""]);
  };

  const [hobbies3, setHobbies3] = useState([""]);

  const handleInputChange3 = (index, value) => {
    const updatedHobbies3 = [...hobbies3];
    updatedHobbies3[index] = value;
    setHobbies(updatedHobbies3);
  };

  const handleAddInput3 = () => {
    setHobbies3([...hobbies3, ""]);
  };
  const workExperienceForm = () => {};

  const [year1, setYear1] = useState([""]);
  const paragraphStyle = {
    color: "red",
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

  const [selectedOption, setSelectedOption] = useState("");
  const [name, setName] = useState("");

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setName(""); // Reset the name when the dropdown value changes
  };

  const removeBlock = (array, setArray) => {
    setArray([...array.slice(0, -1)])
  }


  const addOneBlock = (array, setArray) => {
    setArray([...array , ""])
  }

  const handleInput = (name, value, semesterIndex, file) => {

    // Create a copy of the post_graduate array
    const post_graduateArray = [...resumeInfo.edu.post_graduate];

    // Check if the semester object exists in the array
    if (!post_graduateArray[semesterIndex]) {
      post_graduateArray[semesterIndex] = {};
    }

    // Update the semester object with the new key-value pair
    const updatedArrayOfObjects = post_graduateArray.map((obj, index) => {
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
    if (file) {
      setResumeInfo({
        ...resumeInfo,
        edu: {
          ...resumeInfo.edu,
          post_graduate: updatedArrayOfObjects,
        },
        files : {
          ...resumeInfo.files,
          [`post_graduation_marksheet_${resumeInfo.edu.post_graduate[semesterIndex].year_no}`] : file,
        }
      });
    } else {
      setResumeInfo({
        ...resumeInfo,
        edu: {
          ...resumeInfo.edu,
          post_graduate: updatedArrayOfObjects,
        },
      });
    }
  };
  
  const handleInputUnderGraduate = (name, value, semesterIndex, file) => {

    // Create a copy of the post_graduate array
    const under_graduateArray = [...resumeInfo.edu.under_graduate];

    // Check if the semester object exists in the array
    if (!under_graduateArray[semesterIndex]) {
      under_graduateArray[semesterIndex] = {};
    }

    // Update the semester object with the new key-value pair
    const updatedArrayOfObjects = under_graduateArray.map((obj, index) => {
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

    // console.log(updatedArrayOfObjects);
    
    // Update the state with the modified post_graduate array
    if (file) {
    setResumeInfo({
      ...resumeInfo,
      edu: {
        ...resumeInfo.edu,
        under_graduate: updatedArrayOfObjects,
      },
        files : {
          ...resumeInfo.files,
        [`under_graduation_marksheet_${resumeInfo.edu.under_graduate[semesterIndex].year_no}`]: file,
      }
      });
    } else {
      setResumeInfo({
        ...resumeInfo,
        edu: {
          ...resumeInfo.edu,
          under_graduate: updatedArrayOfObjects,
        },
      });
    }
  };
  
  const handleInputBlankYear = (name, value, semesterIndex) => {

    // Create a copy of the post_graduate array
    const blank_yearArray = [...resumeInfo.edu.blank_year];

    // Check if the semester object exists in the array
    if (!blank_yearArray[semesterIndex]) {
      blank_yearArray[semesterIndex] = {};
    }

    // Update the semester object with the new key-value pair
    const updatedArrayOfObjects = blank_yearArray.map((obj, index) => {
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

    console.log(updatedArrayOfObjects);
    

    // Update the state with the modified post_graduate array
    setResumeInfo({
      ...resumeInfo,
      edu: {
        ...resumeInfo.edu,
        blank_year: updatedArrayOfObjects,
      },
    });
  };


  

  return (
    <Stack>
      <VStack spacing={4} align="flex-start">
        <FormControl>
          <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
            <FormControl>
            <FormLabel  style={{ fontWeight: 'bold' }} >Post Graduation/Masters* </FormLabel>
            </FormControl>
            <FormControl>
              <Select
                placeholder="Select an option"
              
                onChange={(e) => {
                  const updateValue = {
                    ...resumeInfo.edu,
                    grad:  e.target.value,
                  };
                  const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                  setResumeInfo(updateResumeInfo);
                }}
              >
                <option value="postBSc">Post B.Sc.</option>
                <option value="postGrad">Post Graduation</option>
                <option value="master">Master Program</option>
                <option value="other">Any other course</option>
              </Select>
            </FormControl>
          </SimpleGrid><br/>
          <Divider
            orientation="horizontal"
            borderColor="#2F4F4F"
            borderWidth="2px"
          />
{
  semestersOfPostGraduate.map((ele, i)=>{
    
    return <div>
               <br/>
               <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
            <FormControl>
              <FormLabel>Year/Semester*</FormLabel>
            </FormControl>
            <FormControl>
              <Select
                placeholder="Select an option"
                onChange={(e) => {
                  handleInput("year_no", e.target.value, i)
                  // const updateValue = {
                  //   ...resumeInfo.edu,
                  //   post_graduate : [
                  //     ...resumeInfo.edu.post_graduate , {...post_graduate[0], year_no : e.target.value }
                  //   ],
                  // };
                  // const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                  // setResumeInfo(updateResumeInfo);
                }}
              >
                <option value="3">Year 3/Semester 3</option>
                <option value="2">Year 2/Semester 2</option>
                <option value="1">Year 1/Semester 1</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>from/von*</FormLabel>
            </FormControl>
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
                    //   ...resumeInfo.edu,
                    //   post_graduate : {
                    //     ...resumeInfo.edu.post_graduate[0], from_date : formattedDate 
                    // },
                    // };
                    // const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                    // setResumeInfo(updateResumeInfo);
                    handleInput("from_date", formattedDate, i)
                  }
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel>To/bis*</FormLabel>
            </FormControl>
            <FormControl>
              <Input
                type="date"
              
                onChange={(e) => {
                  const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component
              
                  if (!isNaN(selectedDate.getTime()) ) {
                    const day = String(selectedDate.getDate()).padStart(2, '0');
                    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                    const year = selectedDate.getFullYear();
              
                    const formattedDate = `${day}-${month}-${year}`;
                    handleInput("to_date", formattedDate, i)
                  }
                }}
              />
            </FormControl>
          </SimpleGrid>
          <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
            <FormControl>
              <formlable>Upload Marksheets(pdf)*</formlable>
            </FormControl>

            <FormControl>
              <Input
                type="file"
                marginRight={8}
                // onChange={handleFileChange}
                onChange={(e)=>{
                  const ext = e.target.files[0].name.split(".")[e.target.files[0].name.split(".").length - 1]
                  // handleInput(`post_graduation_marksheet_${resumeInfo.edu.post_graduate[i].year_no}`,  e.target.files[0], i);
                  // setResumeInfo({...resumeInfo.edu, under_graduation_marksheet_3 :  e.target.files[0]})
                  handleInput("marksheet", `post_graduation_marksheet_${resumeInfo.edu.post_graduate[i].year_no}.${ext}`, i, e.target.files[0])
                  // const updateValue = {
                  //   ...resumeInfo.files,
                  //   [`post_graduation_marksheet_${resumeInfo.edu.post_graduate[i].year_no}`] : e.target.files[0],
                  // };
                  // const updateResumeInfo = { ...resumeInfo, files: updateValue };
                  // setResumeInfo(updateResumeInfo);
                }}
                variant="whatsapp" // Apply the WhatsApp variant
                w="8rem"
              />
              <Button
                color="#00b0ff"
                onClick={handleAddInput}
                marginRight={"4%"}
              >
                View
              </Button>
              <Button color="red" onClick={handleAddInput}>
                Delete
              </Button>{selectedFile && (
  <Text mt={2}>Selected file: {selectedFile.name}</Text>)}
            </FormControl>
          </SimpleGrid><br/>
        

          
          <Divider
            orientation="horizontal"
            borderColor="#2F4F4F"
            borderWidth="2px"
          />


 <br/>
<FormControl>
            <FormLabel>
              Name of school - university/ Schule -Universität
            </FormLabel>
            <Input
              type="text"
              placeholder=" university/ Schule -Universität"
              // value={resumeInfo.edu.University}
              onChange={(e) => {
                // const updateValue = {
                //   ...resumeInfo.edu,
                //   University: e.target.value,
                // };
                // const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                // setResumeInfo(updateResumeInfo);
                handleAddInput("institute", e.target.value, i)
              }}
            />
          </FormControl>   <br/>   
            <Divider
                orientation="horizontal"
                borderColor="#2F4F4F"
                borderWidth="2px"
              />
              <br/>
     
    </div>
  })
}


          <Button marginRight={2} color="#00b0ff" onClick={()=>addOneBlock(semestersOfPostGraduate, setSemestersOfPostGraduate)}>
            Add
          </Button>
          <Button
            color="red"
            onClick={() => {
              // const lastBlock = blocks[blocks.length - 1];
              // if (lastBlock) {
              //   deleteBlock(lastBlock.id);
              // }
              removeBlock(semestersOfPostGraduate, setSemestersOfPostGraduate)
            }}
          >
            Delete
          </Button>
        </FormControl>
      </VStack>
      <br />

      <br /><br/>
      <VStack spacing={4} align="flex-start">
        <FormControl>
          <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
            <FormControl>
            <FormLabel style={{ fontWeight: 'bold' }}> Under Graduate Degree/Diploma *</FormLabel>
            </FormControl>
            <FormControl>
              <Select
                placeholder="Select an option"
                // value={resumeInfo.edu.Ugrad}
                onChange={(e) => {
                  const updateValue = {
                    ...resumeInfo.edu,
                    Ugrad: e.target.value,
                  };
                  const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                  setResumeInfo(updateResumeInfo);
                }}
              >
                <option value="	Under Graduate Degree">
                  {" "}
                  Under Graduate Degree
                </option>
                <option value="Diploma">Diploma</option>
              </Select>
            </FormControl><br/>
          </SimpleGrid>
 {
  semestersOfUnderGraduate.map((ele, i)=>{
    return <div>
                
          <Divider
            orientation="horizontal"
            borderColor="#2F4F4F"
            borderWidth="2px"
          />
          <br />
          <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
            <FormControl>
              <FormLabel>Year/Semester* </FormLabel>
            </FormControl>
            <FormControl>
              <Select
                placeholder="Select an option"
                onChange={(e) => {
                  // const updateValue = {
                  //   ...resumeInfo.edu,
                  //   yea2: e.target.value,
                  // };
                  // const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                  // setResumeInfo(updateResumeInfo);
                  handleInputUnderGraduate("year_no" , e.target.value, i)
                }}
              >
                <option value="3">Year 3/Semester 3</option>
                <option value="2">Year 2/Semester 2</option>
                <option value="1">Year 1/Semester 1</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>from/von*</FormLabel>
            </FormControl>
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
                    //   ...resumeInfo.edu,
                    //   from2: formattedDate,
                    // };
              
                    // const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                    // setResumeInfo(updateResumeInfo);
                    handleInputUnderGraduate("from_date", formattedDate, i)
                  }
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel>To/bis*</FormLabel>
            </FormControl>
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
                    //   ...resumeInfo.edu,
                    //   to2: formattedDate,
                    // };
              
                    // const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                    // setResumeInfo(updateResumeInfo);
                    handleInputUnderGraduate("to_date", formattedDate, i)
                  }
                }}
              />
            </FormControl>
          </SimpleGrid>
          <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
            <FormControl>
              <formlable>Upload Marksheets(pdf)*</formlable>
            </FormControl>

            <FormControl>
              <Input
                marginRight={8}
                type="file"
                onChange={(e)=>{
                  // handleFileChange()
                  // handleInput(`under_graduation_marksheet_${resumeInfo.edu.under_graduate[i].year_no}`, e.target.files[0], i);
                  const ext = e.target.files[0].name.split(".")[e.target.files[0].name.split(".").length - 1]
                  handleInputUnderGraduate("marksheet", `under_graduation_marksheet_${resumeInfo.edu.under_graduate[i].year_no}.${ext}`, i, e.target.files[0])
                  
                }}
                // onChange={(e)=>{
                  // handleInputUnderGraduate("marksheet" , e.target.files[0], i)
                // }}
                variant="whatsapp" // Apply the WhatsApp variant
                w="8rem"
              />
           
          
              <Button
                color="#00b0ff"
                onClick={handleAddInput}
                marginRight={"4%"}
              >
                View
              </Button>
              <Button color="red" onClick={handleAddInput}>
                Delete
              </Button>{selectedFile && (
  <Text mt={2}>Selected file: {selectedFile.name}</Text>
)}
            </FormControl>
          </SimpleGrid>
        <br/>
          <Divider
            orientation="horizontal"
            borderColor="#2F4F4F"
            borderWidth="2px"
          />
           
<br/>
<FormControl>
              <FormLabel>
                Name of school - university/ Schule -Universität{" "}
              </FormLabel>
            </FormControl>
            <FormControl>
              <Input
                type="text"
                placeholder=" university/ Schule -Universität"
                // value={resumeInfo.edu.University1}
                onChange={(e) => {
                  // const updateValue = {
                  //   ...resumeInfo.edu,
                  //   University1: e.target.value,
                  // };
                  // const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                  // setResumeInfo(updateResumeInfo);
                  handleInputUnderGraduate("institute", e.target.value, i)
                }}
              /> 
            </FormControl><br/>
          <Divider
            orientation="horizontal"
            borderColor="#2F4F4F"
            borderWidth="2px"
          />
    </div>
  })
 }
<br/>
          <Button marginRight={2} color="#00b0ff" onClick={()=>addOneBlock(semestersOfUnderGraduate, setSemestersOfUnderGraduate)}>
            Add
          </Button>
          <Button
            color="red"
            onClick={() => {
              // const lastBlock = blocks2[blocks2.length - 1];
              // if (lastBlock) {
              //   deleteBlock2(lastBlock.id);
              // }
              removeBlock(semestersOfUnderGraduate, setSemestersOfUnderGraduate)
            }}
          >
            Delete
          </Button>
        </FormControl>
      </VStack>
      <br />

      <br /><br/>

      <FormControl>
      <FormLabel style={{ fontWeight: 'bold', }}>12th Standard*</FormLabel>
      </FormControl>
      <Divider
        orientation="horizontal"
        borderColor="#2F4F4F"
        borderWidth="2px"
      /><br/>

      <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">

      <FormControl>
              <FormLabel>from/von*</FormLabel>
            </FormControl>
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
              
                    const updateValue = {
                      ...resumeInfo.edu,
                      twelweth: {...resumeInfo.edu.twelweth, from_date :formattedDate},
                    };
              
                    const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                    setResumeInfo(updateResumeInfo);
                  }
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel>To/bis* </FormLabel>
            </FormControl>
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
              
                    const updateValue = {
                      ...resumeInfo.edu,
                      twelweth: {...resumeInfo.edu.twelweth, to_date :formattedDate},
                    };
              
                    const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                    setResumeInfo(updateResumeInfo);
                  }
                }}
              />
            </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
        <FormControl>
        <formlable>Upload Marksheets(pdf)*</formlable>
        </FormControl>

        <FormControl>
          <Input
            type="file"
            marginRight={8}
            onChange={(e)=>{
              // handleFileChange()
              
              const ext = e.target.files[0].name.split(".")[e.target.files[0].name.split(".").length - 1]
              const updateValue = {
                ...resumeInfo.files,
                twelweth_marksheet : e.target.files[0],
              };
              const updateedu = {
                ...resumeInfo.edu,
                twelweth: {...resumeInfo.edu.twelweth, marksheet:`twelweth_marksheet.${ext}`}
              };
              const updateResumeInfo = { ...resumeInfo, files: updateValue, edu : updateedu };
              setResumeInfo(updateResumeInfo);
            }}
            variant="whatsapp" // Apply the WhatsApp variant
            w="8rem"
          />
          
      
          <Button color="#00b0ff" onClick={handleAddInput} marginRight={"4%"}>
            View
          </Button>
          <Button color="red" onClick={handleAddInput}>
            Delete
          </Button>{selectedFile && (
  <Text mt={2}>Selected file: {selectedFile.name}</Text>
)}
        </FormControl>
      </SimpleGrid>
      <FormControl>
          <FormLabel>
            Name of school - university/ Schule -Universität{" "}
          </FormLabel>
        </FormControl>
        <FormControl>
          <Input
            type="text"
            placeholder=" university/ Schule -Universität"
            value={resumeInfo.edu.twelweth.institute}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.edu,
                twelweth: {...resumeInfo.edu.twelweth, institute :e.target.value},
              };
        
              const updateResumeInfo = { ...resumeInfo, edu: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl><br/>
      <Divider
        orientation="horizontal"
        borderColor="#2F4F4F"
        borderWidth="2px"
      />
 <br/> <br/> <br/> 
      <FormControl>
      <FormLabel style={{ fontWeight: 'bold' }}>11th Standard*</FormLabel>
      </FormControl>
      <Divider
        orientation="horizontal"
        borderColor="#2F4F4F"
        borderWidth="2px"
      />
      <br/>

      <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
      <FormControl>
              <FormLabel>from/von*</FormLabel>
            </FormControl>
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
              
                    const updateValue = {
                      ...resumeInfo.edu,
                      eleventh: {...resumeInfo.edu.eleventh, from_date :formattedDate},
                    };
              
                    const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                    setResumeInfo(updateResumeInfo);
                  }
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel>To/bis* </FormLabel>
            </FormControl>
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
              
                    const updateValue = {
                      ...resumeInfo.edu,
                      eleventh: {...resumeInfo.edu.eleventh, to_date :formattedDate},
                    };
              
                    const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                    setResumeInfo(updateResumeInfo);
                  }
                }}
              />
            </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
        <FormControl>
        <formlable>Upload Marksheets(pdf)*</formlable>
        </FormControl>

        <FormControl>
          <Input
            type="file"
            marginRight={8}
            onChange={(e)=>{
              // handleFileChange()
              
              const ext = e.target.files[0].name.split(".")[e.target.files[0].name.split(".").length - 1]
              const updateValue = {
                ...resumeInfo.files,
                eleventh_marksheet : e.target.files[0],
              };
              const updateedu = {
                ...resumeInfo.edu,
                eleventh: {...resumeInfo.edu.eleventh, marksheet:`eleventh_marksheet.${ext}`}
              };
              const updateResumeInfo = { ...resumeInfo, files: updateValue, edu : updateedu };
              setResumeInfo(updateResumeInfo);
            }}
            variant="whatsapp" // Apply the WhatsApp variant
            w="8rem"
          />
      
      
          <Button color="#00b0ff" onClick={handleAddInput} marginRight={"4%"}>
            View
          </Button>
          <Button color="red" onClick={handleAddInput}>
            Delete
          </Button>{selectedFile && (
  <Text mt={2}>Selected file: {selectedFile.name}</Text>
)}
        </FormControl>
      </SimpleGrid>
      <FormControl>
          <FormLabel>
            Name of school - university/ Schule -Universität{" "}
          </FormLabel>
        </FormControl>
        <FormControl>
          <Input
            type="text"
            placeholder=" university/ Schule -Universität"
            value={resumeInfo.edu.eleventh.institute}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.edu,
                eleventh: {...resumeInfo.edu.eleventh, institute : e.target.value},
              };
        
              const updateResumeInfo = { ...resumeInfo, edu: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl><br/>
      <Divider
        orientation="horizontal"
        borderColor="#2F4F4F"
        borderWidth="2px"
      />
 <br/> <br/> <br/> 

      <FormControl>
      <FormLabel style={{ fontWeight: 'bold' }}>10th Standard*</FormLabel>
      </FormControl>
      <Divider
        orientation="horizontal"
        borderColor="#2F4F4F"
        borderWidth="2px"
      />
<br/>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">

      <FormControl>
              <FormLabel>from/von*</FormLabel>
            </FormControl>
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
              
                    const updateValue = {
                      ...resumeInfo.edu,
                      tenth: {...resumeInfo.edu.tenth, from_date :formattedDate},
                    };
              
                    const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                    setResumeInfo(updateResumeInfo);
                  }
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel>To/bis* </FormLabel>
            </FormControl>
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
              
                    const updateValue = {
                      ...resumeInfo.edu,
                      tenth: {...resumeInfo.edu.tenth, to_date :formattedDate},
                    };
              
                    const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                    setResumeInfo(updateResumeInfo);
                  }
                }}
              />
            </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
        <FormControl>
        <formlable>Upload Marksheets(pdf)*</formlable>
        </FormControl>

        <FormControl>
          <Input
            type="file"
            marginRight={8}
            onChange={(e)=>{
              // handleFileChange()
              
              const ext = e.target.files[0].name.split(".")[e.target.files[0].name.split(".").length - 1]
              const updateValue = {
                ...resumeInfo.files,
                tenth_marksheet : e.target.files[0],
              };
              
              const updateedu = {
                ...resumeInfo.edu,
                tenth: {...resumeInfo.edu.tenth, marksheet:`tenth_marksheet.${ext}`}
              };
              const updateResumeInfo = { ...resumeInfo, files: updateValue, edu : updateedu };
              setResumeInfo(updateResumeInfo);
            }}
            variant="whatsapp" // Apply the WhatsApp variant
            w="8rem"
          />
         
       
          <Button color="#00b0ff" onClick={handleAddInput} marginRight={"4%"}>
            View
          </Button>
          <Button color="red" onClick={handleAddInput}>
            Delete
          </Button>{selectedFile && (
  <Text mt={2}>Selected file: {selectedFile.name}</Text>
)}
        </FormControl>
      </SimpleGrid>
      <FormControl>
          <FormLabel>
            Name of school - university/ Schule -Universität{" "}
          </FormLabel>
        </FormControl>
        <FormControl>
          <Input
            type="text"
            placeholder=" university/ Schule -Universität"
            value={resumeInfo.edu.tenth.institute}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.edu,
                tenth: {...resumeInfo.edu.tenth, institute : e.target.value},
              };
        
              const updateResumeInfo = { ...resumeInfo, edu: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl><br/>
      <Divider
        orientation="horizontal"
        borderColor="#2F4F4F"
        borderWidth="2px"
      />
 <br/> <br/> <br/>
      <FormControl>
      <FormLabel style={{ fontWeight: 'bold' }}>1st to 9th Standard*</FormLabel>
      </FormControl>
      <Divider
        orientation="horizontal"
        borderColor="#2F4F4F"
        borderWidth="2px"
      />

<br/>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
       
        <FormControl>
              <FormLabel>from/von*</FormLabel>
            </FormControl>
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
              
                    const updateValue = {
                      ...resumeInfo.edu,
                      first_to_ninth: {...resumeInfo.edu.first_to_ninth, from_date :formattedDate},
                    };
              
                    const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                    setResumeInfo(updateResumeInfo);
                  }
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel>To/bis* </FormLabel>
            </FormControl>
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
              
                    const updateValue = {
                      ...resumeInfo.edu,
                      first_to_ninth: {...resumeInfo.edu.first_to_ninth, to_date :formattedDate},
                    };
              
                    const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                    setResumeInfo(updateResumeInfo);
                  }
                }}
              />
            </FormControl>



            <FormControl>
          <FormLabel>
            Name of school - university/ Schule -Universität{" "}*
          </FormLabel>
        </FormControl>
        <FormControl>
          <Input
            type="text"
            placeholder=" university/ Schule -Universität"
            value={resumeInfo.edu.first_to_ninth.institute}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.edu,
                first_to_ninth: {...resumeInfo.edu.first_to_ninth, institute :e.target.value},
              };
        
              const updateResumeInfo = { ...resumeInfo, edu: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>

      </SimpleGrid>
      <br/>

      <Divider
        orientation="horizontal"
        borderColor="#2F4F4F"
        borderWidth="2px"
      />
 <br/> <br/> <br/> 

      <SimpleGrid>
        <FormControl>
        <FormLabel style={{ fontWeight: 'bold' }}>Blank Year(if any)*</FormLabel>
        </FormControl>
        <Divider
          orientation="horizontal"
          borderColor="#2F4F4F"
          borderWidth="2px"
        />
        <br />
      </SimpleGrid>
      {
        blankYear.map((ele, i)=>{
          return <VStack spacing={4} align="flex-start">
          <FormControl>
            <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
              <FormControl>
                <FormLabel>Reason for Break* </FormLabel>
              </FormControl>
              <FormControl>
                <Input
                  type="text"
                  placeholder=" Reason for Break"
                  // value={resumeInfo.edu.Reason}
                  onChange={(e) => {
                    // const updateValue = {
                    //   ...resumeInfo.edu,
                    //   Reason: e.target.value,
                    // };
                    // const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                    // setResumeInfo(updateResumeInfo);
                    handleInputBlankYear("reason", e.target.value, i)
                  }}
                />
              </FormControl>
            </SimpleGrid>
  
            <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
            <FormControl>
                <FormLabel>from/von*</FormLabel>
              </FormControl>
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
                      //   ...resumeInfo.edu,
                      //   from7: formattedDate,
                      // };
                
                      // const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                      // setResumeInfo(updateResumeInfo);
                      handleInputBlankYear("from_date", formattedDate,i)
                    }
                  }}
                />
              </FormControl>
  
              <FormControl>
                <FormLabel>To/bis* </FormLabel>
              </FormControl>
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
                      //   ...resumeInfo.edu,
                      //   to7: formattedDate,
                      // };
                
                      // const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                      // setResumeInfo(updateResumeInfo);
                      handleInputBlankYear("to_date", formattedDate,i)
                    }
                  }}
                />
              </FormControl>
  
            </SimpleGrid>
              <br/>
            <Divider
              orientation="horizontal"
              borderColor="#2F4F4F"
              borderWidth="2px"
            />
            <br/>
            <Button marginRight={2} color="#00b0ff" onClick={()=>addOneBlock(blankYear, setBlankYear)}>
              Add
            </Button>
            <Button
              color="red"
              onClick={() => {
                // const lastBlock = blocks3[blocks3.length - 1];
                // if (lastBlock) {
                //   deleteBlock3(lastBlock.id);
                // }
                removeBlock(blankYear, setBlankYear)
              }}
            >
              Delete
            </Button>
          </FormControl><br/>
        </VStack>
        })
      }
      <p style={paragraphStyle}>
         Attention!! German Authorities and
        Employers need a gapless (!) CV. Enter your educational qualification,
        years of completion of that education qualification with at most care
        and Very Correctly. You also need to specify all the educational
        qualification you have achieved till date (today!). Provide correct
        information. If you have taken a break in between your education,
        mention that also with the help of blank field. Declaration of
        information regarding your educational background is mandatory.
        Transparency is key to success. Remember: - A simple mistake can cause
        your VISA & Recognition process rejection.{" "}
        </p> <br/> <br/>
      <Divider
        orientation="horizontal"
        borderColor="#2F4F4F"
        borderWidth="2px"
      />
      <br />
      <br />
      <br/>
      <FormControl>
      <FormLabel style={{ fontWeight: 'bold' }}>Language Proficiency / Sprachkenntnisse: *</FormLabel>
      </FormControl>

      <Divider
        orientation="horizontal"
        borderColor="#2F4F4F"
        borderWidth="2px"
      /><br/>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} placeItems="center">
        <FormControl>
          <FormLabel>Mother tongue/ Muttersprache*</FormLabel>
          <Input
            type="text"
            placeholder="Mothen tongue"
            value={resumeInfo.edu.mother_tongue}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.edu,
                mother_tongue: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, edu: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
        </FormControl>

        <FormControl>
          <FormLabel>English/ Englisch* </FormLabel>
          <Select
            placeholder="Select an option"
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.edu,
                english_level :  e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, edu: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          >
            <option value="Good/ Gut">Good/ Gut </option>
            <option value="Average/ Durchschnittlich">Average/ Durchschnittlich </option>
            <option value="Poor /Schlecht">Poor /Schlecht </option>
          </Select>
        </FormControl>
        <br />
      </SimpleGrid>
      <Divider
        orientation="horizontal"
        borderColor="#2F4F4F"
        borderWidth="2px"
      />
 <br/> <br/> <br/>
 <formlable style={{ fontWeight: 'bold' }}>German / Deutsch*</formlable>
      <Divider
        orientation="horizontal"
        borderColor="#2F4F4F"
        borderWidth="2px"
      /> <br/> 
      <Stack>
        <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
          <FormControl>
            <FormLabel>Select an option*</FormLabel>
          </FormControl>
          <FormControl>
          <Select
  placeholder="Select option"
  value={resumeInfo?.edu?.level[0]}
  onChange={(e) => {
   
    const newYear = [...(resumeInfo?.edu?.level[0] || [])];
    newYear[0] = e.target.value;;

    const updateValue = {
      ...resumeInfo.edu,
      level: newYear,
    };
    const updateResumeInfo = { ...resumeInfo, edu: updateValue };
    setResumeInfo(updateResumeInfo);
  }}
>
  {/* Your Select options here */}


              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
            </Select>
          </FormControl>
        
          <FormControl>
                  <FormLabel>from/von*</FormLabel>
                </FormControl>
                <FormControl>
                  <Input
                    type="date"
                    placeholder="mm/yyyy"
                  
                    onChange={(e) => {
                      const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component
                  
                      if (!isNaN(selectedDate.getTime())) {
                        const day = String(selectedDate.getDate()).padStart(2, '0');
                        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                        const year = selectedDate.getFullYear();
                  
                        const formattedDate = `${day}-${month}-${year}`;
                  
                        const updateValue = {
                          ...resumeInfo.edu,
                          german: {...resumeInfo.edu.german, from :formattedDate },
                        };
                  
                        const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                        setResumeInfo(updateResumeInfo);
                      }
                    }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>To/bis* </FormLabel>
                </FormControl>
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
                  
                        const updateValue = {
                          ...resumeInfo.edu,
                          german: {...resumeInfo.edu.german, to :formattedDate },
                        };
                  
                        const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                        setResumeInfo(updateResumeInfo);
                      }
                    }}
                  />
                </FormControl>
                <FormControl>
                <FormLabel>Certificate (Level / date)/ Zertifikat (Stufe/Datum) *</FormLabel>
                </FormControl>
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
                  
                        const updateValue = {
                          ...resumeInfo.edu,
                          german: {...resumeInfo.edu.german, certification_date :formattedDate },
                        };
                  
                        const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                        setResumeInfo(updateResumeInfo);
                      }
                    }}
                  />
                </FormControl>
        </SimpleGrid><br/>
        {(resumeInfo?.edu?.level[0] === "B1" || resumeInfo?.edu?.level[0] === "B2") && (
          <FormControl>
            <SimpleGrid columns={[1, 1, 1, 3]} spacing={1} placeItems="center">
              <FormControl>
                <FormLabel>Listening Module Marksheet*</FormLabel>
              </FormControl>
              <FormControl>
                <Input
                  type="file"
                  marginRight={8}
                  onChange={(e)=>{
                    // handleFileChange()
                    // const updateValue = {
                    //   ...resumeInfo.files,
                    //   twelweth_marksheet : e.target.files[0],
                    // };
                    // const updateResumeInfo = { ...resumeInfo, files: updateValue };
                    // setResumeInfo(updateResumeInfo);
                  }}
                  variant="whatsapp" // Apply the WhatsApp variant
                />
                {selectedFile && (
                  <Text mt={2}>Selected file: {selectedFile.name}</Text>
                )}
              </FormControl>
              <FormControl>
                <Button
                  color="#00b0ff"
                  onClick={handleAddInput}
                  marginRight={"4%"}
                >
                  View
                </Button>
                <Button color="red" onClick={handleAddInput}>
                  Delete
                </Button>
              </FormControl>
              <FormControl>
                <FormLabel>Speaking Module Marksheet*</FormLabel>
              </FormControl>
              <FormControl>
                <Input
                  type="file"
                  onChange={handleFileChange}
                  marginRight={8}
                  variant="whatsapp" // Apply the WhatsApp variant
                />
                {selectedFile && (
                  <Text mt={2}>Selected file: {selectedFile.name}</Text>
                )}
              </FormControl>
              <FormControl>
                <Button
                  color="#00b0ff"
                  onClick={handleAddInput}
                  marginRight={"4%"}
                >
                  View
                </Button>
                <Button color="red" onClick={handleAddInput}>
                  Delete
                </Button>
              </FormControl>
              <FormControl>
                <FormLabel>Reading Module Marksheet*</FormLabel>
              </FormControl>
              <FormControl>
                <Input
                  type="file"
                  onChange={handleFileChange}
                  marginRight={8}
                  variant="whatsapp" // Apply the WhatsApp variant
                />
                {selectedFile && (
                  <Text mt={2}>Selected file: {selectedFile.name}</Text>
                )}
              </FormControl>
              <FormControl>
                <Button
                  color="#00b0ff"
                  onClick={handleAddInput}
                  marginRight={"4%"}
                >
                  View
                </Button>
                <Button color="red" onClick={handleAddInput}>
                  Delete
                </Button>
              </FormControl>
              <FormControl>
                <FormLabel>Writing Module Marksheet*</FormLabel>
              </FormControl>
              <FormControl>
                <Input
                  type="file"
                  marginRight={8}
                  onChange={handleFileChange}
                  variant="whatsapp" // Apply the WhatsApp variant
                />
                {selectedFile && (
                  <Text mt={2}>Selected file: {selectedFile.name}</Text>
                )}
              </FormControl>
              <FormControl>
                <Button
                  color="#00b0ff"
                  onClick={handleAddInput}
                  marginRight={"4%"}
                >
                  View
                </Button>
                <Button color="red" onClick={handleAddInput}>
                  Delete
                </Button>
              </FormControl>
            </SimpleGrid>
          </FormControl>
        )}
        <Divider
          orientation="horizontal"
          borderColor="#2F4F4F"
          borderWidth="2px"
        />
      </Stack>

      <FormControl>
        {blocks.map((block) => (
          <Stack>
            <SimpleGrid columns={[1, 1, 1, 2]} spacing={1} placeItems="center">
              <FormControl>
                <FormLabel>Select an option</FormLabel>
              </FormControl>
              <FormControl>
                <Select
                  placeholder="Select option"
                  value={selectedOption}
                  onChange={handleOptionChange}
                >
                  <option value="A1">A1</option>
                  <option value="A2">A2</option>
                  <option value="B1">B1</option>
                  <option value="B2">B2</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>from/von</FormLabel>
              </FormControl>
              <FormControl>
                <Input
                  type="date"
                  placeholder="mm/yyyy"
                  value={resumeInfo.edu.from1}
                  onChange={(e) => {
                    const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component
                
                    if (!isNaN(selectedDate.getTime())) {
                      const day = String(selectedDate.getDate()).padStart(2, '0');
                      const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                      const year = selectedDate.getFullYear();
                
                      const formattedDate = `${day}-${month}-${year}`;
                
                      const updateValue = {
                        ...resumeInfo.edu,
                        to6: formattedDate,
                      };
                
                      const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                      setResumeInfo(updateResumeInfo);
                    }
                  }}
                />
              </FormControl>

              <FormControl>
                <FormLabel>To/bis </FormLabel>
              </FormControl>
              <FormControl>
                <Input
                  type="date"
                  placeholder="mm/yyyy"
                  value={resumeInfo.edu.to1}
                  onChange={(e) => {
                    const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component
                
                    if (!isNaN(selectedDate.getTime())) {
                      const day = String(selectedDate.getDate()).padStart(2, '0');
                      const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                      const year = selectedDate.getFullYear();
                
                      const formattedDate = `${day}-${month}-${year}`;
                
                      const updateValue = {
                        ...resumeInfo.edu,
                        to6: formattedDate,
                      };
                
                      const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                      setResumeInfo(updateResumeInfo);
                    }
                  }}
                />
              </FormControl>
              <FormLabel>
                Certificate (Level / date)/ Zertifikat (Stufe/Datum)*
              </FormLabel>
              <FormControl>
                {" "}
                <Input
                  type="date"
                  placeholder="dd/mm/yyyy"
                  value={name}
                  onChange={(e) => {
                    const selectedDate = new Date(e.target.value + 'T00:00:00'); // Adding time component
                
                    if (!isNaN(selectedDate.getTime())) {
                      const day = String(selectedDate.getDate()).padStart(2, '0');
                      const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                      const year = selectedDate.getFullYear();
                
                      const formattedDate = `${day}-${month}-${year}`;
                
                      const updateValue = {
                        ...resumeInfo.edu,
                        to6: formattedDate,
                      };
                
                      const updateResumeInfo = { ...resumeInfo, edu: updateValue };
                      setResumeInfo(updateResumeInfo);
                    }
                  }}
                />
              </FormControl>
            </SimpleGrid>
            {(selectedOption === "B1" || selectedOption === "B2") && (
              <FormControl>
                <SimpleGrid
                  columns={[1, 1, 1, 3]}
                  spacing={1}
                  placeItems="center"
                >
                  <FormControl>
                    <FormLabel>Listening Module Marksheet*</FormLabel>
                  </FormControl>
                  <FormControl>
                    <Input
                      type="file"
                      onChange={handleFileChange}
                      variant="whatsapp" // Apply the WhatsApp variant
                    />
                    {selectedFile && (
                      <Text mt={2}>Selected file: {selectedFile.name}</Text>
                    )}
                  </FormControl>
                  <FormControl>
                    <Button
                      color="#00b0ff"
                      onClick={handleAddInput}
                      marginRight={"4%"}
                    >
                      View
                    </Button>
                    <Button color="#00b0ff" onClick={handleAddInput}>
                      Delete
                    </Button>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Speaking Module Marksheet*</FormLabel>
                  </FormControl>
                  <FormControl>
                    <Input
                      type="file"
                      onChange={handleFileChange}
                      variant="whatsapp" // Apply the WhatsApp variant
                    />
                    {selectedFile && (
                      <Text mt={2}>Selected file: {selectedFile.name}</Text>
                    )}
                  </FormControl>
                  <FormControl>
                    <Button
                      color="#00b0ff"
                      onClick={handleAddInput}
                      marginRight={"4%"}
                    >
                      View
                    </Button>
                    <Button color="#00b0ff" onClick={handleAddInput}>
                      Delete
                    </Button>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Reading Module Marksheet*</FormLabel>
                  </FormControl>
                  <FormControl>
                    <Input
                      type="file"
                      onChange={handleFileChange}
                      variant="whatsapp" // Apply the WhatsApp variant
                    />
                    {selectedFile && (
                      <Text mt={2}>Selected file: {selectedFile.name}</Text>
                    )}
                  </FormControl>
                  <FormControl>
                    <Button
                      color="#00b0ff"
                      onClick={handleAddInput}
                      marginRight={"4%"}
                    >
                      View
                    </Button>
                    <Button color="#00b0ff" onClick={handleAddInput}>
                      Delete
                    </Button>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Writing Module Marksheet*</FormLabel>
                  </FormControl>
                  <FormControl>
                    <Input
                      type="file"
                      onChange={handleFileChange}
                      variant="whatsapp" // Apply the WhatsApp variant
                    />
                    {selectedFile && (
                      <Text mt={2}>Selected file: {selectedFile.name}</Text>
                    )}
                  </FormControl>
                  <FormControl>
                    <Button
                      color="#00b0ff"
                      onClick={handleAddInput}
                      marginRight={"4%"}
                    >
                      View
                    </Button>
                    <Button color="#00b0ff" onClick={handleAddInput}>
                      Delete
                    </Button>
                  </FormControl>
                </SimpleGrid>
              </FormControl>
            )}
            <Divider
              orientation="horizontal"
              borderColor="#2F4F4F"
              borderWidth="2px"
            />
          </Stack>
        ))}
<br/>
        <Button marginRight={2} color="#00b0ff" onClick={addBlock}>
          Add
        </Button>
        <Button
          color="red"
          onClick={() => {
            const lastBlock = blocks[blocks.length - 1];
            if (lastBlock) {
              deleteBlock(lastBlock.id);
            }
          }}
        >
          Delete
        </Button>
      </FormControl><br/>
      <br/>

    

      <SimpleGrid columns={[1, 1, 1, 2]} spacing={4} >
        <HStack spacing={8}>
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
        </HStack>
      </SimpleGrid>
    </Stack>
  );
};

export default PersonalDetails;
