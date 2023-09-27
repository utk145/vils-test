import React from 'react'

const MidUp = () => {
  return (
    <div className='mid_up'>
      <div className="mid_up_1">
        <h2>Your Answer:</h2><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eveniet inventore, consequuntur <span style={{ backgroundColor: "#dca11d", color: "white" }}>assumenda</span> ipsum porro perferendis. Iste totam quisquam, soluta a ullam nulla suscipit? <span style={{ backgroundColor: "#e26161", color: "white" }}>Reprehenderit</span> deleniti sapiente voluptatibus <span style={{ backgroundColor: "#1c99eb", color: "white" }}>sunt</span> quibusdam?
        <br /><br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis blanditiis incidunt odit saepe temporibus quod officiis neque maiores dolores reprehenderit natus sint fugiat, facilis fugit numquam? Debitis voluptate magni officia.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, unde ratione! Doloremque nihil voluptatum impedit veritatis quibusdam eum quae incidunt, aut quaerat rerum ea. Dignissimos numquam aperiam optio? Maxime, similique!
      </div>
      <div className="mid_up_2">
        <div className='mid_up_2_wrap'>
          <span className='span_ht re'></span>
          <span>Grammatical Error</span>
        </div>
        <div className='mid_up_2_wrap'>
          <span className='span_ht gol'></span>
          <span>Vocab Error</span>
        </div>
        <div className='mid_up_2_wrap'>
          <span className='span_ht bl'></span>
          <span>Spelling Error</span>
        </div>
      </div>
    </div>
  )
}

export default MidUp