import React, {useState, useEffect} from 'react';

function Example(props) {

    let [count, setCount] = useState(0)

    function increase() {
        setCount(prevState => prevState + 1)
    }

    useEffect(() => {
          console.log(count)
        document.title = count

    })

    return (
        <div>{count}
            <button onClick={increase}>Add</button>
        </div>

    );
}

export default Example;