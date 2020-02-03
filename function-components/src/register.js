//import react statements
import React from 'react';


const RegisterUser = () =>  {

    const name=  'Developer';

    const refVariable = `The JSX variables declared inside a component, can be used inside html tag by using single curly braces '{}'. \n
    The inline-styles in JSX used double curly braces which contains key-value pair '{{ backgroundColor:'red'}}'.`

    return (
        <div className='form'>
            <h5><label htmlFor="name">Hi there!! {name}</label></h5> 
            <div>
                <h5>Referencing JSX variables & Inline Style attributes</h5>
                <p>
                    {refVariable}
                </p>
            </div>
        </div>
    );
}

export default RegisterUser;