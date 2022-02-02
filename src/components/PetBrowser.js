import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  petCards = () => {
    return this.props.pets.map(petAttributes => {
      return <Pet key={petAttributes.id} pet={petAttributes} onAdoptPet={this.props.onAdoptPet} />
    })
  }
  render() {
    return (
      <div className="ui cards">
        {this.petCards()}
      </div>
    )
  }
}

export default PetBrowser
