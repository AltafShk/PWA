import React, { useState } from 'react';
import { Form, Label, Input } from 'reactstrap';

export default function ZakaatCalculator() {
    const [zakat, changeAmt] = useState(0);
    
    return(
        <div>
            <h4 className='text-center'>Calculate your Zaakat</h4>
            <Form>
                <Label for='amt'>Enter your amount: </Label>
                <Input className='w-50 text-center align-items-center' htmlFor='amt' onChange={(e) => {
                    if (typeof(0.25 * e.target.value) === typeof(1) ){
                        return changeAmt(0.25 * e.target.value)
                    }
                }}/>
            </Form>
            <h6>Your zaakat: {zakat}</h6>
        </div>
    )
}