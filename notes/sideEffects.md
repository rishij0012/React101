-  def:-  http request or managing time .. other than DOM manipulation or user input task are side effects 
- should not be done in side the component ... if done leads to infinite call of the api as component re-render 
    each time something is changed

function App() {
        const [isLoggedIn, setIsLoggedIn] = useState(false); 

        const getLoggedIn = localStorage.getItem("isLoggedIn"); // here as it change the state variable component re=render
                                                                which leads to again call for login nd change ... infinite loop 
                                                                ... error too re-render 
        setIsLoggedIn(getLoggedIn);
    }

------------ HOOKS -------------------- 
- useEffect : its used when we need the function to executed when user/http req need something to get executed
            - it will run after component render hojaega 

        useEffect(() => {
            console.log("check123");

            return () => {
            console.log("clean up function");
            }
        } , [])  ---> clean up function : runs when the component unmounts
                      check123 : runs when at mount time

    - also called at time of 1st render of component nd also dependency change
        useEffect(() => {
            console.log("use effect called in logged in ");
            setFormIsValid(
            enteredEmail.includes("@") && enteredPassword.trim().length > 6
            );
        }, [enteredEmail, enteredPassword]); 






