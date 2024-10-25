import '../styles/Error.css'

function Error() {


  return (
    <div className="error">
      <h1 className="titleError">404</h1>
      <p className="textError"><span className='line1'>Oups ! La page que</span> <span className='line2'> vous demandez n'existe pas.</span></p>
      <a className="linkError" href="/">Retourner sur la page d’accueil</a>
    </div>
  )
}

export default Error
