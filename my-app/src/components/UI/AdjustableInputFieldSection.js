import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./AdjustableInputFieldSection.scss";
import RemovableInputField from "./RemovableInputField";
import ButtonSecondary from "./ButtonSecondary";

export default function AdjustableInputFieldSection(props) {
  const [inputNames, setInputNames] = useState(() => {
    if (props.steps && props.steps.length > 0) {
      return props.steps.map((step) => ({ id: uuidv4(), name: step.name }));
    } else {
      return [{ id: uuidv4(), name: "" }];
    }
  });

  useEffect(() => {
    props.setBoardColumns(inputNames);
  }, [inputNames, props]);

  const addInputField = () => {
    // max 6 steps possible
    if (inputNames.length < 6) {
      const newInput = { id: uuidv4(), name: "" };
      setInputNames((values) => [...values, newInput]);
    }
  };

  const removeInputField = (id) => {
    setInputNames((values) => {
      const index = values.findIndex((input) => input.id === id);
      if (
        props.steps &&
        props.steps.length > index &&
        props.steps[index].tasks.length === 0
      ) {
        return values.filter((input) => input.id !== id);
      } else {
        return values;
      }
    });
  };

  const handleChange = (id, name) => {
    setInputNames((values) => {
      const newValues = [...values];
      const index = newValues.findIndex((input) => input.id === id);
      newValues[index].name = name;
      return newValues;
    });
  };

  const inputFields = inputNames.map((input) => (
    <RemovableInputField
      key={input.id}
      value={input.name}
      onCrossClick={() => removeInputField(input.id)}
      onChange={(event) => handleChange(input.id, event.target.value)}
    />
  ));

  return (
    <div className="AdjustableFieldSectionContainer">
      {inputFields}
      <ButtonSecondary type="button" onClick={addInputField}>
        +Add New Column
      </ButtonSecondary>
    </div>
  );
}
