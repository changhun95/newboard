import React from "react";

<<<<<<< HEAD
function CheckBox({ continents, checkedContinents, onFilters }) {
=======
function CheckBox({continents, checkedContinents, onFilters}) {
>>>>>>> 056b5e512fc545880e5ef2cca9ff5ecb1a61c6fa
  const handelToggle = (continentsId) => {
    const currentIndex = checkedContinents.indexOf(continentsId);

    const newChecked = [...checkedContinents];
    if (currentIndex === -1) {
      newChecked.push(continentsId);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    onFilters(newChecked);
  };
<<<<<<< HEAD
  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
=======

  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-5 ">
>>>>>>> 056b5e512fc545880e5ef2cca9ff5ecb1a61c6fa
      {continents?.map((continents) => {
        return (
          <div className="bg-blue-100 px-2 py-4" key={continents._id}>
            <input
              type="checkbox"
              id={continents._id}
              onChange={() => {
                handelToggle(continents._id);
              }}
              checked={
                checkedContinents.indexOf(continents._id) === -1 ? false : true
              }
            />
<<<<<<< HEAD
            <label htmlFor={continents._id} />
            {continents.name}
            <label />
=======
            <label htmlFor={continents._id}> {continents.name}</label>
>>>>>>> 056b5e512fc545880e5ef2cca9ff5ecb1a61c6fa
          </div>
        );
      })}
    </div>
  );
}

export default CheckBox;
