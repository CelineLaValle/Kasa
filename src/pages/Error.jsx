import '../styles/Error.css'

function Error() {


  return (
    <div className="error">
      <h1 className="titleError">404</h1>
      <p className="textError">Oups ! La page que vous demandez n'existe pas.</p>
      <a className="linkError" href="/">Retourner sur la page d’accueil</a>
    </div>
  )
}

export default Error
