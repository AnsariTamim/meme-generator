import React, { useState } from "react";

const GetCheckboxValue = () => {


  const [language, setLanguage] = useState([]);

  const onChange = (event) => {
    console.log("Event check", event.target.checked);

    const isChecked = event.target.checked;

    if (isChecked) {
      setLanguage([...language, event.target.value]);
    } else {
      let index = language.indexOf(event.target.value);
      language.splice(index, 1);
      setLanguage(language);
    }
  };
  const onSubmit = (event) => {
    event.preventDefault(); 
  };

  console.log("Selected Languages=====>", language);
  return (
    <div className="container">
      <div className="checks">
        <form onSubmit={onSubmit}>
          <h3>Select languages.</h3>
          <input
            type="checkbox"
            name="languages"
            value="French"
            onChange={onChange}
          />
          <label htmlFor="language1"> French</label>
          <br />
          <input
            type="checkbox"
            name="languages"
            value="Spanish"
            onChange={onChange}
          />
          <label htmlFor="language2"> Spanish</label>
          <br />
          <input
            type="checkbox"
            name="languages"
            value="German"
            onChange={onChange}
          />
          <label htmlFor="language3"> German</label>
          <br />
          <input
            type="checkbox"
            name="languages"
            value="Hindi"
            onChange={onChange}
          />
          <label htmlFor="language4"> Hindi</label>
          <br />
          <input
            type="checkbox"
            name="languages"
            value="Japanese"
            onChange={onChange}
          />
          <label htmlFor="language5"> Japanese</label>
          <br />
          <input
            type="checkbox"
            name="languages"
            value="Mandarin"
            onChange={onChange}
          />
          <label htmlFor="language6"> Mandarin</label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default GetCheckboxValue;
