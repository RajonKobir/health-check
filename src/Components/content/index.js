export const questions = {
    title: "",
    showProgressBar: "bottom",
    goNextPageAutomatic: true,
    allowCompleteSurveyAutomatic: false,
    pageNextText: "Dive Next",
    pagePrevText: "Go Back",
    completeText: "Finish Query",
    // showNavigationButtons: false,
  // "showTimerPanel": "top",
  // "maxTimeToFinishPage": 10,
  // "maxTimeToFinish": 25,
  // "firstPageIsStarted": true,
  // "startSurveyText": "Start Quiz",
  // focusFirstQuestionAutomatic: false,
  // "questionsOnPageMode": "singlePage",
  // "mode": "display",


    pages: [
      {
        "elements": [
          {
            "type": "rating",
            "name": "feelings_of_happiness",
            "title": "Feelings of happiness",
            "isRequired": true,
            "rateMin": 0,
            "rateMax": 10,
            "minRateDescription": "(Does not apply)",
            "maxRateDescription": "(It applies)"
          },

        ],
      }, {
        "elements": [
          {
            "type": "rating",
            "name": "ability_to_regenerate",
            "title": "Ability to regenerate",
            "isRequired": true,
            "rateMin": 0,
            "rateMax": 10,
            "minRateDescription": "(Does not apply)",
            "maxRateDescription": "(It applies)"
          }
        ]
      }, {
        "elements": [
          {
            "type": "rating",
            "name": "resilience",
            "title": "Resilience",
            "isRequired": true,
            "rateMin": 0,
            "rateMax": 10,
            "minRateDescription": "(Does not apply)",
            "maxRateDescription": "(It applies)"
          }
        ]
      }, {
        "elements": [
          {
            "type": "rating",
            "name": "emotional_stability",
            "title": "Emotional stability",
            "isRequired": true,
            "rateMin": 0,
            "rateMax": 10,
            "minRateDescription": "(Does not apply)",
            "maxRateDescription": "(It applies)"
          }
        ]
      }, {
        "elements": [
          {
            "type": "rating",
            "name": "basic_trust_or_foundation",
            "title": "Basic trust/foundation",
            "isRequired": true,
            "rateMin": 0,
            "rateMax": 10,
            "minRateDescription": "(Does not apply)",
            "maxRateDescription": "(It applies)"
          }
        ]
      }, {
        "elements": [
          {
            "type": "rating",
            "name": "inner_strength",
            "title": "Inner strength",
            "isRequired": true,
            "rateMin": 0,
            "rateMax": 10,
            "minRateDescription": "(Does not apply)",
            "maxRateDescription": "(It applies)"
          }
        ]
      }
    ],
    completedHtml: '<p>Your anwers are:</p><p>Feelings of happiness: <b>{feelings_of_happiness}</b>.</p><p>Ability to regenerate: <b>{ability_to_regenerate}</b>.</p> <p>Resilience: <b>{resilience}</b>.</p><p>Emotional stability: <b>{emotional_stability}</b>.</p><p>Basic trust/foundation: <b>{basic_trust_or_foundation}</b>.</p><p>Inner strength: <b>{inner_strength}</b>.</p></br></br>',
  };