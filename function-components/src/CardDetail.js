import React from 'react';


const CardDetail =  (props) => {

    return (
        <div className="card">
                    <div className="content">
                        <div className="header">
                            {props.question}
                        </div>
                        <div className="description">
                            {props.answer}
                        </div>
                    </div>
                </div>
    );
}


export default CardDetail;