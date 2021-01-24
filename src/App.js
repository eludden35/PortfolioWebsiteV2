import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './views/Landing';
import React, { useState } from "react";
import pic from './img/circle-cropped.png';
import ReactFullpage from '@fullpage/react-fullpage';

function App() {
    const [modalVisible, setModalVisible] = useState(true);
    const [] = useState("");
	return (
		<div className="main">
            <ReactFullpage
                //fullpage options
                licenseKey = {'YOUR_KEY_HERE'}
                scrollingSpeed = {1000} /* Options here */
            <ReactFullpage.Wrapper>
                    <div className="section">
                        <p>Section 1 (welcome to fullpage.js)</p>
                        <button onClick={() => fullpageApi.moveSectionDown()}>
                        Click me to move down
                        </button>
                    </div>
                    <div className="section">
                        <p>Section 2</p>
                    </div>
                    </ReactFullpage.Wrapper>
                );
            />

		   {/* <Landing modalVisible={modalVisible} setModalVisible={setModalVisible}/>  */}
		// 	<div className="h-100 row align-items-center">
		// 		<div className="col d-flex justify-content-center">
				
		// 			<div className="col col-md-10 jumbotron">
		// 			<div className="col-12 text-center" >
        //                 <h3 className="heading" >About Me</h3>
        //                 <div className="heading-underline"></div>
        //             </div>

        // <div className="row justify-content-center">

        //     <div className="col-md-6 aboutme" >
        //         <div className="row" >
        //             <div className="col-lg-6">
        //                 <img src={pic}/>
        //             </div>
        //             <div className="col-lg-6">
        //                 <p>
        //                     <i className="fas fa-quote-left"></i>
        //                     I am a passionate, aspiring Full-stack Developer that is soon to graduate from the Coding Dojo bootcamp with experience in Python, MERN, and Java. I have previous experience in leaderships roles and equal opportunity advisory. I am a hard-working, quick-learning, and organized individual. I am one that thrives in stressful and team environments. I am independently motivated and focused on writing effective and well-written code. I am excited for a career in software development that will engage, challenge, and progress my abilities.
        //                     <br/>
        //                     <br/>
        //                     <i className="fas fa-lock"></i>  <strong>Secret Security Clearance</strong>

        //                     <hr className="aboutme-hr"/>
        //                     <cite>&#8212; Elonzo, Full Stack Software Developer</cite>
        //                 </p>
        //             </div>
                    

        //         </div>
        //     </div>

        // </div>
		// 			</div>
		// 		</div>
		// 	</div> */
		</div>
	);
}

export default App;
