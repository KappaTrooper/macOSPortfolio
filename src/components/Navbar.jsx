

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src="/images/logo.svg" alt="logo"/>
            <p className="font-bold"> Ajay's Portfolio</p>

            <ul>
                {[
                    {id: 1, name: "Portfolio" },
                    {id: 1, name: "Contact" },
                    {id: 1, name: "Project" },
                ].map(({ id, name }) => (
                    <li key={id}>
                        <p>{name}</p>
                    </li> 
                
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar