function Card(Props)
{
    return(
        <div style={{background:Props.bgcolor}} className="px-10 py-5 text-center border rounded-md flex-grow">
        <h1 className="font-medium text-2xl">{Props.title}</h1>
        <p>{Props.subtitle}</p>
      </div>
    )
}

export default Card