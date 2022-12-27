import { Language } from "@material-ui/icons";
import React, { useState } from "react";

function Demo() {
  const [userinfo, setUserInfo] = useState<any>({
    languages: [],
    response: [],
  });

  const handleChange = (e: any) => {
    // Destructuring
    const { value, checked } = e.target;
    const { languages } = userinfo;

    console.log(`${value} is ${checked}`);
    console.log(languages);

    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        languages: [...languages, value],
        response: [...languages, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        languages: languages.filter((e: any) => e !== value),
        response: languages.filter((e: any) => e !== value),
      });
    }
  };

  return (
    <>
      {userinfo.languages.map((item: any) => {
        return <div>{item}</div>;
      })}
      <div>
        <div>
          <h3>Your programming expertise lies in what languages? </h3>

          <form>
            <div>
              <div>
                <div>
                  <input
                    type="checkbox"
                    name="languages"
                    value="Javascript"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label htmlFor="flexCheckDefault">Javascript</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="languages"
                    value="Python"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label htmlFor="flexCheckDefault">Python</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="languages"
                    value="Java"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label htmlFor="flexCheckDefault">Java</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="languages"
                    value="PHP"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label htmlFor="flexCheckDefault">PHP</label>
                </div>
              </div>
              <div>
                <div>
                  <input
                    type="checkbox"
                    name="languages"
                    value="C#"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    C#
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="exampleFormControlTextarea1">
                You're proficient in the following languages :{" "}
              </label>
              <textarea
                name="response"
                value={userinfo.response}
                placeholder="The checkbox values will be displayed here "
                id="floatingTextarea2"
                style={{ height: "150px" }}
                onChange={handleChange}
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Demo;
