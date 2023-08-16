- def: refers to changes not in the DOM , other functionality like HTTP call , timers .... 

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

