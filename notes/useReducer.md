------------- useReducer ---------------------
- state change karenga
- use where more complex state : 
    - multiple state 
    - multiple ways to change state or dependicies to other state

e.g forms validation of email nd password : 
    - email validation require enteredEmail , isEmailValid ( related )
    - form is valid or not ( isFormValid ) depends on the above state 
    - also to set isFormValid state : 
        setIsFormValid(enteredEmail.includes("@")) 
        // here we use other state variable to manage the state of the form
        // function bhi nai use krskte as we get previous state of isFormValid state 
        i.e
            [BUG]
            setIsFormValid((preState) => {
                // preState : isFormValid iski current state hai 
                
                [BUG]
                return enteredEmail.includes("@") // yaha pe current state lene mai issue aega for complex apps
            })

-   But you should avoid this code:

    useEffect(() => {
    // code that only uses someProperty ...
    }, [someObject]);
    Why?

    Because now the effect function would re-run whenever ANY property of someObject changes - not just the one property (someProperty in the above example) our effect might depend on.