import React, {useState} from 'react';
import axios from 'axios'
import {CardElement, injectStripe} from 'react-stripe-elements'


const CheckoutForm = (props) => {
  const [complete, setComplete] = useState(false)
    const submit = async (ev) => {
      let {token} = await props.stripe.createToken({name: "Name"});
        await axios.post('/charge', {
            headers: {"Content-Type": "text/plain"},
            token: token.id,
            amount: "2000", 
        }
    ).then(res => {
      if(res.status === 200) {
        console.log(res)
          setComplete(!complete)
        }
      })
      .catch(err => console.log(err))
    }

  return (
    <div>
      {complete ? <p>your Purchase is complete</p> : null}
      <p>enter your card information here. this is for test purposes only.</p>
      <CardElement />
      <button onClick={submit}>Purchase</button>
    </div>
  );
};

export default injectStripe(CheckoutForm);