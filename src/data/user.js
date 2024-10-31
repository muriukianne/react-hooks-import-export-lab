
export const username = "Liza";
export const city = "New York";

export const image = "https://i.imgur.com/mV8PQxj.gif";

// export all three variables as named exports

export default function User (){
    return(
      <div>
        <h1>{username}</h1>
        <p>{city}</p>
        <p>{image}</p>
      </div>

    )
}
