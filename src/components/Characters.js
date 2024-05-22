import React from 'react'

export default function Characters(props) {
    const {characters} = props;
    console.log(props)
  return (
    <div className='characters'>
        <h1>Personaje</h1>
        <span className='back-home'>Home</span>
        <div className='container-characters'>
            {characters.map((character, index) => (
                <div className='character-container' key={index}>
                    <p>{character.name}</p>
                    <div>
                        <img src={character.image} alt={character.name}/>
                    </div>
                    <div> 
                        <h3>{character.name}</h3>
                        <h6>
                            {character.status === 'Alive' ? (
                                <>
                                <span className='alive'>
                                    Alive
                                </span>
                                </>
                            ) : (
                                <span className='dead'>
                                    Dead
                                </span>

                            )
                        }    
                        </h6>
                    </div>
                </div>    

            )
            )
            }
          

        </div>
      
    </div>
  )
}