
function Header(props)
{
   return(
    <div>
    <h1 className="text-3xl font-medium p5">hello {props.username}</h1>
    <p>I help you mange your activities:)</p>
</div>
   )
}

export default Header