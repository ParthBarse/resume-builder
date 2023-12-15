import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Link } from '@chakra-ui/react';
import axios from 'axios';



const Admin = () => {
  const [students, setStudents] = useState([]);
  console.log('env'+process.env.REACT_APP_HOST)
  const getAllResumes = async() => {
    const res = await axios({
      method : "get",
      url : `http://${process.env.REACT_APP_HOST}:5000/getAllResumes`,
    })
    if(res.data.success === true){
      setStudents(res.data.resumes)
      console.log(res.data.resumes);
    }
  }

  const deleteResume = async(resumeId) => {
    console.log(resumeId);
    const res = await axios({
      method : "delete",
      url : `http://${process.env.REACT_APP_HOST}:5000/deleteResume`,
      data : {
        resumeId : resumeId
      }
    })
    if(res.data.success === true){
      console.log(res.data);
      getAllResumes()
    }
  }

useEffect(()=>{

  getAllResumes()
}, [])

const user = {
  _id : "857301450afd17735c0f117e"
}
const host = `http://${process.env.REACT_APP_HOST}:5000/public`
 
  return (
    <ChakraProvider >
    
        {students.length>0 ? <Box textAlign="center" p="8" marginBottom={'4%'} overflowX={"scroll"}>
          <Heading mb="4">Registered Students</Heading>
          <Table variant="simple" >
            <Thead>
              <Tr bg="#00b0ff" >
                <Th color="White">Surname</Th>
                <Th color="White">Givenname</Th>
                <Th color="White">Father's Name</Th>
                <Th color="White">Mobile-no</Th>
                <Th color="White">Email-id</Th>
                <Th color="White">Passport Photo</Th>
                <Th color="White">Candidate Photo</Th>
                <Th color="White">View More</Th>
                <Th color="White">CV</Th>
                <Th color="White">Academic Year/Semester</Th>
                <Th color="White">Post graduate Marksheet</Th>
                <Th color="White">Undergraduate/ Diploma Marksheet</Th>
                <Th color="White">12th Marksheet</Th>
                <Th color="White">11th Marksheet</Th>
                <Th color="White">10th Marksheet</Th>
                <Th color="White">Approve</Th>
                <Th color="White">Disapprove</Th>
                <Th color="White">Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {students.map((student, i) => (
                <Tr key={student.id}>
                  <Td bg="white" color="black">
                    {student.sur_name}
                  </Td>
                  <Td bg="white" color="black">
                  {student.given_name} 
                  </Td>
                  <Td>
                    {/* <Link to={`/view/${student.id}`} color="#00b0ff"> */}
                      {student.father_name}
                    {/* </Link> */}
                  </Td>
                  <Td>
                  {/* <Link to={`/view/${student.id}`} color="#00b0ff"> */}
                      {student.contact_number}
                    {/* </Link> */}

                  </Td>
                  <Td>
                      {student.email}
                  </Td>
                  <Td>
                      {/* {"passport photo"} */}
                      {/* <img src={`/${host}/${user._id}/${student.passport}`} alt="passport" /> */}
                      <img src={`${host}/${user._id}/${student.passport}`} alt="candidate" />
                  </Td>
                  <Td>
                      {/* {"candidate photo"} */}
                      <img src={`${host}/${user._id}/${student.candidate}`} alt="candidate" />
                      {/* <img src={`/${host}/${user._id}/${student.candidate}`} alt="candidate" /> */}
                  </Td>
                  <Td>
                      <button >View More</button>
                  </Td>
                  <Td >
                      <button >Download Full CV</button>
                      <button >Download Filtered CV</button>
                  </Td>
                  <Td >
                      <p className='min-w-max'>Year 1/ semester 1</p>
                      <p className='min-w-max'>Year 2/ semester 2</p>
                      <p className='min-w-max'>Year 3/ semester 3</p>
                  </Td>
                  <Td >
                      {student.post_graduate !== undefined && student.post_graduate.length > 0 && student.post_graduate.map((ele, i)=>{
                          console.log("post", ele);
                        return <a href={`${host}/${user._id}/${ele.marksheet}`} color="#00b0ff" target='_blank' rel="noopener noreferrer">
                          View and Download
                        </a>
                      })}
                  </Td>
                  <Td>
                      {student.under_graduate !== undefined && student.under_graduate.length > 0 && student.under_graduate.map((ele)=>{
                        console.log("under", ele);
                        return <a href={`${host}/${user._id}/${ele.marksheet}`} color="#00b0ff" target='_blank' rel="noopener noreferrer">
                          View and Download
                        </a>
                      })}
                  </Td>
                  <Td>
                  <a href={`${host}/${user._id}/${student.twelweth.marksheet}`} color="#00b0ff" target='_blank' rel="noopener noreferrer"> 
                          View and Download
                        </a>
                  </Td>
                  <Td>
                  <a href={`${host}/${user._id}/${student.eleventh.marksheet}`} color="#00b0ff" target='_blank' rel="noopener noreferrer">
                          View and Download
                        </a>
                  </Td>
                  <Td>
                  <a href={`${host}/${user._id}/${student.tenth.marksheet}`} color="#00b0ff" target='_blank' rel="noopener noreferrer">
                          View and Download
                        </a>
                  </Td>
                  <Td>
                        <button className='p-2 bg-green-700 rounded-md text-white' onClick={(e)=>{axios.get(`http://20.197.17.85:5500/sendApprove?email=${student.email}`)}} >Approve</button>
                  </Td>
                  <Td>
                        <button className='p-2 bg-yellow-600 rounded-md text-white'>Disapprove</button>
                  </Td>
                  <Td>
                        <button className='p-2 bg-red-700 rounded-md text-white' onClick={()=>deleteResume(student._id)}>Delete</button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box> : <h2 className='text-center text-5xl'>No Resume to show</h2>}
    
    </ChakraProvider>
  );
};

export default Admin;
