import React, {useState, useCallback} from 'react'
import Button_26 from './Button_26'
import Count26 from './Count26'
import Title_26 from './Title_26'


function ParentComponent_26() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() =>{
        setAge(age + 1);
    }, [age])
    const incrementSalary = useCallback(() =>{
        setSalary(salary + 1000);
    },[salary])
    

    return (
        <div>
            <Title_26/>
            <Count26 text="Age" count={age}/>
            <Button_26 handleClick={incrementAge}>Increment Age</Button_26>
            <Count26 text="Salary" count={salary}/>
            <Button_26 handleClick={incrementSalary}>Increment Salary</Button_26>
        </div>
    )
}

export default ParentComponent_26
