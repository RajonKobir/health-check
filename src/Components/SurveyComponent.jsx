import React, { useState } from 'react'
import * as Survey from "survey-react" // import surveyjs
import { questions } from "./content" // these are the survey questions
import DiagramComponent from './DiagramComponent';

// Modern theme
import "survey-react/modern.min.css"


const SurveyComponent = () => {

    const [buttonText, setButtonText] = useState('');
    const [data, setData] = useState('');
    const [show, setShow] = useState(false);
    const [showButton, setShowButton] = useState(false);

    function buttonClick() {
      if(show === true){
        setShow(false);
        setButtonText('Show On Diagram')
      }else{
        setShow(true);
        setButtonText('Back to Test')
      }
    }

  // Apply theme
  Survey.StylesManager.applyTheme("modern")

  // Create a model
  const survey = new Survey.Model(questions)

  survey.onComplete.add(function (sender) {
    setData(sender);
    setShowButton(true);
    setButtonText('Show On Diagram')
  });


  // Render the survey
  return (
      
      <div className="text-center App">
      <br></br>
      <br></br>
      <h1 id="title">Health Calculator</h1>
      {show ?
            <DiagramComponent data={data}/> :
            <Survey.Survey model={survey} id="surveyContainer" />
        }
        <br></br>
        <br></br>
        {showButton ?
            <button onClick={buttonClick} className="">{buttonText}</button>
            :
            null
        }
    </div>
  )
}


export default SurveyComponent