
import React, { useState } from 'react';
import './App.css';
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import DiagramComponent from './DiagramComponent';
import "survey-core/defaultV2.css";
import "./index.css";
import { json } from "./json";
import { Button } from 'antd';
// import "antd/dist/antd.css";
import { SurveyPDF } from "survey-pdf";

StylesManager.applyTheme("defaultV2");

function SurveyComponent() {
  
    const [data, setData] = useState(0);
    const [show, setShow] = useState(false);
    const [showButton, setShowButton] = useState(false);

    function buttonClick() {
      if(show === true){
        setShow(false);
      }else{
        setShow(true);
        
      }
    }

    const survey = new Model(json);

    const exportToPdfOptions = {
      fontSize: 12
    };

    const savePdf = function (surveyData) {
      const surveyPdf = new SurveyPDF(json, exportToPdfOptions);
      surveyPdf.data = surveyData;
      surveyPdf.save();
    };

    survey.addNavigationItem({
      id: "pdf-export",
      title: "Save as PDF",
      action: () => savePdf(survey.data)
    });

    survey.onComplete.add(function (sender) {
        // document.querySelector('#surveyResult').textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
        // var data = JSON.stringify(sender.data, null, 3);
        var data = sender.data;
        setData(data);
        setShowButton(true);
        // setShow(true);
      });

    return (
        <div className="App">
          {show ?
                <DiagramComponent data={data}/> :
                  <Survey model={survey} id="surveyContainer" />
            }
            <br></br>
            <br></br>
            {showButton ?
                // <button onClick={buttonClick}>show</button> :
                <Button type="primary" onClick={buttonClick}>Show In Diagram</Button> :
                null
            }
            {/* <div id="surveyResult"></div> */}
        </div>
    );
}

export default SurveyComponent;
