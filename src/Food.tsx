function Food(){

    const food1="Web";
    const food2="Java";

    return(
        <ul>
            <li>Iot</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );

}

export default Food