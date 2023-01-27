import React, { useState } from 'react';

export default function Form() {
    const [Data,setData]=useState(
    {
        Nom:'',
        Adress:'',
        Gender:'',
        Checked:'',
        Ville: '',
     
    }
);


// const [Errors,setErrors]=useState(
//   {
//     ErrorsName:'',
//     ErrorsAdress:'',
//         // SexeE:'',
//         // LoisireE:'',
//         // VilleE:''
//     }
// )
const [ErrorsName,setErrorsName]=useState('')
const [ErrorsAdress,setErrorsAdress]=useState('')
const [ErrorsGender,setErrorsGender]=useState('')
const [ErrorsChecked,setErrorsChecked]=useState('')
const [ErrorsVille,setErrorsVille]=useState('')

const [show, setShow] = useState(false);


    
    

const FormHandler=(e)=>{
    e.preventDefault();
    Validate(Data);
}
const Validate=(values)=>{
  const Nomregex=/[a-zA-Z]/;  
  const Adressregex=/[a-zA-Z]/;
  const Genderregex=/[A-Z]{1}[a-zA-Z]/;
  const Checkedregex=/[a-zA-Z]/;
  const Villeregex=/[a-zA-Z]/;
    if(values.Nom!==''){
        if(Nomregex.test(values.Nom)!==true){ 
            setData({Nom:''})
            setErrorsName('nom can not be number')
            setShow(false)
            // setErrors({...Errors,ErrorsName:'nom can not be number'})
        }
        
    }
    else{
        setData({Nom:''})
        setErrorsName('nom required')
        setShow(false)
        // setErrors({...Errors,ErrorsName:'nom required'})
    } 
    if(values.Adress!==''){
        if( Adressregex.test(values.Adress)!==true){ 
            setData({Adress:''})
            setErrorsAdress('Adress should be valid')
            setShow(false)
            // setErrors({...Errors,ErrorsAdress:'Adress should be valid'})
        }
        
    }
    else{
        setData({Adress:''})
        setErrorsAdress('Adress required')
        setShow(false)
        // setErrors({...Errors,ErrorsAdress:'Adress required'})
    }
    if(values.Gender!==''){
        if( Genderregex.test(values.Gender)!==true){ 
            setData({Gender:''})
            setErrorsGender('Adress should be valid')
            setShow(false)
            
        }
        
    }
    else{
        setData({Gender:''})
        setErrorsGender('Adress required')
        setShow(false)
        
    }
    if(values.Checked!==''){
        if( Checkedregex.test(values.Checked)!==true){ 
            setData({Checked:''})
            setErrorsChecked('Adress should be valid')
            setShow(false)
            
        }
        
    }
    else{
        setData({Checked:''})
        setErrorsChecked('Adress required')
        setShow(false)
        
    }
    if(values.Ville!==''){
        if( Villeregex.test(values.Ville)!==true){ 
            setData({Ville:''})
            setErrorsVille('Ville should be valid')
            setShow(false)
            
        }
        
    }
    else{
        setData({Ville:''})
        setErrorsVille('Ville required')
        setShow(false)
        
    }

}




  return (

    <div>
        <h1>Formulaire de Saisie:</h1>
<form onSubmit={FormHandler}>
    <fieldset>
    <label>Nom Etudiant : </label>
    <input type='text' placeholder='entrer votre nom ' value={Data.Nom} onChange={(e)=>{setData({...Data,Nom:e.target.value})}}/><span>{ErrorsName}</span><br/><br/>
    <label>Adress : </label>
    <textarea placeholder='Entrer votre adress......'value={Data.Adress} onChange={(e)=>setData({...Data, Adress: e.target.value})}/><span>{ErrorsAdress}</span><br/><br/>
    <label onChange={(e)=>{setData({...Data,Gender:e.target.value})}}>
        Sexe : 
    M : <input type='radio'name='gender' value='Homme' checked={Data.Gender==='Homme'}/>
    F :<input type='radio' name='gender' value='Femme' checked={Data.Gender==='Femme'}/>
    </label>
    <span>{ErrorsGender}</span>
    <br/><br/>
    <label onChange={(e)=>setData({...Data,Checked:e.target.name})}>
        Loisires :  
    Info:<input type='checkbox'name='Info' value={Data.Checked} /> 
    Sport:<input type='checkbox'name='Sport'value={Data.Checked} />
    Lecture:<input type='checkbox'name='Lecture' value={Data.Checked}/>
    </label>
    <span>{ErrorsChecked}</span>
    <br/><br/>
    <label>Ville : </label>
    <select onChange={(e)=>{setData({...Data,Ville:e.target.value})}} >
        <option name='Marrakech' value='' aria-readonly>Choose one city</option>
        <option name='Marrakech' value='Marrakech' >Marrakech</option>
        <option name='CasaBlanca' value='CasaBlanca' >CasaBlanca</option>
        <option name='Rabat' value='Rabat' >Rabat</option>
        <option name='Fes'  value='Fes'>Fes</option>
        <option name='Tanger' value='Tanger'>Tanger</option>
    </select>
    <span>{ErrorsVille}</span>
    <br/><br/>
   
    <input type='submit' value='Envoyer' onClick={() => {setShow(true)}}/>
    </fieldset>
    </form>
    
    Infos: 
    <div>
        {
        show?<>nom: <span>{Data.Nom}</span> <br/><br/>     
        Adress: <span>{Data.Adress}</span><br/><br/>
        Gender: <span>{Data.Gender}</span><br/><br/>
        Loisir: <span>{Data.Checked}</span><br/><br/>
        Ville: <span>{Data.Ville}</span><br/><br/>
        
        
        
        </>:
        "nothing..."

        }
        
    </div>

    </div>

   


  )
}
 