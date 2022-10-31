import React, { useState } from 'react';

import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import DiagramComponent from './DiagramComponent';
import "survey-core/defaultV2.css";
import "./index.css";
import { json } from "./json"

StylesManager.applyTheme("defaultV2");

function SurveyComponent() {
    const [data, setData] = useState(0);
    const [showComponent] = useState(true);
    const survey = new Model(json);
    survey.onComplete.add(function (sender) {
        document.querySelector('#surveyResult').textContent = "Result JSON:\n" + JSON.stringify(sender.data.feelings_of_happiness, null, 3);
        var data = sender.data.feelings_of_happiness;
        setData(data);
      });
    return (
        <div>
            <Survey model={survey} />
            <div id="surveyResult"></div>
            {showComponent ?
                <DiagramComponent data={data}/> :
                null
            }
        </div>
    );
}

export default SurveyComponent;
