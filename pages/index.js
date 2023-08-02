import HomePage from "../components/templates/HomePage";

export default function Home({grammerCategories , commonMistakes}) {
  return (
    <div className="mh-100vh">
      <HomePage grammerCategories={grammerCategories} commonMistakes={commonMistakes} />
    </div>
  )
}

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clkt8z28z0pr401t23gcj6mkk/master",
    cache: new InMemoryCache()
  });

  const { data } = await client.query({

    query: gql`
query MyQuery {
  grammerCategories {
    coverPhoto {
      url
    }
    title
    slug
    description
  }
  commonMistakes {
    coverPhoto {
      url
    }
    title
    slug
    description
  }
}

    `
  });

  return {
    props: {
      grammerCategories:data.grammerCategories,
      commonMistakes:data.commonMistakes
    }
  };
}
