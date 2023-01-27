import React from "react";

class Formul extends React.Component {
  constructor(props) {
    super(props)
    this.options = ["casa", "rabat", "kech"]
    this.state = {
      nomEtudient: '',
      loisire: [false, false, false],
      address: '',
      sexe: '',
      ville: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlenome = this.handlenome.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleville = this.handleville.bind(this)
    this.handleloi = this.handleloi.bind(this)
    this.handleadress = this.handleadress.bind(this)
  }
  handlenome(e) {
    this.setState({ nomEtudient: e.target.value })
  }
  handleadress(e) {
    this.setState({ address: e.target.value })
  }
  handleChange(e) {
    this.setState({ sexe: e.target.value })
  }
  handleville(e) {
    this.setState({ ville: e.target.value })
  }
  handleloi(e) {
   var k = this.state.loisire.map((el, index) => {
      if (index == e.target.id) { return !el }
      else {
        return el
      }
    })
    this.setState({loisire: k})
    console.log(k)
    console.log(e.target.id)
    // var l = this.state.loisire
    // var ch = e.target.checked
    // if (ch === true) {
    //   this.setState({ loisire: [...l, e.target.value] })
    // }
    // else {
    //   var result = l.filter((el) => { return el !== e.target.value })
    //   this.setState({ loisire: result })
    //   console.log(e.target.value)
    // }
  }
  handleSubmit(e) {
    this.state.map((el)=>{
      return el
    })
    e.preventDefault();
  }
  render() {
    return <div>{
      <form onSubmit={this.handleSubmit}>
        <label>
          Nom Etudiant :
          <input type="text" name="nom"
            onChange={this.handlenome} value={this.state.nomEtudient} />
        </label><br />
        <label>
          Address :
          <textarea cols={this.props.cols}
            onChange={this.handleadress} value={this.state.address} /><br />
        </label>
        <label onChange={this.handleChange}>
          Sexe :
          homme <input type="radio" name="sexe" value='homme' checked={this.state.sexe === 'homme'} />
          femme <input type="radio" name="sexe" value='femme' checked={this.state.sexe === 'femme'} />
        </label><br />
        <label onChange={this.handleloi}>
          loisirs :
          info <input type="checkbox" name="loisir" value='info' checked={this.state.loisire[0]} id={0} />
          {
            /* info <input type="checkbox" name="loisir" value='info' checked={this.state.loisire.find((el) => { return el === 'info' }) !== undefined} /> */
          }
          sport <input type="checkbox" name="loisir" value='sport' checked={this.state.loisire[1]} id={1} />

          {
          /* sport <input type="checkbox" name="loisir" value='sport' checked={this.state.loisire.find((el) => { return el === 'sport' }) !== undefined} /> */}
          lecture <input type="checkbox" name="loisir" value='lecture' checked={this.state.loisire[2]} id={2} />
        </label><br />
        <label htmlFor="ville" onChange={this.handleville}>ville
          <select defaultValue={1} value={this.state.ville}>
            {this.options.map((option, index) => {
              return <option key={index + 1}
                value={option}>{option}</option>
            })}

          </select></label><br />

        <input type="submit" value="Envoyer" />
      </form>
    }
    </div>
      ;
  }
}


export default Formul