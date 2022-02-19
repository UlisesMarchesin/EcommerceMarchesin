// snnipet: rafce

import { Fragment } from "react/cjs/react.production.min"

const Footer = ( {name, action, children} ) => {
  return (
    <Fragment>
        <div>Este es mi pie de página</div>
        <div>Espero que te haya gustado mi sitio {name}</div>
        <button onClick={action}>Dale click aqui</button>
        {children}
    </Fragment>
  )
}

export default Footer