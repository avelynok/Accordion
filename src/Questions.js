import React, {useState} from 'react'

const Question = ({title, info}) => {
    const [showMore, setShowMore] = useState(false)
    
    function handleToggle(){
        setShowMore(!showMore)
    }
    
    return (
    <article  className='question'>
        <header>
            <h4>{title}</h4>
            <button className='btn' onClick={handleToggle}>
                {showMore ? "-" : "+"}
            </button>
        </header>
        {showMore && <p>{info}</p>}
    </article>
    )
}

export default Question
