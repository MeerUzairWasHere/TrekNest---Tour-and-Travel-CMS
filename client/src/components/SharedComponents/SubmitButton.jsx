import { useNavigation } from 'react-router-dom';
const SubmitButton = ({ formBtn,text,loadingText }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <button 
      type='submit'
      className='form-button'
      disabled={isSubmitting}
    >
      {isSubmitting ? loadingText : text}
    </button>
  );
};
export default SubmitButton;