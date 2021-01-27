import React, {useState} from 'react'
import data from './data'
import Questions from './Questions'

function App() {
  const [questions] = useState(data)
  
  return (
    <main >
      <div className='container'>
        <h3>Questions And Answers About Login</h3>
        <section className='info'>  
          {
            questions.map((question) => {
              return (
                <Questions key={question.id} {...question}/>
              )
            })}
        </section>
      </div>
    </main>
  );
}

export default App;
