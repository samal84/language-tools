<></>;
    import Add from "./Add.svelte"
function render() {

    let b = "3"
;
<>

<Add number1={1} number2="2" />

</>
return { props: {}, slots: {} }}

export default class {
    $$prop_def = render().props
    $$slot_def = render().slots
}