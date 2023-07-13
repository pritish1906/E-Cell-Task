import { useForm, Controller } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../config/firebase'
import { useNavigate } from 'react-router-dom'
import "yup-phone";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    height: 98vh;
    width: 98vw;
    align-items: center;
    justify-content: center;
    /* background-color: antiquewhite; */
    background-image : url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPtNEczYMHqMXd9BM7WLKvZykugL06cSYag&usqp=CAU") ;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
   
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 20px; */
    /* margin: auto ; */

    height: 70%;
    width: 70%;
    border: 0px solid ;
    border-radius: 5px;
    box-shadow: 0px 0px 1px 1px #f7f5f5;
    /* background-color: #eae8e8; */
    
`

const Description = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    height: 100%;
    width: 100%;
    background-color: #7f99f9;
    border: 0px solid ;
    border-radius: 5px;


`

const Heading1 = styled.h1`
    font-size: 60px;
    font-weight: 900;
    text-align: left;
    color: white;
    margin-left: 20px;
    
`
const Heading2 = styled.h1`
    font-size: 20px;
    font-weight: 100;
    text-align: left;
    margin-top: -10px;
    color: white;
    margin-left: 20px;
    
`
const Heading3 = styled.h1`
    font-size: 25px;
    font-weight: 500;
    text-align: left;
    color: #a0b3f7;
    margin-top: -100px;
    margin-bottom: -100px;
    
    
`

const FormContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    margin: auto;
    height: 100%;
    width: 90%;
    /* background-color: whitesmoke; */
    border-radius: 10px;
    
    
    /* background-color: red; */

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: normal;
    /* padding: 10px; */
    justify-content: space-evenly;
    border: 0px solid black;
    height: 50%;
    width: 70%;
    

    /* background-color: red; */
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 5px 0;
    padding: 10px;
    border: 0px solid black;
    border-radius: 5px;
    

    background-color: #dadff2;
    &:focus {
    outline: none;
    border: 2px solid #a0b3f7;
  }
`
const Button = styled.button`

  border: none;
  padding: 15px 20px;
  background-color: #7f99f9;
  color: white;
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 10px;
  border-radius: 30px;
  
`
const Select = styled.select`
    flex: 1;
    min-width: 40%;
    margin-top: 15px;
    padding: 10px;
    border: 0px solid black;
    border-radius: 5px;
    

    background-color: #dadff2;
    &:focus {
    outline: none;
    border: 2px solid #a0b3f7;
    }

`





interface FormData {
    name: string;
    branch: string;
    email: string;
    phone: number;

}

export const PostForm = () => {

    const navigate = useNavigate();

    const schema = yup.object().shape({
        name: yup.string().required("* You must add a name !!!"),
        branch: yup.string().required("* You must add a branch !!!"),
        email: yup.string().email().required("* You must add a Email !!!"),
        phone: yup.number().required("* You must add a Phone !!!").min(6000000000).max(9999999999)
    })

    const { register, control, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const dataRef = collection(db, "PritishElectrical")


    const onSubmission = async (data: FormData) => {
        const result = await addDoc(dataRef, data);
        console.log(result);
        navigate('/confirmationPage');
    }



    return (
        <Container>
            <Wrapper>
                <Description>
                    <Heading1>TELL US ABOUT YOURSELF </Heading1>
                    <Heading2>Let's create somethign together </Heading2>
                </Description>
                <FormContainer>
                <Heading3>Put in your Details &#128640;</Heading3>
                    <Form >
                        
                        <Input type="text" placeholder='Name...' {...register("name")} />
                        <p className = "formErrors" style={{  color: "red" }}>{errors.name?.message}</p>




                        <Input type="email" placeholder='Email...' {...register("email")} />
                        <p className = "formErrors" style={{ color: "red" }}>{errors.email?.message}</p>


                        <Input type="number" placeholder='Phone...' {...register("phone")} />
                        {errors.phone?.message &&  <p className = "formErrors" style={{ color: "red" }}>Enter a Valid Phone Number</p>}
                        

                        <Select {...register("branch")}>
                            <option value="CSE">CSE</option>
                            <option value="ECE">ECE</option>
                            <option value="EEE">EEE</option>
                            <option value="MNC">MNC</option>
                            <option value="ARC">ARC</option>
                            <option value="BIOCHEM">BIOCHEM</option>
                            <option value="IC">IC</option>
                            <option value="CIV">CIV</option>
                            <option value="MST">MST</option>
                            <option value="MIN">MIN</option>
                            <option value="EP">EP</option>
                            <option value="PHARMA">PHARMA</option>
                            <option value="META">META</option>
                        </Select>




                        <Button onClick={handleSubmit(onSubmission)} type='submit' >
                            SUBMIT
                        </Button>
                    </Form>
                </FormContainer>
            </Wrapper>
        </Container>
    )
}
