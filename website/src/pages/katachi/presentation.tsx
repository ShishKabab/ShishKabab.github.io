import React from "react";

class Presentation extends React.Component {
  componentDidMount(): void {
    window.location.href =
      'https://docs.google.com/presentation/d/e/'+
      '2PACX-1vSeO5aT3T-fNmmQ7tllU_3NzMYwki80cLwymplvrlIaEVjy516G9giyrK_E0pjW_J5JUemO9BrFLPpQ/pub' +
      '?start=false&loop=false&delayms=3000'
  }

  render(): React.ReactNode {
    return null
  }
}

export default Presentation
