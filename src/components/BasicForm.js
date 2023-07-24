import React, {useRef} from 'react';
const BasicForm = (props) => {
	const nameInputRef = useRef();
	const passwdInputRef = useRef();

	const handleSubmit = (e) => {
		const name = nameInputRef.current.value; 
		const passwd = passwdInputRef.current.value; 
		e.preventDefault();
		alert(name + ' - ' + passwd);
	} 
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-control'>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email' ref={nameInputRef} />
      </div>
      <div className='form-control'>
        <label htmlFor='password'>Your password</label>
        <input type='password' id='passwd' ref={passwdInputRef}/>
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
