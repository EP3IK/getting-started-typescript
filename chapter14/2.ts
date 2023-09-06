function updateInput1(textInput: number | string | boolean) {
  textInput.toFixed(2);
  // (textInput as number).toFixed(2);
}

updateInput1("hello");

function updateInput2(textInput: number | string | boolean) {
  if (typeof textInput === "number") {
    textInput.toFixed(2);
    return;
  }
  if (typeof textInput === "string") {
    console.log(textInput.length);
    return;
  }
}

export {};
