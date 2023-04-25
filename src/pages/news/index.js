

export default function News({articles}){
  return (
    <div>
      <h3>News Lists </h3>
      {
        articles.map(each => {
          return (
            <div key={each.id}>
              <h2> {each.id} | {each.title}</h2>
            </div>
          )
        })
      }
    </div>
  )
}

export async function getServerSideProps(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()


  return {
    props: {
      articles: data
    }
  }
}