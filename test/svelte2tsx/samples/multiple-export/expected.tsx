<></>;function render() {

     let number1: number
     let number2: number
;
<>
<h1>{number1} + {number2} = {number1 + number2}</h1></>
return { props: {number1 , number2}, slots: {} }}

export default class {
    $$prop_def = render().props
    $$slot_def = render().slots
}