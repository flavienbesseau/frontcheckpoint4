import React, { useState, useEffect } from "react";
import axios from "axios";

const Api = () => {
  const [getTeachers, setGetTeachers] = useState([]);
  const [getClasses, setGetClasses] = useState([]);
  const [getPupils, setGetPupils] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/teachers`)
      .then((data) => setGetTeachers(data));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/pupils`)
      .then((data) => setGetPupils(data));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/classes`)
      .then((data) => setGetClasses(data));
  }, []);

  return (
    <div>
      <select>
        {getPupils.map((pupil) => (
          <option key={pupil.id} value={pupil.id}>
            {pupil.family_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Api;

// const addPupil = (pupil) => axios.post("...").then(cb);
// const modifyPupils = () => axios.put("...").then();
// const deletePupils = () => axios.delete("...").then();
// const seePupil = () => axios.get("...").then();

// const addPupil = (pupil) => axios.post("...").then();
// const modifyPupils = () => axios.put("...").then();
// const deletePupils = () => axios.delete("...").then();
// const seePupil = () => axios.get("...").then();

// const addPupil = (pupil) => axios.post("...").then();
// const modifyPupils = () => axios.put("...").then();
// const deletePupils = () => axios.delete("...").then();
// const seePupil = () => axios.get("...").then();

// export default {
//   pupils: {
//     add: addPupil,
//     modify: modifyPupils,
//     delete: deletePupils,
//   },
//   classe: {
//     add: addaddClass,
//     modify: modifyClass,
//     delete: deleteClass,
//     see: seeClass,
//   },
// };
