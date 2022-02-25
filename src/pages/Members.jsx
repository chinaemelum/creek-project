import creek_logo  from "../component/assets/logo.png";
import Register from "../component/Register";
import SignIn from "../component/Signin";
const MembersPage = () => {
	
	return (
		<div className='members_body'>
			<div className="members_body_section">
         <div className="backgroung_logo">
		  <a href="/members"><img  className="logo" src={creek_logo} alt="logo" /></a>
		  </div>
		  <div className="form_container">
		  <SignIn />
			<Register />
		  </div>
		  </div>
			
		</div>
	   
		
	  );
	}
	
  
  export default MembersPage;