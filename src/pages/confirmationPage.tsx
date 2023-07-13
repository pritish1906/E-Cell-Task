import { useNavigate } from 'react-router-dom'

export const ConfirmationPage = () => {
  const navigate = useNavigate();
  const redirectToMainPage = () =>{
    navigate("/");
  }
  return (
    <div>
      <p>Thank You for submitting details...</p>
      <button onClick={redirectToMainPage}>
        Add More Responses
      </button>
    </div>
  )
}
