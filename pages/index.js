import Nav from '../components/Nav'
import Head from 'next/head';
import Header from '../components/Header';
import Results from '../components/Results';
import requests from '../utility/requests';
export default function Home({results}) {
   
  return (
    <div >
    <Head>
      <title>Test App</title>
    </Head>
    <Header/>
    <Nav/>
    <Results results={results}/>
       
    </div>
  )
}
export async function getServerSideProps(context){
  const genre = context.query.genre;
   
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url||requests.fetchTrending.url}`)
  .then((res)=>res.json())
  return{
    props:{
      results:request.results,
    },
  }
  
}