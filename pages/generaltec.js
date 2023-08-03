import GeneralTecPage from "../components/templates/GeneralTecPage";

const generaltec = ({generalTecs}) => {
    return (
        <div className="mh-100vh">
            <GeneralTecPage generalTecs={generalTecs} />
        </div>
    );
};

export default generaltec;

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clkt8z28z0pr401t23gcj6mkk/master",
    cache: new InMemoryCache()
  });

  const { data } = await client.query({

    query: gql`
        query MyQuery {
  generalTecs {
    coverPhoto {
      url
    }
    description
    title
    slug
  }
}
    `
  });

  return {
    props: {
      generalTecs:data.generalTecs
    }
  };
}