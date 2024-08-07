const details = [
    {
        type: "text",
        id: "full_name",
        name: "full_name",
        maxLength: "25",
        minLength: "3",
        pattern: "[a-zA-Z]+",
        placeholder: "Enter Your Full Name",
        required: "true",
        value: "",
        label: "Full Name: ",
    },
    {
        type: "email",
        id: "email",
        name: "email",
        maxLength: "30",
        minLength: "10",
        pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+",
        placeholder: "Enter Your Email Address",
        required: "true",
        value: "",
        label: "Email: ",
    },
    { type: "checkbox", id: "accept", name: "accept", required: "true", checked: "", value: "", label: "Accept Terms: " },
    {
        type: "password",
        id: "password",
        name: "password",
        maxLength: "25",
        minLength: "8",
        pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+",
        placeholder: "",
        required: "true",
        value: "",
        label: "Password: ",
    },
    { type: "date", id: "date", name: "dob", max: "", min: "", placeholder: "", required: "true", value: "", label: "Enter Date of Birth: " },
    { type: "number", id: "marks", name: "marks", min: "0", max: "100", placeholder: "", required: "true", value: "", label: "Enter Marks: " },
    { type: "radio", id: "gender1", name: "gender", required: "true", checked: "", value: "Male", label: "Male" },
    { type: "radio", id: "gender2", name: "gender", required: "true", checked: "", value: "Female", label: "Female" },
    {
        type: "select",
        id: "state",
        name: "state",
        required: "true",
        value: "delhi",
        label: "Enter Your City: ",
        options: [
            { label: "Delhi", value: "delhi" },
            { label: "Mumbai", value: "mumbai" },
            { label: "UP", value: "Up" },
        ],
    },
];

let genrtrbtn=document.querySelector('.genrtrbtn');
const dynform=document.querySelector('.dynform');
dynform.style.visibility = 'hidden'

genrtrbtn.addEventListener('click',()=>{

    dynform.style.visibility = 'visible';
    dynform.innerHTML='';

    details.forEach(field=>{
        let formEle;

        const label=document.createElement('label');
        label.className='label';
        label.textContent=field.label;

        switch (field.type){
            case 'text':
            case 'email':``
            case 'password':
            case 'number':
             formEle=document.createElement('input');
             formEle.type=field.type;
             formEle.id=field.id;
             formEle.name = field.name;
             formEle.maxLength = field.maxLength;
             formEle.minLength = field.minLength;
             formEle.pattern = field.pattern;
             formEle.placeholder = field.placeholder;
             formEle.required=field.required;
             formEle.value=field.value;
             break;
             
             case 'checkbox':
                formEle=document.createElement('input');
                formEle.type=field.type;
                formEle.id=field.id;
                formEle.name = field.name;
                formEle.checked=field.checked;
                formEle.required=field.required;
                break;
            
            case 'radio':
                formEle=document.createElement('input');
                formEle.type=field.type;
                formEle.id=field.id;
                formEle.name = field.name;
                formEle.value=field.value;
                formEle.checked=field.checked;
                formEle.required=field.required;
                break;

            case 'date':
               formEle = document.createElement('input');
               formEle.type = field.type;
               formEle.id = field.id;
               formEle.name = field.name;
               formEle.max = field.max;
               formEle.min = field.min;
               formEle.required = field.required;
               break;    

               case 'select':
                formEle = document.createElement('select');
                formEle.id = field.id;
                formEle.name = field.name;
                formEle.required = field.required;
                field.options.forEach(option => {
                    const opt = document.createElement('option');
                    opt.value = option.value;
                    opt.textContent = option.label;
                    formEle.appendChild(opt);
                });
                break;
        }
        
            dynform.appendChild(label);
            dynform.appendChild(formEle);
            

    })
    btn=document.createElement('input')
    btn.className='genrtrbtn';
        btn.type='submit';
        btn.value='Submit';
    genrtrbtn.remove();
    dynform.appendChild(btn);
})

